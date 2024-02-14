import useObjectScreenSizer from '../hooks/useObjectScreenSizer';
import Plane from './Plane';

export default function PlaneBox() {
	const sizeValue = {
		mobileScale: [1.5, 1.5, 1.5],
		mobilePosition: [0, -1.5, 0],
		mobileRotation: [0, 20, 0],
		desktopScale: [3, 3, 3],
		desktopPosition: [0, -4, -4],
		desktopRotation: [0, 20, 0],
	};
	const [planeScale, planePosition] = useObjectScreenSizer(sizeValue);

	return <Plane position={planePosition} scale={planeScale} />;
}
