import { AppError } from '../../../../shared/errors/AppError';
import { CreateDeliverymanUseCase } from '../../../deliverymans/useCases/createDeliveryman/CreateDeliverymanUseCase';
import { AuthenticateDeliverymanUseCase } from './AuthenticateDeliverymanUseCase';

let createDeliverymanUseCase: CreateDeliverymanUseCase;
let authenticateDeliverymanUseCase: AuthenticateDeliverymanUseCase;

const username = 'John Doe';
const password = '123456';

describe('AuthenticateDeliverymanUseCase', () => {
  beforeAll(async () => {
    createDeliverymanUseCase = new CreateDeliverymanUseCase();
    authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase();

    await createDeliverymanUseCase.execute({
      username,
      password,
    });
  });

  it('should be able to authenticate a deliveryman', async () => {
    const token = await authenticateDeliverymanUseCase.execute({
      username,
      password,
    });

    expect(typeof token).toBe('string');
  });

  it('should not be able to authenticate a deliveryman with a wrong username', async () => {
    await expect(
      authenticateDeliverymanUseCase.execute({
        username: 'wrongUsername',
        password,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate a deliveryman with a wrong password', async () => {
    await expect(
      authenticateDeliverymanUseCase.execute({
        username,
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
