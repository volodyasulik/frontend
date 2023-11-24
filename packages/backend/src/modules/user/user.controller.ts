/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import {
	Body,
	Controller,
	Get,
	Param,
	Patch,
	UseGuards,
	Request,
} from '@nestjs/common'
import {
	ApiBody, ApiParam, ApiTags,
} from '@nestjs/swagger'
import {
	JwtAuthGuard,
} from '../jwt/jwt-auth.guard'
import type {
	User,
} from '@prisma/client'
import {
	UserService,
} from './user.service'
import {
	UpdateUserDto,
} from './dto/update-user.dto'
import {
	transformUserResponse,
} from './user.utils'
import {
	IRequest,
} from '../common/common.types'
@ApiTags('Users',)
@Controller('users',)
export class UserController {
	constructor(private readonly userService: UserService,) {}

  @UseGuards(JwtAuthGuard,)
  @Get('',)
	public async getSelf(
    @Request() req: IRequest,
	): Promise<Partial<User> | null> {
		return transformUserResponse(req.user,)
	}

  @UseGuards(JwtAuthGuard,)
  @Get(':id',)
@ApiParam({
	name:        'id',
	description: 'User ID',
},)
  public async getUser(@Param('id',) id: string,): Promise<Partial<User> | null> {
  	const user = await this.userService.getUser(
  		{
  			id,
  		},
  	)
  	return transformUserResponse(user,)
  }

  // @Get('list',)
  // @ApiQuery({
  // 	name:     'skip',
  // 	required: true,
  // },)
  // @ApiQuery({
  // 	name:     'take',
  // 	required: true,
  // },)
  // public async getUsers(@Query() query: GetUserDto,): Promise<TUsersListRes> {
  // 	return this.userService.getUsers(query,)
  // }

  //   @Post('create',)
  //   @ApiBody({
  //   	description: 'Create user',
  //   	type:        CreateUserDto,
  //   },)
  //   public async createUser(@Body() userData: CreateUserDto,): Promise<User> {
  //   	return this.userService.createUser(userData,)
  //   }

@Patch(':id',)
@ApiParam({
	name:        'id',
	description: 'User ID',
},)
@ApiBody({
	description: 'Update user',
	type:        UpdateUserDto,
},)
  public async updateUser(
@Param('id',) id: string,
@Body() userData: UpdateUserDto,
  ): Promise<User> {
  	return this.userService.updateUser({
  		where: {
  			id,
  		},
  		data: userData,
  	},)
  }
}
