import { DEFAULT_LETTER } from '#root/data/constants';
import { createNewSequence } from './createNewSequence';
import { swapLetter } from './swapLetter';

type CipherProps = {
	type: 'encipher' | 'decipher',
	text: string,
	key: string,
}

export function cipher({ type, text, key }: CipherProps) {
	const newSequence = createNewSequence({
		key: key,
		prevSequence: DEFAULT_LETTER,
	});

	let prevSequence = '';
	let nextSequence = '';

	if (type === 'encipher') {
		prevSequence = DEFAULT_LETTER;
		nextSequence = newSequence;
	}
	else if (type === 'decipher') {
		prevSequence = newSequence;
		nextSequence = DEFAULT_LETTER;
	}

	const result = swapLetter({
		text: text.toUpperCase(),
		prevSequence: prevSequence,
		nextSequence: nextSequence,
	});

	return result;
}