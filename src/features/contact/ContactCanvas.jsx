import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import Loader from '../../components/Loader';
import FoxBox from '../../models/FoxBox';
import FitObjectCamera from '../../components/FitObjectCamera';

export default function ContactCanvas() {
	return (
		<div className="order-first h-[300px] w-full md:order-last md:h-[550px] md:w-1/2">
			<Canvas
				camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
			>
				<directionalLight position={[0, 0, 1]} intensity={2.5} />
				<ambientLight intensity={0.5} />

				<Suspense fallback={<Loader />}>
					<FitObjectCamera fitValue={[10, 15, 15]} />
					<FoxBox />
				</Suspense>

				<Preload all />
			</Canvas>
		</div>
	);
}
