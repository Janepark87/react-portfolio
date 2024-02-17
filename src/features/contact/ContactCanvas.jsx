import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Loader from '../../components/Loader';
import FoxBox from '../../models/FoxBox';

export default function ContactCanvas() {
	return (
		<div className="h-[350px] w-full md:h-[550px] lg:h-auto lg:w-1/2">
			<Canvas
				camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
			>
				<directionalLight position={[0, 0, 1]} intensity={2.5} />
				<ambientLight intensity={0.5} />

				<Suspense fallback={<Loader />}>
					<FoxBox />
				</Suspense>
			</Canvas>
		</div>
	);
}
