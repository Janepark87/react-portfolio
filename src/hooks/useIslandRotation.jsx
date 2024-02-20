import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

export default function useIslandRotation(
	islandRef,
	isRotating,
	setIsRotating,
	setCurrentStage
) {
	const { gl, viewport } = useThree();
	const lastX = useRef(0);
	const rotationSpeed = useRef(0);
	const dampingFactor = 0.95;

	useEffect(() => {
		const handlePointerDown = (e) => {
			e.stopPropagation();
			e.preventDefault();
			setIsRotating(true);

			const clientX = e.touches ? e.touches[0].clientX : e.clientX;
			lastX.current = clientX;
		};

		const handlePointerUp = (e) => {
			e.stopPropagation();
			e.preventDefault();
			setIsRotating(false);
		};

		const handlePointerMove = (e) => {
			e.stopPropagation();
			e.preventDefault();

			if (isRotating) {
				const clientX = e.touches ? e.touches[0].clientX : e.clientX;
				const delta = (clientX - lastX.current) / viewport.width;

				islandRef.current.rotation.y += delta * 0.01 * Math.PI;
				lastX.current = clientX;
				rotationSpeed.current = delta * 0.01 * Math.PI;
			}
		};

		const handleKeyDown = (e) => {
			if (e.key === 'ArrowLeft') {
				if (!isRotating) setIsRotating(true);
				islandRef.current.rotation.y += 0.01 * Math.PI;
				rotationSpeed.current = 0.0125;
			} else if (e.key === 'ArrowRight') {
				if (!isRotating) setIsRotating(true);
				islandRef.current.rotation.y -= 0.01 * Math.PI;
				rotationSpeed.current = -0.0125;
			}
		};

		const handleKeyUp = (e) => {
			if (e.key === 'ArrowLeft' || e.key === 'ArrowRight')
				setIsRotating(false);
		};

		const canvas = gl.domElement;
		canvas.addEventListener('pointerdown', handlePointerDown);
		canvas.addEventListener('pointerup', handlePointerUp);
		canvas.addEventListener('pointermove', handlePointerMove);
		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('keyup', handleKeyUp);

		return () => {
			canvas.removeEventListener('pointerdown', handlePointerDown);
			canvas.removeEventListener('pointerup', handlePointerUp);
			canvas.removeEventListener('pointermove', handlePointerMove);
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('keyup', handleKeyUp);
		};
	}, [gl, islandRef, isRotating, setIsRotating, viewport.width]);

	useFrame(() => {
		if (!isRotating) {
			// If not rotating, apply damping to slow down the rotation (smoothly)
			rotationSpeed.current *= dampingFactor;

			if (Math.abs(rotationSpeed.current) < 0.001)
				rotationSpeed.current = 0;

			islandRef.current.rotation.y += rotationSpeed.current;
		} else {
			// When rotating, determine the current stage based on island's orientation
			const calculateStageRotationRanges = (totalStages) => {
				const rotationStep = (2 * Math.PI) / totalStages;
				const rotationRanges = [];

				for (let i = 0; i < totalStages; i++) {
					// Assign stage values in descending order
					const stage = totalStages - i;
					const min = i * rotationStep;
					const max = (i + 1) * rotationStep;

					rotationRanges.push({ stage, min, max });
				}

				return rotationRanges;
			};

			const determineStage = (rotation, stageRotationRanges) => {
				const normalizedRotation =
					((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

				for (const entry of stageRotationRanges) {
					if (
						normalizedRotation >= entry.min &&
						normalizedRotation <= entry.max
					) {
						return entry.stage;
					}
				}

				return null;
			};

			const totalStages = 4;
			const currentRotation = islandRef.current.rotation.y;
			const stageRotationRanges =
				calculateStageRotationRanges(totalStages);

			const currentStage = determineStage(
				currentRotation,
				stageRotationRanges
			);

			setCurrentStage(currentStage);
		}
	});
}
