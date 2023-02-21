import { ReactNode, TableHTMLAttributes, TdHTMLAttributes } from 'react'

type TableProps = {
	children: ReactNode | ReactNode[],
} & TableHTMLAttributes<HTMLTableElement>;

type CellProps = {
	children: ReactNode,
	type?: 'header',
} & TdHTMLAttributes<HTMLTableCellElement>;

function Table({ children, ...props }: TableProps) {
	return (
		<table
			className='border-2 border-black'
			{...props}
		>
			{children}
		</table>
	);
}

function Cell({ children, type, ...props }: CellProps) {
	if (type === 'header') {
		return (
			<th
				className='border-2 border-black p-2 bg-black text-yellow-300'
				{...props}
			>
				{children}
			</th>
		)
	}

	return (
		<td
			className='border-2 border-black p-2'
			{...props}
		>
			{children}
		</td>
	);
}

export {
	Table,
	Cell,
};