import {
	ApiProperty,
} from '@nestjs/swagger'

import {
	IsEmail, IsOptional, IsPhoneNumber, IsString, IsStrongPassword,
} from 'class-validator'

export class UpdateUserDto {
	@IsOptional()
	@IsEmail()
	@ApiProperty()
	public email?: string

	@IsOptional()
	@IsPhoneNumber()
	@ApiProperty()
	public phone?: string

	@IsOptional()
	@IsString()
	@ApiProperty()
	@IsStrongPassword({
		minLength:    12,
		minLowercase: 1,
		minNumbers:   1,
		minSymbols:   1,
		minUppercase: 1,
	},)
	public password?: string

	@IsOptional()
	@IsString()
	@ApiProperty()
	public fullName?: string
}