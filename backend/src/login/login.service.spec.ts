import { Test } from '@nestjs/testing';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let loginService: LoginService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [], // Add
    }).compile();

    loginService = moduleRef.get<LoginService>(LoginService);
  });

  it('should be defined', () => {
    expect(loginService).toBeDefined();
  });
});
