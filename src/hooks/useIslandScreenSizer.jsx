export default function useIslandScreenSizer() {
	let screenPosition, screenScale;
	const rotation = [0.1, 4.7, 0];

	if (window.innerWidth < 768) {
		screenScale = [0.75, 0.75, 0.75];
		screenPosition = [0, -6.5, -43];
	} else {
		screenScale = [1, 1, 1];
		screenPosition = [5, -6.5, -43];
	}

	return [screenScale, screenPosition, rotation];
}
