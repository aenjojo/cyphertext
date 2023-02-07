import { removeDuplicate } from './removeDuplicate';

type CreateNewSequence = {
	key: string,
	prevSequence: string,
}

export function createNewSequence({ key, prevSequence }: CreateNewSequence) {
	const uniqueKey = removeDuplicate(key);
	const regex = new RegExp(`[${uniqueKey}]`, 'gi');
	const otherKey = prevSequence.replace(regex, '');
	const newSequence = `${uniqueKey}${otherKey}`;

	return newSequence.toUpperCase();
}