import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../../data/constants.js';
import CompanyLogo from './CompanyLogo.jsx';

export default function Experience() {
	return (
		<VerticalTimeline>
			{experiences.map((experience, index) => (
				<VerticalTimelineElement
					key={`compnay-list-${index}`}
					date={experience.date}
					icon={<CompanyLogo experience={experience} />}
					iconStyle={{ backgroundColor: experience.iconBg }}
					contentStyle={{
						borderBottom: `8px solid ${experience.iconBg}`,
						boxShadow: 'none',
					}}
				>
					<div>
						<h3 className="font-poppins text-xl font-semibold text-black">
							{experience.title}
						</h3>
						<p
							className="font-base font-medium text-black-500"
							style={{ margin: 0 }}
						>
							{experience.company_name}
						</p>
					</div>

					<ul className="my-5 ml-5 list-disc space-y-2">
						{experience.points.map((point, index) => (
							<li
								key={`experience-point-${index}`}
								className="pl-1 text-sm font-normal text-black-500/50"
							>
								{point}
							</li>
						))}
					</ul>
				</VerticalTimelineElement>
			))}
		</VerticalTimeline>
	);
}
