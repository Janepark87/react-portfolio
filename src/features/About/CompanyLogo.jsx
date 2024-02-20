export default function CompanyLogo({ experience: { icon, compnay_name } }) {
	return (
		<div className="flex h-full w-full items-center justify-center">
			<img
				src={icon}
				alt={compnay_name}
				className="h-[60%] w-[60%] object-contain "
			/>
		</div>
	);
}
