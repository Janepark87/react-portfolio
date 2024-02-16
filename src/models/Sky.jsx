import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import skyScene from '../assets/3d/sky.glb';
import { useRotation } from '../../context/RotationContext';

export default function Sky() {
	const skyRef = useRef();
	const sky = useGLTF(skyScene);
	const { isRotating } = useRotation();

	useFrame((_, deltal) => {
		if (isRotating) {
			skyRef.current.rotation.y += 0.5 * deltal;
		}
	});

	return (
		<mesh ref={skyRef}>
			<primitive object={sky.scene} />
		</mesh>
	);
}
