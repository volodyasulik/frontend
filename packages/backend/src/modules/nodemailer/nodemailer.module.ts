import {
	Module,
} from '@nestjs/common'
import {
	MailerModule,
} from '@nestjs-modules/mailer'
import {
	NodemailerService,
} from './nodemailer.service'
import {
	CONFIG,
} from '../common/config.config'

@Module({
	imports: [
		MailerModule.forRoot({
			defaults: {
				from: process.env[CONFIG.SMTP_ADDRESS],
			},
			transport: {
				host:   process.env[CONFIG.SMTP_HOST],
				port:   Number(process.env[CONFIG.SMTP_PORT],),
				secure: true,
				tls:    {
					rejectUnauthorized: false,
				},
				auth:   {
					user:        process.env[CONFIG.SMTP_ADDRESS]!,
					pass:        process.env[CONFIG.SMTP_PASSWORD]!,
				},
			},
		},),
	],
	providers: [NodemailerService,],
	exports:   [NodemailerService,],
},)
export class NodemailerModule {}
