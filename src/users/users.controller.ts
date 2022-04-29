import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create.user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/signup')
  createUser(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Delete(':id')
  removeUser(@Param('id') id: number) {
    return this.userService.remove(id);
  }
}
