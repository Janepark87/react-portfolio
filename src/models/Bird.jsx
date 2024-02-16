import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import birdScene from '../assets/3d/bird.glb';

export default function Bird() {
	const birdRef = useRef();
	const { scene, animations } = useGLTF(birdScene);
	const { actions } = useAnimations(animations, birdRef);

	useEffect(() => {
		actions['Take 001'].play();
	}, [actions]);

	useFrame(({ clock, camera }) => {
		const bird = birdRef.current;

		// adjust the Y position to simulate bird-like motion using a sine wave pattern
		const offsetY = Math.sin(clock.elapsedTime) * 0.2;
		bird.position.y = offsetY + 2;

		// check if the bird reached a certain endpoint relative to the camera view
		if (bird.position.x > camera.position.x + 10) bird.rotation.y = Math.PI;
		else if (bird.position.x < camera.position.x - 10) bird.rotation.y = 0;

		// update the X and Z positions based on the direction
		if (bird.rotation.y === 0) {
			bird.position.x += 0.01;
			bird.position.z -= 0.01;
		} else {
			bird.position.x -= 0.01;
			bird.position.z += 0.01;
		}
	});

	return (
		<mesh
			ref={birdRef}
			position={[-3, 2, 0]}
			scale={[0.0025, 0.0025, 0.0025]}
		>
			<primitive object={scene} />
		</mesh>
	);
}
