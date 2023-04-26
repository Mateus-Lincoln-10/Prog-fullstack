import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsStrongPassword } from 'class-validator';

export class CreateAccountDto {
  @ApiProperty({
    description: `login email`,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: `login password`,
  })
  @IsStrongPassword()
  password: string;
}
