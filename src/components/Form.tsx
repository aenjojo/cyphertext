import { FormHTMLAttributes, ReactNode } from 'react';

type FormProps = {
	children: ReactNode | ReactNode[],
} & FormHTMLAttributes<HTMLFormElement>;

export function Form({ children, ...props }: FormProps) {
	return (
		<form
			{...props}
		>
			{children}
		</form>
	);
}