/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable no-unused-vars */
import type {
	User,
} from '@prisma/client'

export const transformUserResponse = (user: User | null,): Partial<User> | null => {
	if (!user) {
		return user
	}
	const {
		password,
		...userData

	} = user

	return userData
}