import { NavLink } from 'react-router-dom';

export default function Navbar() {
	return (
		<header className="header">
			<NavLink
				to="/"
				className="flex h-10 w-10 items-center justify-center rounded-lg bg-white font-bold shadow-md"
			>
				<span className="blue-gradient_text">JP</span>
			</NavLink>

			<nav>
				<ul className="flex gap-7 text-lg font-medium">
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/projects">Projects</NavLink>
					</li>
					<li>
						<NavLink to="/contact">Contact</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
