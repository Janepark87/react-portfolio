import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import foxScene from '../assets/3d/fox.glb';
import { use3DAnimation } from '../../context/AnimationContext';

export function Fox(props) {
	const foxRef = useRef();
	const { nodes, materials, animations } = useGLTF(foxScene);
	const { actions } = useAnimations(animations, foxRef);
	const { currentAnimation } = use3DAnimation();

	useEffect(() => {
		Object.values(actions).forEach((action) => action.stop());

		if (actions[currentAnimation]) {
			actions[currentAnimation].timeScale = 1.5;
			actions[currentAnimation].play();
		}
	}, [actions, currentAnimation]);

	return (
		<group ref={foxRef} {...props} dispose={null}>
			<group name="Sketchfab_Scene">
				<group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
					<group name="fbx_mergefbx" rotation={[Math.PI / 2, 0, 0]}>
						<group name="Object_2">
							<group name="RootNode">
								<group
									name="fox"
									rotation={[-Math.PI / 2, 0, 0]}
								/>
								<group
									name="FoxTransform"
									rotation={[-Math.PI / 2, 0, 0]}
								>
									<group name="Object_6">
										<primitive object={nodes._rootJoint} />
										<skinnedMesh
											name="Object_9"
											geometry={nodes.Object_9.geometry}
											material={materials['08_-_Default']}
											skeleton={nodes.Object_9.skeleton}
										/>
										<group
											name="Object_8"
											rotation={[-Math.PI / 2, 0, 0]}
										/>
									</group>
								</group>
							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	);
}
