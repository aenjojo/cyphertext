export enum FormActionKind {
	ADD_KEY = 'ADD_KEY',
	REMOVE_KEY = 'REMOVE_KEY',
	EDIT_KEY_DATA = 'EDIT_KEY_DATA',
	EDIT_MESSAGE = 'EDIT_MESSAGE',
	EDIT_RESULT = 'EDIT_RESULT',
	RESET_ALL = 'RESET_ALL',
};

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
				throw new Error('No `data | data.id | data.value` was provided');
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
				throw new Error('No `data | data.text` was provided');
			}

			return {
				...state,
				text: data.text,
			};
		};
		case FormActionKind.EDIT_RESULT: {
			if (!data || !data.result) {
				throw new Error('No `data | data.result` was provided');
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