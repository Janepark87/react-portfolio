import { AnimationProvider } from '../../context/AnimationContext';
import ContactForm from '../features/contact/ContactForm';
import ContactCanvas from '../features/contact/ContactCanvas';
import Notification from '../components/Notification';
import useAlert from '../hooks/useAlert';

export default function Contact() {
	const { alert, showAlert, hideAlert } = useAlert();

	return (
		<AnimationProvider>
			<section className="max-container relative flex flex-col lg:flex-row">
				{alert.show && <Notification {...alert} />}

				<ContactForm showAlert={showAlert} hideAlert={hideAlert} />
				<ContactCanvas />
			</section>
		</AnimationProvider>
	);
}
