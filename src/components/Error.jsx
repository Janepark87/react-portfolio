import { useNavigate, useRouteError } from 'react-router-dom';

export default function Error() {
	const navigate = useNavigate();
	const error = useRouteError();

	return (
		<section className="max-container">
			<h1 className="head-text">Something went wrong 😢</h1>
			<p className="my-10 text-lg text-slate-500 sm:text-2xl">
				{error.message || error.data}
			</p>
			<button className="btn" onClick={() => navigate('/')}>
				&larr; Go back to Home page
			</button>
		</section>
	);
}
