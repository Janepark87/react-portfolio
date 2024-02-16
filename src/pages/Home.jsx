import { RotationProvider } from '../../context/RotationContext';
import HomeBanner from '../features/home/HomeBanner';
import HomeCanvas from '../features/home/HomeCanvas';

export default function Home() {
	return (
		<RotationProvider>
			<section className="relative h-screen w-full">
				<HomeBanner />
				<HomeCanvas />
			</section>
		</RotationProvider>
	);
}
