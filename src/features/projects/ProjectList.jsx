import { projects } from '../../data/constants';
import Project from './Project';

export default function ProjectList() {
	console.log(projects);

	return (
		<div className="my-20 flex flex-wrap gap-16">
			{projects.map((project) => (
				<Project key={project.name} project={project} />
			))}
		</div>
	);
}
