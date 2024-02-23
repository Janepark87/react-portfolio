import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import skyScene from '../assets/3d/sky.glb';
import { use3DAnimation } from '../context/AnimationContext';

export default function Sky() {
	const skyRef = useRef();
	const sky = useGLTF(skyScene);
	const { isRotating } = use3DAnimation();

	useFrame((_, deltal) => {
		skyRef.current.rotation.y += 0.125 * deltal;
		if (isRotating) skyRef.current.rotation.y += 0.5 * deltal;
	});

	return (
		<mesh ref={skyRef}>
			<primitive object={sky.scene} />
		</mesh>
	);
}
