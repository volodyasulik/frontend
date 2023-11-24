import {
	ApiProperty,
} from '@nestjs/swagger'
import {
	IsString,
	Length,
} from 'class-validator'

export class CodeVerifyDto {
    @IsString()
    @ApiProperty()
	public login!: string

    @IsString()
    @Length(4,)
    @ApiProperty()
    public code!: string
}

export class DeleteCodeDto {
     @IsString()
    @ApiProperty()
	public login!: string
}