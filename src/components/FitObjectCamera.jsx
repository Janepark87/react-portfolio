import { useEffect, useRef } from 'react';
import { CameraControls } from '@react-three/drei';

export default function FitObjectCamera({ fitValue = [10, 4, 3] }) {
	const controls = useRef();
	const meshFitCamera = useRef();

	const fitCamera = () => {
		controls.current.fitToBox(meshFitCamera.current, true);
	};

	useEffect(() => {
		controls.current.dolly(-22);
		controls.current.soothTime = 1.6;
		fitCamera();
	}, []);

	useEffect(() => {
		window.addEventListener('resize', fitCamera);
		return () => window.removeEventListener('resize', fitCamera);
	}, []);

	return (
		<>
			<CameraControls ref={controls} />
			<mesh ref={meshFitCamera} position-z={1.5} visible={false}>
				<boxGeometry args={fitValue} />
				<meshBasicMaterial color="orange" transparent opacity={0.5} />
			</mesh>
		</>
	);
}
