import { useState } from 'react';
import { createContext, useContext } from 'react';

const AnimationContext = createContext();

export function AnimationProvider({ children }) {
	const [isRotating, setIsRotating] = useState(false);
	const [currentStage, setCurrentStage] = useState(1);

	const foxState = {
		idle: 'Fox_Sit2_Idle',
		wait: 'Fox_Idle',
		walk: 'Fox_Walk_InPlace',
		run: 'Fox_Run_InPlace',
		sit: 'Fox_Sit_No',
	};

	const [currentAnimation, setCurrentAnimation] = useState(foxState.idle);

	return (
		<AnimationContext.Provider
			value={{
				isRotating,
				setIsRotating,
				currentStage,
				setCurrentStage,
				currentAnimation,
				setCurrentAnimation,
				foxState,
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
