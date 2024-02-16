import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import IslandBox from '../../models/IslandBox';
import PlaneBox from '../../models/PlaneBox';
import Sky from '../../models/Sky';
import Bird from '../../models/Bird';
import Loader from '../../components/Loader';
import { useRotation } from '../../../context/RotationContext';

export default function HomeCanvas() {
	const { isRotating } = useRotation();

	return (
		<Canvas
			className={`h-screen w-full bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
			camera={{ near: 0.1, far: 1000 }}
		>
			<Suspense fallback={<Loader />}>
				<directionalLight position={[1, 1, 1]} intensity={2} />
				<ambientLight intensity={0.5} />
				<hemisphereLight
					skyColor="#b1e1ff"
					groundColor="#000000"
					intensity={1}
				/>

				<Sky />
				<Bird />
				<IslandBox />
				<PlaneBox />
			</Suspense>
		</Canvas>
	);
}
