export default function Notification({ type, text }) {
	return (
		<div className="animate-slide-in-from-bottom absolute left-6 right-6 top-10 mx-auto flex max-w-xl items-center justify-center">
			<div
				role="Notification"
				className={`${type === 'danger' ? 'bg-red-800' : 'bg-blue-600'} lg:reounded-full z-50 rounded-md px-3 py-2 text-indigo-100 sm:flex sm:items-baseline sm:gap-2`}
			>
				<span
					className={`${type === 'danger' ? 'bg-red-500' : 'bg-green-700'} rounded-full px-2 py-1 text-xs font-semibold uppercase`}
				>
					{type === 'danger' ? 'Failed' : 'Success'}
				</span>
				<p className="text-left">{text}</p>
			</div>
		</div>
	);
}
