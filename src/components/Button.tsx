import { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
	value: string,
	variant: 'primary' | 'secondary' | 'danger',
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ value, variant, ...props }: ButtonProps) {
	const styles = [
		'py-2 px-4 text-black border-2 border-black',
		!props.disabled && [
			'active:shadow-brutalism active:-translate-x-0.5 active:-translate-y-0.5',
			variant === 'primary'
				? 'bg-green-500'
				: variant === 'danger'
					? 'bg-red-500'
					: 'bg-blue-500',
		],
		props.disabled && 'bg-gray-500',
	];

	return (
		<button
			className={styles.flat().join(' ')}
			{...props}
		>
			{value.toUpperCase()}
		</button>
	);
}