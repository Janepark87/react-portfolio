import useObjectScreenSizer from '../hooks/useObjectScreenSizer';
import Plane from './Plane';

export default function PlaneBox() {
	const sizeValue = {
		mobileScale: [4, 4, 4],
		mobilePosition: [0, -9, -1],
		mobileRotation: [0, 20, 0],
		desktopScale: [3, 3, 3],
		desktopPosition: [0, -5.5, -4],
		desktopRotation: [0, 20, 0],
	};
	const [isPlaneScale, isPlanePosition, isPlaneRotation] =
		useObjectScreenSizer(sizeValue);

	return (
		<Plane
			position={isPlanePosition}
			scale={isPlaneScale}
			rotation={isPlaneRotation}
		/>
	);
}
