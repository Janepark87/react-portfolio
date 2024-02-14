import { Canvas } from '@react-three/fiber';
import { useState, Suspense } from 'react';
import Loader from '../components/Loader';

import IslandBox from '../models/IslandBox';
import PlaneBox from '../models/PlaneBox';
import Sky from '../models/Sky';
import Bird from '../models/Bird';

export default function Home() {
	const [isRotating, setIsRotating] = useState(false);

	return (
		<section className="relative h-screen w-full">
			{/* <div className="absolute left-0 right-0 top-28 z-10 flex items-center justify-center">
				popup
			</div> */}

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
					<IslandBox
						isRotating={isRotating}
						setIsRotating={setIsRotating}
					/>
					<PlaneBox />
				</Suspense>
			</Canvas>
		</section>
	);
}
