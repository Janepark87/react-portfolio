import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import useIslandScreenSizer from '../hooks/useIslandScreenSizer';
import Loader from '../components/Loader';
import Island from '../models/Island';

export default function Home() {
	const [islandScale, islandPosition, islandRotation] =
		useIslandScreenSizer();
	return (
		<section className="relative h-screen w-full">
			{/* <div className="absolute left-0 right-0 top-28 z-10 flex items-center justify-center">
				popup
			</div> */}

			<Canvas
				className="relative h-screen w-full"
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

					<Island
						position={islandPosition}
						scale={islandScale}
						rotation={islandRotation}
					/>
				</Suspense>
			</Canvas>
		</section>
	);
}
