import { ApiProperty } from '@nestjs/swagger';
import { Escape } from 'class-sanitizer';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateAccountDto {
  @ApiProperty({
    description: `login email`,
    example: 'rafael.cruz+1@g4tech.com.br',
  })
  @Escape()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: `login password`,
    example: `12345678`,
  })
  @IsString()
  @Escape()
  @MinLength(8)
  password: string;
}
