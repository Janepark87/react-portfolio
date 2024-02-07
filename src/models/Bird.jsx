import { useGLTF } from '@react-three/drei';
import birdScene from '../assets/3d/bird.glb';

export default function Bird() {
	const { scene, animations } = useGLTF(birdScene);

	return (
		<mesh position={[0, 2, 0]} scale={[0.0025, 0.0025, 0.0025]}>
			<primitive object={scene} />
		</mesh>
	);
}
