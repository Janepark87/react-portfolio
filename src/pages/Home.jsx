import { AnimationProvider } from '../context/AnimationContext';
import AudioButton from '../features/home/AudioButton';
import HomeBanner from '../features/home/HomeBanner';
import HomeCanvas from '../features/home/HomeCanvas';

export default function Home() {
	return (
		<AnimationProvider>
			<section className="relative h-screen w-full">
				<HomeBanner />
				<HomeCanvas />

				<AudioButton />
			</section>
		</AnimationProvider>
	);
}
