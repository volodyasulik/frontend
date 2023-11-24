import {
	ApiProperty,
} from '@nestjs/swagger'
import {
	IsString,
	Length,
} from 'class-validator'
export class SignInUserDto {
    @IsString()
    @ApiProperty()
	public login!: string

    @IsString()
    @Length(12, 33,)
    @ApiProperty()
    public password!: string
}