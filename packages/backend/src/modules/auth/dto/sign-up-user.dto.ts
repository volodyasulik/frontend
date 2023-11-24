import {
	ApiProperty,
} from '@nestjs/swagger'
import {
	IsString,
	Length,
} from 'class-validator'
export class SignUpUserDto {
    @IsString()
    @ApiProperty()
	public email!: string

    @IsString()
    @ApiProperty()
    public phone!: string

    @IsString()
    @ApiProperty()
    public fullName!: string

    @IsString()
    @Length(12, 33,)
    @ApiProperty()
    public password!: string
}