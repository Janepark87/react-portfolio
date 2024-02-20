import { Link } from 'react-router-dom';
import { arrow } from '../../assets/icons';

export default function Project({
	project: { iconUrl, name, link, theme, description },
}) {
	return (
		<div className="w-full lg:w-[400px]">
			<div className="block-container h-12 w-12">
				<div className={`btn-back rounded-xl ${theme}`} />

				<div className="btn-front flex items-center justify-center rounded-xl">
					<img
						src={iconUrl}
						alt="Project Icon"
						className="h-1/2 w-1/2 object-contain"
					/>
				</div>
			</div>

			<div className="mt-5 flex flex-col">
				<h4 className="font-poppins text-2xl font-semibold">{name}</h4>
				<p className="mt-2 text-slate-500">{description}</p>
				<div className="mt-5 flex items-center gap-2 font-poppins">
					<Link
						to={link}
						className="font-semibold text-blue-600"
						target="_blank"
						rel="noopener noreferrer"
					>
						Live Link
					</Link>

					<img
						src={arrow}
						className="h-3 w-3 object-contain"
						alt="Arrow icon"
					/>
				</div>
			</div>
		</div>
	);
}
