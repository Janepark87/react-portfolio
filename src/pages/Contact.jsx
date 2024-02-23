import { AnimationProvider } from '../context/AnimationContext';
import ContactForm from '../features/contact/ContactForm';
import ContactCanvas from '../features/contact/ContactCanvas';
import Notification from '../components/Notification';
import useAlert from '../hooks/useAlert';

export default function Contact() {
	const { alert, showAlert, hideAlert } = useAlert();

	return (
		<AnimationProvider>
			<section className="max-container relative">
				{alert.show && <Notification {...alert} />}

				<h1 className="head-text">Get in Touch</h1>

				<div className="flex flex-col md:mt-14 md:flex-row">
					<ContactForm showAlert={showAlert} hideAlert={hideAlert} />
					<ContactCanvas />
				</div>
			</section>
		</AnimationProvider>
	);
}
