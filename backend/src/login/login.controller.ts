import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { LoginRequest } from './dto/login.request.dto';
import { LoginService } from './login.service';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CreateAccountDto } from './dto/createAccount.dto';

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
  @ApiCreatedResponse({
    description: 'Account created successfully',
    schema: {
      example: {
        message: 'Account created successfully',
      },
    },
  })
  @ApiConflictResponse({
    description: 'Conflict',
    schema: {
      example: {
        statusCode: 409,
        message: 'Email already in use',
      },
    },
  })
  @HttpCode(201)
  async register(@Body() register: CreateAccountDto) {
    return await this.loginService.register(register);
  }
}
