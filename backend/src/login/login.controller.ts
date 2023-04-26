import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { LoginRequest } from './dto/login.request.dto';
import { LoginService } from './login.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateAccountDto } from './dto/createAccount.dto';

@ApiTags('Login Controller')
@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @HttpCode(200)
  @Post('/login')
  login(@Body() login: LoginRequest) {
    return this.loginService.authenticate(login);
  }

  @Post('/register')
  @ApiCreatedResponse({ description: 'Account created successfully' })
  @HttpCode(201)
  register(@Body() register: CreateAccountDto) {
    return this.loginService.register(register);
  }
}
