import {
	Body,
	Controller, Get, Post,Put,
	Req,
	Redirect,
	UseGuards,
	Session,
	HttpException,
	HttpStatus,
} from '@nestjs/common'
import {
	ApiBody,
} from '@nestjs/swagger'
import {
	UserService,
} from '../user/user.service'
import {
	SignUpUserDto,
} from './dto/sign-up-user.dto'
import {
	SignInUserDto,
} from './dto/sign-in-user.dto'
import {
	CodeVerifyDto,
} from './dto/code-verify.dto'
import {
	AuthService,
} from './auth.service'
import {
	AuthGuard,
} from '@nestjs/passport'
import type {
	GoogleUserDto,
} from './dto/google-user.dto'
import {
	CONFIG,
} from '../common/config.config'
import {
	IJwt,
} from './auth.types'
import {
	Request,
} from 'express'
import {
	ERR_MESSAGES,
} from '../common/common.const'

@Controller('auth',)
export class AuthController {
	constructor(
private readonly userService: UserService,
private readonly authService: AuthService,
	) { }

@Post('sign-up',)
@ApiBody({
	description: 'Sign Up',
	type:        SignUpUserDto,
},)
	public async signUp(@Body() userData: SignUpUserDto, @Session() session: IJwt,): Promise<string> {
		const jwt = await this.authService.signUp(userData,)
		session.jwtToken = jwt
		return jwt
	}

@Post('sign-in',)
@ApiBody({
	description: 'Sign In',
	type:        SignInUserDto,
},)
public async SignIn(@Body() userData: SignInUserDto, @Session() session: IJwt,): Promise<string> {
	const jwt = await this.authService.signIn(userData,)
	session.jwtToken = jwt
	return jwt
}

@Post('check-password',)
@ApiBody({
	description: 'check password',
	type:        SignInUserDto,
},)
public async checkPassword(@Body() userData: SignInUserDto,): Promise<boolean> {
	return  this.authService.checkPassword(userData,)
}

// @Post('two-factor-authentication',)
// @ApiBody({
// 	description: 'two-factor-authentication',
// 	type:        CodeVerifyDto,
// },)
// public async TwoFactorAuthentication(@Body() userData: CodeVerifyDto,): Promise<string> {
// 	return this.authService.verifyCode(userData.login, userData.code,)
// }

@Post('check-user-login',)
public async CheckUserLogin(@Body() data: { login: string },): Promise<boolean> {
	return this.authService.checkUserExist(data.login,)
}

@Get('logout',)
public async logout(@Req() req: Request,): Promise<void> {
	req.session.destroy(() => {
	},)
}

@Post('send-code',)
@ApiBody({
	description: 'verify login/send',
},)
public async LoginExist(@Body() userData: { login: string },): Promise<string> {
	const message = this.authService.verifyLoginSendCode(userData.login,)
	return message
}

@Put('send-code',)
@ApiBody({
	description: 'verify login',
	type:        CodeVerifyDto,
},)
public async LoginExistCodeVerify(@Body() userData: CodeVerifyDto,): Promise<string> {
	return this.authService.verifyLoginCheckCode(userData.login, userData.code,)
}

@Get('google/callback',)
@UseGuards(AuthGuard('google',),)
@Redirect(`${process.env[CONFIG.FRONTEND_URL]}/home`,)
@ApiBody({
	description: 'Google Auth',
},)
public async GoogleAuth(@Req() req: { user: GoogleUserDto }, @Session() session: IJwt,): Promise<void> {
	const jwt = await this.authService.googleAuth(req.user,)
	session.jwtToken = jwt
}

@Get('get-jwt-token',)
public async getJwtToken(@Session() session: IJwt,): Promise<IJwt> {
	const {
		jwtToken,
	} = session

	if (!jwtToken) {
		throw new HttpException(ERR_MESSAGES.USER_ALREADY_EXIST, HttpStatus.UNAUTHORIZED,)
	}

	return {
		jwtToken,
	}
}
}