import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateAccountDto {
  @ApiProperty({
    description: `login email`,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: `login password`,
  })
  @IsString()
  @MinLength(8)
  password: string;
}
