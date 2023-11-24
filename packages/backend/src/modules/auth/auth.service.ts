/* eslint-disable complexity */
/* eslint-disable no-inline-comments */
/* eslint-disable no-negated-condition */
/* eslint-disable max-depth */
import {
	HttpException,
	HttpStatus,
	Injectable,
} from '@nestjs/common'
import bcrypt from 'bcrypt'
import {
	JwtService,
} from '@nestjs/jwt'
import {
	ERR_MESSAGES,
} from '../common/common.const'
import type {
	SignUpUserDto,
} from './dto/sign-up-user.dto'
import {
	UserService,
} from '../user/user.service'
import {
	Prisma,
} from '@prisma/client'
import type {
	SignInUserDto,
} from './dto/sign-in-user.dto'
import {
	CodeService,
} from '../code/code.service'
import type {
	GoogleUserDto,
} from './dto/google-user.dto'
import {
	CONFIG,
} from '../common/config.config'

@Injectable()
export class AuthService {
	constructor(
        private readonly codeService: CodeService,
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
	) { }

	private async hashString(string: string,): Promise<string> {
		return bcrypt.hash(string, Number.parseInt(process.env[CONFIG.PASS_HASH]!,),)
	}

	private async checkHashString(string: string, encrypted: string,): Promise<boolean> {
		return bcrypt.compare(string, encrypted,)
	}

	private async createJwt(payload: string,): Promise<string> {
		return this.jwtService.signAsync({
			userId: payload,
		},)
	}

	public async googleAuth({
		email, firstName,surName,
	}: GoogleUserDto,):Promise<string> {
		const findUser = await this.userService.getUser({
			email,
		},)
		if (findUser) {
			return this.createJwt(findUser.id,)
		}

		let findFirstName = firstName
		let findSurName = ''
		if (!surName) {
			if (firstName && firstName.includes(' ',)) {
				const parts = firstName.split(' ',)
				if (parts.length > 1 && parts[0] && parts[1]) {
					[findFirstName, findSurName,] = parts
				} else {
					findFirstName = firstName
					findSurName = ''
				}
			}
		} else {
			findSurName = surName
		}
		const newUser = await this.userService.createUser({
			email,
			phone:    '',
			fullName:    `${findFirstName} ${findSurName}`,
			password: '',
		},)
		return this.createJwt(newUser.id,)
	}

	public async signUp({
		...userData
	}: SignUpUserDto,): Promise<string> {
		const password = await this.hashString(userData.password,)

		try {
			const user = await this.userService.createUser({
				...userData,
				password,
			},)

			return this.createJwt(user.id,)
		} catch (e) {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				if (e.code === 'P2002') {
					throw new HttpException(ERR_MESSAGES.USER_ALREADY_EXIST, HttpStatus.BAD_REQUEST,)
				}
			}
			throw e
		}
	}

	public async checkUserExist(login: string,): Promise<boolean>  {
		const user = await this.userService.getUser({
			OR: [
				{
					email: login,
				},
				{
					phone: login,
				},
			],
		},)
		return Boolean(!user,)
	}

	public async verifyLoginSendCode(login: string,): Promise<string> {
		const message = await this.codeService.sendCode(login,)
		return message
	}

	public async verifyLoginCheckCode(login: string,code: string,): Promise<string> {
		return this.verifyCode(login,code,)
	}

	public async checkPassword({
		login,
		password,
	}: SignInUserDto,): Promise<boolean> {
		const user = await this.userService.getUser({
			OR: [
				{
					email: login,
				},
				{
					phone: login,
				},
			],
		},)
		if (!user) {
			throw new HttpException(ERR_MESSAGES.WRONG_CREDENTIALS, HttpStatus.BAD_REQUEST,)
		}

		const isPassworValid = await this.checkHashString(password, user.password,)
		if (!isPassworValid) {
			throw new HttpException(ERR_MESSAGES.WRONG_CREDENTIALS, HttpStatus.BAD_REQUEST,)
		}

		return true
	}

	public async signIn({
		login,
		password,
	}: SignInUserDto,): Promise<string> {
		const user = await this.userService.getUser({
			OR: [
				{
					email: login,
				},
				{
					phone: login,
				},
			],
		},)
		if (!user) {
			throw new HttpException(ERR_MESSAGES.WRONG_CREDENTIALS, HttpStatus.BAD_REQUEST,)
		}

		const isPassworValid = await this.checkHashString(password, user.password,)
		if (!isPassworValid) {
			throw new HttpException(ERR_MESSAGES.WRONG_CREDENTIALS, HttpStatus.BAD_REQUEST,)
		}

		return this.createJwt(user.id,)
	}

	public async verifyCode(login: string, code: string,): Promise<string> {
		const user = await this.userService.getUser({
			OR: [
				{
					email: login,
				},
				{
					phone: login,
				},
			],
		},)
		await this.codeService.checkCode(login, code,)
		if (user) {
			return this.createJwt(user.id,)
		}

		return 'true'
	}
}