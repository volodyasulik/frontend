import {
	IsString,
	IsEmail,
} from 'class-validator'

export class GoogleUserDto {
    @IsString()
    @IsEmail()
	public email!: string

    @IsString()
    public firstName!: string

    @IsString()
    public surName?: string
}