import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginRequest {
  @ApiProperty({
    description: `login email`,
    example: 'rafael.cruz+1@g4tech.com.br',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: `login password`,
    example: `12345678`,
  })
  @IsString()
  @MinLength(6)
  password: string;
}
