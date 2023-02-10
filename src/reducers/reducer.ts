import { FormActionKind } from '#data/constants';

export type FormAction = {
	type: FormActionKind,
	data?: {
		id?: string,
		value?: string,
		text?: string,
		result?: string,
	},
};

export type FormState = {
	ids: number[],
	keys: { [key: string]: string },
	text: string,
	result: string,
};

export const getInitialForm = (): FormState => ({
	ids: [1],
	keys: {},
	text: '',
	result: '',
});

export const formReducer = (state: FormState, action: FormAction): FormState => {
	const { data, type } = action || {};

	switch(type) {
		case FormActionKind.ADD_KEY: {
			const lastId = state.ids.at(-1) as number;

			return {
				...state,
				ids: [
					...state.ids,
					lastId + 1,
				],
			};
		};
		case FormActionKind.REMOVE_KEY: {
			const lastId = state.ids.at(-1) as number;
			const { [`key${lastId}`]: value, ...otherKeys } = state.keys;

			return {
				...state,
				ids: [...state.ids.slice(0, -1)],
				keys: {...otherKeys},
			};
		};
		case FormActionKind.EDIT_KEY_DATA: {
			if (!data || !data.id || !data.value) {
				return state;
			}

			return {
				...state,
				keys: {
					...state.keys,
					[data.id]: data.value,
				},
			};
		};
		case FormActionKind.EDIT_MESSAGE: {
			if (!data || !data.text) {
				return state;
			}

			return {
				...state,
				text: data.text,
			};
		};
		case FormActionKind.EDIT_RESULT: {
			if (!data || !data.result) {
				return state;
			}

			return {
				...state,
				result: data.result,
			};
		};
		case FormActionKind.RESET_ALL: {
			return getInitialForm();
		};
		default: {
			return state;
		};
	}
};