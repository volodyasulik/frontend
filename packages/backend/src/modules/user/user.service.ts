import {
	PrismaService,
} from 'nestjs-prisma'

import {
	Injectable,
} from '@nestjs/common'
import type {
	User, Prisma,
} from '@prisma/client'

import {
	hashString,
} from '../common/common.utils'

@Injectable()
export class UserService {
	constructor(private readonly prisma: PrismaService,
	) {}

	public async getUser(
		userWhereUniqueInput: Prisma.UserWhereInput,
	): Promise<User | null> {
		return this.prisma.user.findFirst({
			where:   userWhereUniqueInput,
		},)
	}

	public async createUser(data: Prisma.UserCreateInput,): Promise<User> {
		return this.prisma.user.create({
			data: {
				...data,
			},
		},)
	}

	public async updateUser(params: {
		where: Prisma.UserWhereUniqueInput;
		data: Prisma.UserUpdateInput;
	},): Promise<User> {
		const {
			where, data,
		} = params

		if (data.password) {
			const hashedPassword = await hashString(data.password as string,)
			data.password = hashedPassword
		}

		return this.prisma.user.update({
			data,
			where,
		},)
	}

	public async deleteUser(where: Prisma.UserWhereUniqueInput,): Promise<User> {
		return this.prisma.user.delete({
			where,
		},)
	}
}
