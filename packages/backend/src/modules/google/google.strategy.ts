import {
	PassportStrategy,
} from '@nestjs/passport'
import type {
	VerifyCallback,
} from 'passport-google-oauth20'
import {
	Strategy,
} from 'passport-google-oauth20'
import {
	config,
} from 'dotenv'

import {
	Injectable,
} from '@nestjs/common'
import {
	CONFIG,
} from '../common/config.config'

config()

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google',) {
	constructor() {
		super({
			clientID:     process.env[CONFIG.GOOGLE_CLIENT_ID],
			clientSecret: process.env[CONFIG.GOOGLE_CLIENT_SECRET],
			callbackURL:  `${process.env[CONFIG.BACKEND_URL]}/auth/google/callback`,
			scope:        ['email', 'profile',],
		},)
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback,): Promise<any> {
		const {
			name, emails,
		} = profile
		const user = {
			email:     emails[0].value,
			firstName: name.givenName,
			surName:   name.familyName,
		}
		done(null, user,)
	}
}