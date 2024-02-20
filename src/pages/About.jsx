import AboutIntro from '../features/about/AboutIntro.jsx';
import Skills from '../features/about/Skills.jsx';
import WorkExperiences from '../features/about/WorkExperiences.jsx';
import Cta from '../components/Cta.jsx';

export default function About() {
	return (
		<section className="max-container">
			<AboutIntro />
			<Skills />
			<WorkExperiences />

			<Cta />
		</section>
	);
}
