import { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
	const formRef = useRef(null);
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleFocus = (e) => {};

	const handleBlur = (e) => {};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);

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
				// TODO: show/hide succes or an alert message

				setForm({ name: '', email: '', message: '' });
			})
			.catch((err) => {
				setIsLoading(false);
				console.log(err.message);
				// TODO: show error message
			});
	};

	return (
		<section className="max-container relative flex flex-col lg:flex-row">
			<div className="flex min-w-[50%] flex-1 flex-col">
				<h1 className="head-text">Get in Touch</h1>

				<form
					onSubmit={handleSubmit}
					className="mt-14 flex w-full flex-col gap-7"
				>
					<label htmlFor="" className="font-semibold text-black-500">
						Name
						<input
							type="text"
							name="name"
							className="input"
							placeholder="Your fullname"
							defaultValue={form.name}
							required
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
					</label>
					<label htmlFor="" className="font-semibold text-black-500">
						email
						<input
							type="email"
							name="email"
							className="input"
							placeholder="youremail@gmail.com"
							defaultValue={form.email}
							required
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
					</label>
					<label htmlFor="" className="font-semibold text-black-500">
						Message
						<textarea
							name="message"
							rows={5}
							className="textarea"
							placeholder="Let me know how I can help you!"
							defaultValue={form.message}
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
		</section>
	);
}
