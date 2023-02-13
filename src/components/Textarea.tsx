import { TextareaHTMLAttributes } from 'react'

type TextareaProps = {
	label: string,
	id: string,
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ label, id, ...props }: TextareaProps) {
	return (
		<div className='py-2 flex flex-col gap-1'>
			<label
				htmlFor={id}
			>
				{label}:
			</label>
			<textarea
				id={id}
				name={id}
				className='bg-slate-50 p-2 border-2 border-black resize-none overflow-hidden'
				rows={1}
				onInput={(e) => {
					e.currentTarget.style.height = '';
					e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
				}}
				{...props}
			></textarea>
		</div>
	)
}