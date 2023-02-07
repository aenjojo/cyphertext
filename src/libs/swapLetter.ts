export type SwapLetter = {
	text: string,
	prevSequence: string,
	nextSequence: string,
}

export function swapLetter({ text, prevSequence, nextSequence }: SwapLetter) {
	const tempArray: string[] = [];
	const sequenceKey = Object.keys(prevSequence);

	for (let letter of text) {
		if (letter === ' ') {
			tempArray.push(letter);
		}
		else {
			for (let i in sequenceKey) {
				if (letter === prevSequence[i]) {
					tempArray.push(nextSequence[i]);
				}
			}
		}
	}

	return tempArray.join('');
}