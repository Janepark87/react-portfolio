import { useGLTF } from '@react-three/drei';
import planeScene from '../assets/3d/plane.glb';

export default function Plane() {
	const { scene, animations } = useGLTF(planeScene);

	return (
		<mesh>
			<primitive object={scene} />
		</mesh>
	);
}
