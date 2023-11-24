import {
	Injectable,
} from '@nestjs/common'
import {
	MailerService,
} from '@nestjs-modules/mailer'

@Injectable()
export class NodemailerService {
	constructor(
        private readonly mailerService: MailerService,
	) {}

	public async sendMail(text:string, to:string,subject:string = '',) : Promise<void> {
		await this.mailerService.sendMail({
			from:        process.env['SMTP_ADDRESS']!,
			to,
			subject,
			text,
		},)
	}
}

