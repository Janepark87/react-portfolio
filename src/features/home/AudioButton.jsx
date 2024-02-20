import { soundoff, soundon } from '../../assets/icons';
import useAudio from '../../hooks/useAudio';

export default function AudioButton() {
	const { isPlayingMusic, setIsPlayingMusic } = useAudio();

	return (
		<div className="absolute bottom-2 right-2">
			<img
				src={isPlayingMusic ? soundon : soundoff}
				alt="Sound"
				className="h-10 w-10 cursor-pointer object-contain"
				onClick={() => setIsPlayingMusic(!isPlayingMusic)}
			/>
		</div>
	);
}
