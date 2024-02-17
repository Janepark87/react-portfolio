import { useState } from 'react';
import { createContext, useContext } from 'react';

const AnimationContext = createContext();

export function AnimationProvider({ children }) {
	const [isRotating, setIsRotating] = useState(false);
	const [currentStage, setCurrentStage] = useState(1);
	const [animationState, setAnimationState] = useState('idle');

	return (
		<AnimationContext.Provider
			value={{
				isRotating,
				setIsRotating,
				currentStage,
				setCurrentStage,
				animationState,
				setAnimationState,
			}}
		>
			{children}
		</AnimationContext.Provider>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export function use3DAnimation() {
	const context = useContext(AnimationContext);

	if (context === undefined)
		throw new Error(
			'AnimationContext was used outside of Provider. The context can only be used in children of the Provider'
		);
	return context;
}
