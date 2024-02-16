import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { RotationProvider } from '../../context/RotationContext';

export default function Root() {
	return (
		<RotationProvider>
			<Navbar />
			<main>
				<Outlet />
			</main>
		</RotationProvider>
	);
}
