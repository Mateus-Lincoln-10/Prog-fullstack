/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { LoginEntity } from './login.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LoginService {
    constructor(
        @InjectRepository(LoginEntity)
        private LoginRepository: Repository<LoginEntity>,
      ) {}
    
      findAll(): Promise<LoginEntity[]> {
        return this.LoginRepository.find();
      }
    
      findOne(loginId: string): Promise<LoginEntity | null> {
        return this.LoginRepository.findOneBy({ loginId });
      }
    
      async remove(loginId: string): Promise<void> {
        await this.LoginRepository.delete(loginId);
      }
}
