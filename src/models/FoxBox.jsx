import useObjectScreenSizer from '../hooks/useObjectScreenSizer';
import { Fox } from './Fox';

export default function FoxBox() {
	const sizeValue = {
		mobileScale: [0.75, 0.75, 0.75],
		mobilePosition: [0, -5.5, 0],
		mobileRotation: [0.3, -0.5, 0],
		desktopScale: [0.6, 0.6, 0.6],
		desktopPosition: [0, -1.5, 0],
		desktopRotation: [0.3, -0.5, 0],
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
