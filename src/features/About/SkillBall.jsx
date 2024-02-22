import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import Loader from '../../components/Loader';
import Ball from '../../models/Ball';

export default function SkillBall({ skill }) {
	return (
		<div className="block-container h-24 w-24">
			<Canvas frameLoop="demand" gl={{ preserveDrawingBuffer: true }}>
				<Suspense fallback={<Loader />}>
					<OrbitControls enableZoom={false} />
					<Ball icon={skill.imageUrl} />
				</Suspense>

				<Preload all />
			</Canvas>
		</div>
	);
}
