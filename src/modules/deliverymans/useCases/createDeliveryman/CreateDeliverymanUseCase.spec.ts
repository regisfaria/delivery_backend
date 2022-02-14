import { AppError } from '../../../../shared/errors/AppError';
import { CreateDeliverymanUseCase } from './CreateDeliverymanUseCase';

let createDeliverymanUseCase: CreateDeliverymanUseCase;

process.env.NODE_ENV = 'test';

describe('CreateDeliverymanUseCase', () => {
  beforeEach(() => {
    createDeliverymanUseCase = new CreateDeliverymanUseCase();
  });

  it('should be able to create a new Deliveryman', async () => {
    const username = 'John Doe';
    const password = '123456';

    const client = await createDeliverymanUseCase.execute({
      username,
      password,
    });

    expect(client).toHaveProperty('id');
  });

  it('should not be able to create a new Deliveryman with an username that is already in use', async () => {
    const username = 'John Doe 2';
    const password = '123456';

    await createDeliverymanUseCase.execute({ username, password });

    await expect(
      createDeliverymanUseCase.execute({ username, password }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
