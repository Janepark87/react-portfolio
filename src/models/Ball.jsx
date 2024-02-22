import { Decal, Float, useTexture } from '@react-three/drei';

export default function Ball({ icon }) {
	const [decal] = useTexture([icon]);

	return (
		<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
			<ambientLight position={0.25} />
			<directionalLight position={[0, 0, 0.05]} />

			<mesh castShadow receiveShadow scale={2.85}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color="#fff8eb"
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
				/>

				<Decal
					map={decal}
					position={[0, 0, 1]}
					scale={[0.65, 0.65, 0.65]}
					rotation={[2 * Math.PI, 0, 6.25]}
					flatShading
				/>
			</mesh>
		</Float>
	);
}
