import bcrypt from 'bcrypt'
import {
	CONFIG,
} from './config.config'

export const generateCode = (): string => {
	const length = 4
	let code = ''
	for (let i = 0; i < length; i++) {
		const randomDigit = Math.floor(Math.random() * 10,)
		code = code + randomDigit
	}
	return code
}
export const hashString = async(str: string,):Promise<string> => {
	return bcrypt.hash(str, Number.parseInt(process.env[CONFIG.PASS_HASH]!,),)
}