/* eslint-disable guard-for-in */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const trimObject = <T extends Record<any,any>>(obj: T,): T => {
	const values:Partial<T> = {
	}
	for (const key in obj) {
		const value = obj[key as keyof T]
		if (typeof value === 'string') {
			values[key] = value.trim()
		} else {
			values[key] = value
		}
	}
	return values as T
}