import { InputHTMLAttributes } from 'react';

type InputProps = {
	id: string,
	label: string,
	type: string,
	pattern?: string,
	required?: boolean,
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ id, label, type, pattern, required, ...props }: InputProps) {
	return (
		<div
			className='py-2 flex flex-col gap-1'
		>
			<label
				htmlFor={id}
			>
				{label}:
			</label>
			<input
				id={id}
				name={id}
				type={type}
				pattern={pattern}
				required={required || false}
				className='bg-slate-50 p-2 border-2 border-black'
				{...props}
			/>
		</div>
	);
}