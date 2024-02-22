import { useEffect, useState } from 'react';

export default function useObjectScreenSizer({
	mobileScale = null,
	mobilePosition = null,
	mobileRotation = null,
	desktopScale = null,
	desktopPosition = null,
	desktopRotation = null,
}) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 768px)');
		setIsMobile(mediaQuery.matches);

		const handleMediaQueryChange = (e) => setIsMobile(e.matches);

		mediaQuery.addEventListener('change', handleMediaQueryChange);

		return () =>
			mediaQuery.removeEventListener('change', handleMediaQueryChange);
	}, []);

	const scale = isMobile ? mobileScale : desktopScale;
	const position = isMobile ? mobilePosition : desktopPosition;
	const rotation = isMobile ? mobileRotation : desktopRotation;

	return [scale, position, rotation];
}
