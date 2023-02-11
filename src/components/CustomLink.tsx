import Link from 'next/link';

type CustomLinkProps = {
	href: string,
	text: string,
};

export function CustomLink({ href, text }: CustomLinkProps) {
	return (
		<Link
			href={href}
			className='underline decoration-2 hover:text-blue-700'
		>
			{text}
		</Link>
	);
}