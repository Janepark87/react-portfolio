export default function useObjectScreenSizer({
	mobileScale = null,
	mobilePosition = null,
	mobileRotation = null,
	desktopScale = null,
	desktopPosition = null,
	desktopRotation = null,
}) {
	const isMobile = window.innerWidth < 768;

	const scale = isMobile ? mobileScale : desktopScale;
	const position = isMobile ? mobilePosition : desktopPosition;
	const rotation = isMobile ? mobileRotation : desktopRotation;

	return [scale, position, rotation];
}
