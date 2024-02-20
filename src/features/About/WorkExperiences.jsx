import Experience from './Experience';

export default function WorkExperiences() {
	return (
		<div className="py-16">
			<h3 className="subhead-text">Work Experience</h3>
			<div className="mt-5 flex flex-col gap-3 text-slate-500">
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Molestiae doloribus possimus debitis illum accusantium
					quibusdam ab ex sunt pariatur! Dolorum:
				</p>
			</div>

			<div className="mt-12 flex">
				<Experience />
			</div>
		</div>
	);
}
