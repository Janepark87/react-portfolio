import { Link } from 'react-router-dom';
import { arrow } from '../../assets/icons/index';

export default function InfoBox({ text, link, btnText }) {
	return (
		<div className="info-box">
			<p className="text-center font-medium sm:text-xl">{text}</p>
			<Link to={link} className="neo-brutalism-white neo-btn">
				{btnText}
				<img
					src={arrow}
					className="h-3 w-3 object-contain"
					alt="Arrorw Icon"
				/>
			</Link>
		</div>
	);
}
