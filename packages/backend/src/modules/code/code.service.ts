import {
	HttpException, HttpStatus, Injectable,
} from '@nestjs/common'
import {
	isEmail,
} from 'class-validator'
import {
	ERR_MESSAGES,
	CONFIRM_MESSAGES,
} from '../common/common.const'
import {
	NodemailerService,
} from '../nodemailer/nodemailer.service'
import {
	generateCode,
} from '../common/common.utils'
import {
	PrismaService,
} from 'nestjs-prisma'
import {
	Cron, CronExpression,
} from '@nestjs/schedule'
@Injectable()
export class CodeService {
	constructor(
    private readonly mailService: NodemailerService,
    private readonly prisma: PrismaService,
	) {}

	public async sendCode(login: string,): Promise<string> {
		if (isEmail(login,)) {
			const code = generateCode()
			await this.prisma.emailConfirm.upsert({
				where: {
					email: login,
				},
				update: {
					code,
					updatedAt: new Date().toISOString(),
				},
				create: {
					email:     login,
					updatedAt: new Date().toISOString(),
					code,
				},
			},)
			await this.mailService.sendMail(code, login,)
			return `Send on Email: ${login}`
		}
		throw new HttpException(ERR_MESSAGES.WRONG_LOGIN, HttpStatus.BAD_REQUEST,)
	}

	private async deleteCode(login: string,): Promise<string> {
		try {
			await this.prisma.emailConfirm.delete({
				where: {
					email: login,
				},
			},)
			return CONFIRM_MESSAGES.DELETED
		} catch (e) {
			throw new HttpException(
				ERR_MESSAGES.SOMETHINS_WRONG,
				HttpStatus.BAD_REQUEST,
			)
		}
	}

	public async checkCode(login: string, code: string,): Promise<boolean> {
		if (isEmail(login,)) {
			const ourCode = await this.prisma.emailConfirm.findFirst({
				where: {
					email: login,
				},
			},)
			if (ourCode?.code === code) {
				await this.deleteCode(login,)
				return true
			}
			throw new HttpException(ERR_MESSAGES.WRONG_CODE, HttpStatus.BAD_REQUEST,)
		}
		return false
	}

  @Cron(CronExpression.EVERY_10_MINUTES,)
	private async deleteDeprecatedCodes(): Promise<void> {
		const currentDate = new Date()
		currentDate.setMinutes(currentDate.getMinutes() - 10,)
		await this.prisma.emailConfirm.deleteMany({
			where: {
				updatedAt: {
					lte: currentDate,
				},
			},
		},)
	}
}
