import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import planeScene from '../assets/3d/plane.glb';

export default function Plane(props) {
	const planeRef = useRef();
	const { scene, animations } = useGLTF(planeScene);
	const { actions } = useAnimations(animations, planeRef);

	useEffect(() => {
		actions['Take 001'].play();
	}, [actions]);

	return (
		<mesh ref={planeRef} {...props}>
			<primitive object={scene} />
		</mesh>
	);
}
