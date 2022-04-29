import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create.user.dto';
import { UsersService } from './users.service';
import { FindUsersDto } from './dtos/find.users.dto';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('')
  findAllUser(@Query('') dto: FindUsersDto) {
    return this.userService.find(dto.email);
  }

  @Post('/signup')
  createUser(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.userService.findOne(parseInt(id));
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.userService.remove(parseInt(id));
  }
}
