import { NextApiRequest, NextApiResponse } from 'next';
import { cipher } from '#libs/cipher';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'GET') {
		return res
			.status(405)
			.json({
				code: res.statusCode,
				message: `Method of ${req.method} is not allowed`,
			});
	}

	const { type, text, keys } = req.query;

	if ((!type || Array.isArray(type))
		|| (!text || Array.isArray(text))
		|| (!keys || Array.isArray(keys))
	) {
		return res
			.status(400)
			.json({
				code: res.statusCode,
				message: 'The required parameter or value of `type` or `text` or `keys` is not found',
			});
	}
	if (type !== 'decipher' && type !== 'encipher') {
		return res
			.status(400)
			.json({
				code: res.statusCode,
				message: 'The parameter of `type` requires either `encipher` or `decipher` as value',
			})
	}

	const splittedKeys = keys.split(',');
	const keysArray = type === 'encipher' ? splittedKeys : splittedKeys.reverse();

	const ciphered = keysArray.reduce((acc, value) => cipher({
		type: type,
		text: acc,
		key: value,
	}), text);

	return res
		.status(200)
		.json({
			code: res.statusCode,
			message: ciphered,
		});
}