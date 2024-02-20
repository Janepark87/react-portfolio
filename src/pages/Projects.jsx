import ProjectIntro from '../features/projects/ProjectIntro';
import ProjectList from '../features/projects/ProjectList';
import Cta from '../components/Cta';

export default function Projects() {
	return (
		<section className="max-container">
			<ProjectIntro />
			<ProjectList />

			<Cta />
		</section>
	);
}
