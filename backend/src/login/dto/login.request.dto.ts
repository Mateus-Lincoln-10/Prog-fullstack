import { ApiProperty } from '@nestjs/swagger';
import { Escape } from 'class-sanitizer';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginRequest {
  @ApiProperty({
    description: `login email`,
    example: 'rafael.cruz+1@g4tech.com.br',
  })
  @IsEmail()
  @Escape()
  email: string;

  @ApiProperty({
    description: `login password`,
    example: `12345678`,
  })
  @Escape()
  @IsString()
  @MinLength(6)
  password: string;
}
