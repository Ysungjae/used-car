import { IsEmail } from 'class-validator';

export class FindUsersDto {
  @IsEmail()
  email: string;
}
