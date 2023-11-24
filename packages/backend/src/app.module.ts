import {
	PrismaModule, loggingMiddleware,
} from 'nestjs-prisma'
import {
	Logger,
	Module,
} from '@nestjs/common'
import {
	ConfigModule,
} from '@nestjs/config'
import {
	ScheduleModule,
} from '@nestjs/schedule'

import {
	UserModule,
} from './modules/user/user.module'
import {
	AuthModule,
} from './modules/auth/auth.module'
import {
	NodemailerModule,
} from './modules/nodemailer/nodemailer.module'
import {
	JwtModule,
} from '@nestjs/jwt'
import {
	CodeModule,
} from './modules/code/code.module'

@Module({
	imports:     [
		ConfigModule.forRoot({
			isGlobal:    true,
		},),
		PrismaModule.forRoot({
			isGlobal:             true,
			prismaServiceOptions: {
				middlewares: [
					loggingMiddleware({
						logger:   new Logger('PrismaMiddleware',),
						logLevel: 'log',
					},),
				],
			},
		},),
		ScheduleModule.forRoot(),
		UserModule,
		AuthModule,
		NodemailerModule,
		JwtModule,
		CodeModule,
	],
},)
export class AppModule {}
