type TitleProps = {
	value: string,
};

export function Title({ value }: TitleProps) {
	return (
		<h1
			className='text-2xl font-black mt-4 text-center'
		>
			{value}
		</h1>
	)
}