import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './layouts/Root';
import Error from './components/Error';
import { Home, About, Projects, Contact } from './pages/index';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/projects',
				element: <Projects />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		],
	},
	{ basename: import.meta.env.DEV ? '/' : '/3d-porfolio/' },
]);

export default function App() {
	return <RouterProvider router={router} />;
}
