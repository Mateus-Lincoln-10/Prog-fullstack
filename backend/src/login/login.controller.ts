import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { LoginRequest } from './dto/login.request.dto';
import { LoginService } from './login.service';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CreateAccountDto } from './dto/createAccount.dto';
import { LoginEntity } from './login.entity';

@ApiTags('Login Controller')
@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @HttpCode(200)
  @Post('/login')
  @ApiOkResponse({
    description: 'Login authenticated successfully',
    schema: {
      properties: {
        accessToken: {
          type: 'string',
        },
      },
    },
  })

  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
    schema: {
      example: {
        statusCode: 401,
        message: 'Email ou senha Inválidos',
      },
    },
  })
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
