import { Collapsible } from '#components/Collapsible';
import { Form } from '#components/Form';
import { Layout } from '#components/Layout';
import { Result } from '#components/Result';
import { Button } from '#components/Button';
import { Input } from '#components/Input';
import { Textarea } from '#components/Textarea';
import { FormActionKind } from '#data/constants';
import { formReducer, getInitialForm } from '#reducers/reducer';
import { cipher } from '#libs/cipher';
import { ChangeEvent, useReducer } from 'react';
import { Title } from '#components/Title';

export default function HomePage() {
	const [state, dispatch] = useReducer(formReducer, getInitialForm());

	const handleMessage = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		dispatch({
			type: FormActionKind.EDIT_MESSAGE,
			data: {
				text: event.target.value,
			},
		});
	};
	const handleEditKey = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: FormActionKind.EDIT_KEY_DATA,
			data: {
				id: event.target.id,
				value: event.target.value,
			},
		});
	};
	const handleAddKey = () => {
		dispatch({
			type: FormActionKind.ADD_KEY,
		});
	};
	const handleRemoveKey = () => {
		dispatch({
			type: FormActionKind.REMOVE_KEY,
		});
	};
	const handleReset = () => {
		dispatch({
			type: FormActionKind.RESET_ALL,
		});
	};
	const handleEncipher = () => {
		const keysValue = Object.values(state.keys);

		const cipheredMessage = keysValue.reduce((acc, value) => cipher({
			type: 'encipher',
			text: acc,
			key: value,
		}), state.text);

		dispatch({
			type: FormActionKind.EDIT_RESULT,
			data: {
				result: cipheredMessage,
			},
		});
	};
	const handleDecipher = () => {
		const keysValue = Object.values(state.keys);

		const cipheredMessage = keysValue.reverse().reduce((acc, value) => cipher({
			type: 'decipher',
			text: acc,
			key: value,
		}), state.text);

		dispatch({
			type: FormActionKind.EDIT_RESULT,
			data: {
				result: cipheredMessage,
			},
		});
	};

	return (
		<Layout
			title='Cipher Form'
			description='Encipher or decipher your text and send it to your friend'
			keywords={['cyphertext', 'aenjojo', 'classic cipher', 'cyphertext main form']}
		>
			<Title value='Cipher Form' />
			{/* Desktop */}
			<Form className='mx-auto p-2 hidden lg:grid lg:grid-cols-4 lg:gap-4'>
				<section className='col-span-1 bg-gray-200 shadow-brutalism border-2 border-black my-4 p-2'>
					{
						state.ids.map(id => (
							<Input
								key={`key${id}`}
								id={`key${id}`}
								label={`Key ${id}`}
								type='text'
								onChange={handleEditKey}

							/>
						))
					}
					<div className='flex flex-row gap-2 justify-center'>
						<Button value='Add Key' variant='secondary' type='button' onClick={handleAddKey} />
						<Button value='Remove Key' variant='secondary' type='button' onClick={handleRemoveKey} disabled={state.ids.length <= 1} />
					</div>
				</section>
				<section className='col-span-3'>
					<div className='my-4 border-2 border-black shadow-brutalism p-2 bg-gray-200'>
						<Textarea
							id='message'
							label='Message'
							onChange={handleMessage}
						></Textarea>
					</div>
					<div className='flex flex-row gap-2 justify-center'>
						<Button value='Encipher' variant='primary' type='button' onClick={handleEncipher} />
						<Button value='Decipher' variant='primary' type='button' onClick={handleDecipher} />
						<Button value='Reset' variant='danger' type='reset' onClick={handleReset} />
					</div>
					<Result>
						Result:<br/>
						{state.result || 'None'}
					</Result>
				</section>
			</Form>
			
			{/* Mobile */}
			<Form className='mx-auto p-2 block lg:hidden'>
				<div className='my-4 border-2 border-black shadow-brutalism p-2 bg-gray-200'>
					<Textarea
						id='message'
						label='Message'
						onChange={handleMessage}
					></Textarea>
				</div>
				<Collapsible title='Keys'>
					{
						state.ids.map(id => (
							<Input
								key={`key${id}`}
								id={`key${id}`}
								label={`Key ${id}`}
								type='text'
								onChange={handleEditKey}

							/>
						))
					}
					<div className='flex flex-row gap-2 justify-center'>
						<Button value='Add Key' variant='secondary' type='button' onClick={handleAddKey} />
						<Button value='Remove Key' variant='secondary' type='button' onClick={handleRemoveKey} disabled={state.ids.length <= 1} />
					</div>
				</Collapsible>
				<div className='flex flex-row gap-2 justify-center'>
					<Button value='Encipher' variant='primary' type='button' onClick={handleEncipher} />
					<Button value='Decipher' variant='primary' type='button' onClick={handleDecipher} />
					<Button value='Reset' variant='danger' type='reset' onClick={handleReset} />
				</div>
				<Result>
					Result:<br/>
					{state.result || 'None'}
				</Result>
			</Form>
		</Layout>
	);
}
