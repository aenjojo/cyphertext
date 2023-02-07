export function removeDuplicate(text: string) {
	const splittedText = text.trim().split('');
	const uniqueSet = new Set(splittedText);
	const result = [...uniqueSet].join('');

	return result;
}