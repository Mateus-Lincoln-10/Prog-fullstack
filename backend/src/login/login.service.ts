import * as bcrypt from 'bcrypt';
import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginEntity } from './login.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginRequest } from './dto/login.request.dto';
import { CreateAccountDto } from './dto/createAccount.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(LoginEntity)
    private loginRepository: Repository<LoginEntity>,
    private jwtService: JwtService,
  ) {}

  async authenticate(login: LoginRequest) {
    const user = await this.loginRepository.findOneBy({
      loginEmail: login.email,
    });

    if (!user || !(await bcrypt.compare(login.password, user.loginPassword))) {
      throw new UnauthorizedException('Email ou senha Inválidos');
    }

    const userLogged = { sub: user.loginId, email: user.loginEmail };
    return { accessToken: await this.jwtService.signAsync(userLogged) };
  }

  async register(register: CreateAccountDto) {
    this.validateUniqueEmail(register);

    const saltOrRounds = 10;
    const hash = await bcrypt.hash(register.password, saltOrRounds);

    const login: LoginEntity = new LoginEntity();

    login.loginEmail = register.email;
    login.loginPassword = hash;

    return this.loginRepository.save(login);
  }

  private validateUniqueEmail(login: CreateAccountDto) {
    this.loginRepository
      .findOneBy({
        loginEmail: login.email,
      })
      .then((e) => {
        if (e) {
          throw new ConflictException('Email already exists');
        }
      });
  }
}
