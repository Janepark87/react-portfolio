import { skills } from '../../data/constants';
import SkillItem from './SkillItem';

export default function Skills() {
	return (
		<div className="flex flex-col py-10">
			<h3 className="subhead-text">My Skills</h3>

			<div className="mt-16 flex flex-row flex-wrap justify-center gap-10">
				{skills.map((skill, index) => (
					<SkillItem skill={skill} key={`${index}-${skill.name}`} />
				))}
			</div>
		</div>
	);
}
