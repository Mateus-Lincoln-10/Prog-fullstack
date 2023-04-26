import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsStrongPassword } from 'class-validator';

export class LoginRequest {
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
