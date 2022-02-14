import { AppError } from '../../../../shared/errors/AppError';
import { CreateClientUseCase } from './CreateClientUseCase';

let createClientUseCase: CreateClientUseCase;

process.env.NODE_ENV = 'test';

describe('CreateClientUseCase', () => {
  beforeEach(() => {
    createClientUseCase = new CreateClientUseCase();
  });

  it('should be able to create a new Client', async () => {
    const username = 'John Doe';
    const password = '123456';

    const client = await createClientUseCase.execute({ username, password });

    expect(client).toHaveProperty('id');
  });

  it('should not be able to create a new Client with an username that is already in use', async () => {
    const username = 'John Doe 2';
    const password = '123456';

    await createClientUseCase.execute({ username, password });

    await expect(
      createClientUseCase.execute({ username, password }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
