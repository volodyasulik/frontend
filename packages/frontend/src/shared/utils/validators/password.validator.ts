import {
	match,
} from 'ts-pattern'

import {
	password as passwordRegex,
} from '../../constants/regexes.constants'

export const password = (value: string,): string | undefined => {
	let isPassord
	if (value) {
		isPassord = passwordRegex.test(value,)
	} else {
		return undefined
	}
	if (value.length <= 12) {
		return `Password should contain at least 12 characters, upper/lowercase letters, a number and a symbol from the list @$!%*`
	}
	if (value.length > 33) {
		return `Password should contain at least 12 characters, upper/lowercase letters, a number and a symbol from the list @$!%*`
	}

	return match(isPassord,)
		.with(true, () => {
			return undefined
		},)
		.otherwise(() => {
			return `Password should contain at least 12 characters, upper/lowercase letters, a number and a symbol from the list @$!%*`
		},)
}