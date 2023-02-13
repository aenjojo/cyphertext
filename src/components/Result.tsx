import { OutputHTMLAttributes, ReactNode } from 'react';

type ResultProps = {
	children: ReactNode | ReactNode[],
} & OutputHTMLAttributes<HTMLOutputElement>;

export function Result({ children, ...props }: ResultProps) {
	return (
		<output
			className='my-4 mx-auto bg-gray-200 border-2 border-black shadow-brutalism p-2 block'
			{...props}
		>
			{children}
		</output>
	);
}