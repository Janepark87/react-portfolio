import useObjectScreenSizer from '../hooks/useObjectScreenSizer';
import { Fox } from './Fox';

export default function FoxBox() {
	const sizeValue = {
		mobileScale: [0.2, 0.2, 0.2],
		mobilePosition: [0, -2, 0],
		mobileRotation: [0.35, -0.6, 0],
		desktopScale: [0.18, 0.18, 0.18],
		desktopPosition: [0.5, -2, 0],
		desktopRotation: [0.3, -0.7, 0],
	};
	const [islandScale, islandPosition, islandRotation] =
		useObjectScreenSizer(sizeValue);

	return (
		<Fox
			position={islandPosition}
			scale={islandScale}
			rotation={islandRotation}
		/>
	);
}
