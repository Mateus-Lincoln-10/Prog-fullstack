import { ApiProperty } from '@nestjs/swagger';
import { Escape } from 'class-sanitizer';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateAccountDto {
  @ApiProperty({
    description: `login email`,
  })
  @Escape()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: `login password`,
  })
  @IsString()
  @Escape()
  @MinLength(8)
  password: string;
}
