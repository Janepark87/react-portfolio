import useObjectScreenSizer from '../hooks/useObjectScreenSizer';
import Island from './Island';

export default function IslandBox() {
	const sizeValue = {
		mobileScale: [0.85, 0.85, 0.85],
		mobilePosition: [0, -6.5, -43],
		mobileRotation: [0.2, -0.1, 0],
		desktopScale: [1, 1, 1],
		desktopPosition: [0, -6.5, -45],
		desktopRotation: [0.1, -0.1, 0],
	};
	const [islandScale, islandPosition, islandRotation] =
		useObjectScreenSizer(sizeValue);

	return (
		<Island
			position={islandPosition}
			scale={islandScale}
			rotation={islandRotation}
		/>
	);
}
