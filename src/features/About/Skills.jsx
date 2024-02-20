import { skills } from '../../data/constants';

export default function Skills() {
	return (
		<div className="flex flex-col py-10">
			<h3 className="subhead-text">My Skills</h3>

			<div className="mt-16 flex flex-wrap gap-12">
				{skills.map((skill, index) => (
					<div key={index} className="block-container h-20 w-20">
						<div className="btn-back rounded-xl" />

						<div className="btn-front flex items-center justify-center rounded-xl">
							<img
								src={skill.imageUrl}
								alt={skill.name}
								className="h-1/2 w-1/2 object-contain"
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
