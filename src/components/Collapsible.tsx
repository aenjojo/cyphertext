import { ReactNode } from 'react';

type CollapsibleProps = {
	children: ReactNode | ReactNode[],
	title: string,
};

export function Collapsible({ children, title }: CollapsibleProps) {
	return (
		<details className='my-4 mx-auto bg-gray-200 border-2 border-black shadow-brutalism p-2'>
			<summary className='cursor-pointer select-none'>{title}</summary>
			<div className='border-t-2 border-black'>
				{children}
			</div>
		</details>
	);
}