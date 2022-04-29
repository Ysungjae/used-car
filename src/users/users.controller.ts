import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create.user.dto';
import { UsersService } from './users.service';
import { FindUsersDto } from './dtos/find.users.dto';
import { UpdateUserDto } from './dtos/update.user.dto';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('')
  findAllUser(@Query('') dto: FindUsersDto) {
    return this.userService.find(dto.email);
  }

  @Post('signup')
  createUser(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Get(':id')
  findUser(@Param('id') id: string) {
    return this.userService.findOne(parseInt(id));
  }

  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.userService.remove(parseInt(id));
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.update(parseInt(id), dto);
  }
}
