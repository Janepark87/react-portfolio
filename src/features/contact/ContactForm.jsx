import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { use3DAnimation } from '../../context/AnimationContext';

export default function ContactForm({ showAlert, hideAlert }) {
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [isLoading, setIsLoading] = useState(false);
	const { foxState, setCurrentAnimation } = use3DAnimation();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleFocus = () => setCurrentAnimation(foxState.walk);

	const handleBlur = () => setCurrentAnimation(foxState.wait);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		setCurrentAnimation(foxState.run);

		emailjs
			.send(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: import.meta.env.VITE_APP_NAME,
					from_email: form.email,
					to_email: import.meta.env.VITE_APP_EMAIL_ADDRESS,
					message: form.message,
				},
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
			)
			.then(() => {
				setIsLoading(false);
				showAlert({
					show: true,
					text: 'Message sent successfully!',
					type: 'success',
				});

				setCurrentAnimation(foxState.walk);
				setTimeout(() => {
					hideAlert();
					setCurrentAnimation(foxState.idle);
					setForm({ name: '', email: '', message: '' });
				}, 3000);
			})
			.catch((err) => {
				console.log(err.message);
				setIsLoading(false);
				setCurrentAnimation(foxState.sit);
				showAlert({
					show: true,
					text: "I didn't receive your message!",
					type: 'danger',
				});
			});
	};

	return (
		<div className="flex min-w-[50%] flex-1 flex-col">
			<form
				onSubmit={handleSubmit}
				className="flex w-full flex-col gap-7"
			>
				<label className="font-semibold text-black-500">
					Name
					<input
						type="text"
						name="name"
						className="input"
						placeholder="Your name"
						value={form.name}
						required
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
				</label>
				<label className="font-semibold text-black-500">
					Email
					<input
						type="email"
						name="email"
						className="input"
						placeholder="youremail@gmail.com"
						value={form.email}
						required
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
				</label>
				<label className="font-semibold text-black-500">
					Message
					<textarea
						name="message"
						rows={5}
						className="textarea"
						placeholder="Let me know how I can help you!"
						value={form.message}
						required
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
				</label>
				<button
					type="submit"
					className="btn"
					onFocus={handleFocus}
					onBlur={handleBlur}
					disabled={isLoading}
				>
					{isLoading ? 'Sending...' : 'Send Message'}
				</button>
			</form>
		</div>
	);
}
