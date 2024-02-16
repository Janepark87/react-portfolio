import { useState } from 'react';
import { createContext, useContext } from 'react';

const RotationContext = createContext();

export function RotationProvider({ children }) {
	const [isRotating, setIsRotating] = useState(false);
	const [currentStage, setCurrentStage] = useState(0);

	return (
		<RotationContext.Provider
			value={{ isRotating, setIsRotating, currentStage, setCurrentStage }}
		>
			{children}
		</RotationContext.Provider>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useRotation() {
	const context = useContext(RotationContext);

	if (context === undefined)
		throw new Error(
			'RotationContext was used outside of Provider. The context can only be used in children of the Provider'
		);
	return context;
}
