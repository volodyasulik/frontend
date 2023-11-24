import {
	Module,
} from '@nestjs/common'
import {
	JwtModule,
} from '@nestjs/jwt'
import {
	AuthController,
} from './auth.controller'
import {
	AuthService,
} from './auth.service'
import {
	UserModule,
} from '../user/user.module'
import {
	NodemailerModule,
} from '../nodemailer/nodemailer.module'
import {
	CONFIG,
} from '../common/config.config'
import {
	CodeModule,
} from '../code/code.module'
import {
	GoogleStrategy,
} from '../google/google.strategy'

@Module({
	controllers: [AuthController,],
	imports:     [CodeModule, UserModule, NodemailerModule, JwtModule.register({
		global:      true,
		signOptions: {
			expiresIn: '24h',
		},
		secret: process.env[CONFIG.JWT_SECRET],
	},),],
	providers: [AuthService, GoogleStrategy,],
	exports:   [AuthService,],
},)
export class AuthModule { }
