import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { a } from '@react-spring/three';
import islandScene from '../assets/3d/island.glb';
import useIslandRotation from '../hooks/useIslandRotation';
import { use3DAnimation } from '../context/AnimationContext';

export default function Island({ ...props }) {
	const islandRef = useRef();
	const { nodes, materials } = useGLTF(islandScene);
	const { isRotating, setIsRotating, setCurrentStage } = use3DAnimation();
	useIslandRotation(islandRef, isRotating, setIsRotating, setCurrentStage);

	return (
		<>
			<a.group ref={islandRef} {...props} dispose={null}>
				<mesh
					geometry={nodes.polySurface944_tree_body_0.geometry}
					material={materials.PaletteMaterial001}
				/>
				<mesh
					geometry={nodes.polySurface945_tree1_0.geometry}
					material={materials.PaletteMaterial001}
				/>
				<mesh
					geometry={nodes.polySurface946_tree2_0.geometry}
					material={materials.PaletteMaterial001}
				/>
				<mesh
					geometry={nodes.polySurface947_tree1_0.geometry}
					material={materials.PaletteMaterial001}
				/>
				<mesh
					geometry={nodes.polySurface948_tree_body_0.geometry}
					material={materials.PaletteMaterial001}
				/>
				<mesh
					geometry={nodes.polySurface949_tree_body_0.geometry}
					material={materials.PaletteMaterial001}
				/>
				<mesh
					geometry={nodes.pCube11_rocks1_0.geometry}
					material={materials.PaletteMaterial001}
				/>
			</a.group>
		</>
	);
}
