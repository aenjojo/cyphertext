import { letter } from '#root/data/letters';
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
		prevSequence: letter,
	});

	let prevSequence = '';
	let nextSequence = '';

	if (type === 'encipher') {
		prevSequence = letter;
		nextSequence = newSequence;
	}
	else if (type === 'decipher') {
		prevSequence = newSequence;
		nextSequence = letter;
	}

	const result = swapLetter({
		text: text.toUpperCase(),
		prevSequence: prevSequence,
		nextSequence: nextSequence,
	});

	return result;
}