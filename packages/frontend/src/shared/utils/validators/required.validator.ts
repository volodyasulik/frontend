import {
	P, match,
} from 'ts-pattern'

export const required = (value: string,): string | undefined => {
	return match(value,)
		.with(P.string, () => {
			return undefined
		},)
		.otherwise(() => {
			return 'This field is required'
		},)
}
