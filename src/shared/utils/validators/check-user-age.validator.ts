/* eslint-disable complexity */
export const checkUserAge = (dateOfBirth: string | undefined,): string | undefined => {
	const [day, month, year,] = dateOfBirth?.split('/',).map(Number,) ?? []

	const currentDate = new Date()
	if (dateOfBirth?.startsWith('/',) ?? !dateOfBirth) {
		return 'Date of birth is required'
	}

	if (!year || !month || !day) {
		return 'Invalid date of birth.'
	}

	if (day < 1 || day > 31) {
		return 'Invalid day.'
	}

	if (month < 1 || month > 12) {
		return 'Invalid month.'
	}

	if (year < 1900 || year > currentDate.getFullYear()) {
		return 'Invalid year.'
	}

	const birthDate = new Date(year, month - 1, day,)
	if (isNaN(birthDate.getTime(),)) {
		return 'Invalid date of birth.'
	}

	if (birthDate > currentDate) {
		return 'Date of birth cannot be in the future.'
	}

	const age = currentDate.getFullYear() - birthDate.getFullYear()

	return age >= 18 ?
		undefined :
		'You must be at least 18 years old.'
}

