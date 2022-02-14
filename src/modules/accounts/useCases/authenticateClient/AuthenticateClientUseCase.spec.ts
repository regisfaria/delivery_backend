import { AppError } from '../../../../shared/errors/AppError';
import { CreateClientUseCase } from '../../../clients/useCases/createClient/CreateClientUseCase';
import { AuthenticateClientUseCase } from './AuthenticateClientUseCase';

let createClientUseCase: CreateClientUseCase;
let authenticateClientUseCase: AuthenticateClientUseCase;

const username = 'John Doe';
const password = '123456';

describe('AuthenticateClientUseCase', () => {
  beforeAll(async () => {
    createClientUseCase = new CreateClientUseCase();
    authenticateClientUseCase = new AuthenticateClientUseCase();

    await createClientUseCase.execute({
      username,
      password,
    });
  });

  it('should be able to authenticate a client', async () => {
    const token = await authenticateClientUseCase.execute({
      username,
      password,
    });

    expect(typeof token).toBe('string');
  });

  it('should not be able to authenticate a client with a wrong username', async () => {
    await expect(
      authenticateClientUseCase.execute({
        username: 'wrongUsername',
        password,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate a client with a wrong password', async () => {
    await expect(
      authenticateClientUseCase.execute({
        username,
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
