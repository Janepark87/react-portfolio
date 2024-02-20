import { Link } from 'react-router-dom';

export default function Cta() {
	return (
		<>
			<hr className="border-slate-200" />

			<div className="cta">
				<p className="cta-text">
					Have a project in mind? <br className="hidden sm:block" />{' '}
					Let's build something together!
				</p>

				<Link to="/contact" className="btn">
					Contact
				</Link>
			</div>
		</>
	);
}
