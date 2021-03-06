import { sign } from 'jsonwebtoken';
import { AppError } from '../../../../shared/errors/AppError';

import { IDeliverymansRepository } from '../../../deliverymans/repositories/IDeliverymansRepository';
import { deliverymansRepository } from '../../../deliverymans/repositories/implementations';

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

class AuthenticateDeliverymanUseCase {
  private deliverymansRepository: IDeliverymansRepository;

  constructor() {
    this.deliverymansRepository = deliverymansRepository;
  }

  async execute({
    password,
    username,
  }: IAuthenticateDeliveryman): Promise<string> {
    const [isCredentialsValid, deliveryman] =
      await this.deliverymansRepository.login({
        password,
        username,
      });

    if (!isCredentialsValid) {
      throw new AppError('Invalid username or password');
    }

    const token = sign({ username }, process.env.DELIVERYMAN_TOKEN_HASH!, {
      subject: deliveryman?.id,
      expiresIn: '1d',
    });

    return token;
  }
}

export { AuthenticateDeliverymanUseCase };
