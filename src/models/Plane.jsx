import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import planeScene from '../assets/3d/plane.glb';
import { useRotation } from '../../context/RotationContext';

export default function Plane(props) {
	const planeRef = useRef();
	const { scene, animations } = useGLTF(planeScene);
	const { actions } = useAnimations(animations, planeRef);
	const { isRotating } = useRotation();

	useEffect(() => {
		if (isRotating) actions['Take 001'].play();
		else actions['Take 001'].stop();
	}, [actions, isRotating]);

	return (
		<mesh ref={planeRef} {...props}>
			<primitive object={scene} />
		</mesh>
	);
}
