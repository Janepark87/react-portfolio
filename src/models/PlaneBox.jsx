import useObjectScreenSizer from '../hooks/useObjectScreenSizer';
import Plane from './Plane';

export default function PlaneBox() {
	const sizeValue = {
		mobileScale: [1.5, 1.5, 1.5],
		mobilePosition: [0, -3.2, -1],
		mobileRotation: [0, 20, 0],
		desktopScale: [3, 3, 3],
		desktopPosition: [0, -5, -4.5],
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
