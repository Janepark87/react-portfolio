import useObjectScreenSizer from '../hooks/useObjectScreenSizer';
import Island from './Island';

export default function IslandBox() {
	const sizeValue = {
		mobileScale: [0.75, 0.75, 0.75],
		mobilePosition: [0, -6.5, -43],
		mobileRotation: [0.1, 4.7, 0],
		desktopScale: [1, 1, 1],
		desktopPosition: [5, -6.5, -43],
		desktopRotation: [0.1, 4.7, 0],
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
