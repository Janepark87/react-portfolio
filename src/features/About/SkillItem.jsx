export default function SkillItem({ skill }) {
	return (
		<div className="block-container h-20 w-20">
			<div className="btn-back rounded-xl" />

			<div className="btn-front flex items-center justify-center rounded-xl">
				<img
					src={skill.imageUrl}
					alt={skill.name}
					className="h-1/2 w-1/2 object-contain"
				/>
			</div>
		</div>
	);
}
