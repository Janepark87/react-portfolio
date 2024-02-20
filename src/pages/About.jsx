import AboutIntro from '../features/About/AboutIntro.jsx';
import Skills from '../features/About/Skills.jsx';
import WorkExperiences from '../features/About/WorkExperiences.jsx';
import Cta from '../features/About/Cta.jsx';

export default function About() {
	return (
		<section className="max-container">
			<AboutIntro />
			<Skills />
			<WorkExperiences />

			<hr className="border-slate-200" />

			<Cta />
		</section>
	);
}
