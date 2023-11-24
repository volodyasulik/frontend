import {
	ApiProperty,
} from '@nestjs/swagger'

import {
	IsEmail,
} from 'class-validator'

export class CreateUserDto {
	@IsEmail()
	@ApiProperty()
	public email: string = ''
}