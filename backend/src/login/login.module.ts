import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { LoginEntity } from './login.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LoginEntity])],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
