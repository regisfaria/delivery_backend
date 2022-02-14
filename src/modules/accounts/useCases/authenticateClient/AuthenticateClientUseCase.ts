import { sign } from 'jsonwebtoken';
import { AppError } from '../../../../shared/errors/AppError';

import { IClientsRepository } from '../../../clients/repositories/IClientsRepository';
import { clientsRepository } from '../../../clients/repositories/implementations';

interface IAuthenticateClient {
  username: string;
  password: string;
}

class AuthenticateClientUseCase {
  private clientsRepository: IClientsRepository;

  constructor() {
    this.clientsRepository = clientsRepository;
  }

  async execute({ password, username }: IAuthenticateClient): Promise<string> {
    const [isCredentialsValid, client] = await this.clientsRepository.login({
      password,
      username,
    });

    if (!isCredentialsValid) {
      throw new AppError('Invalid username or password');
    }

    const token = sign({ username }, process.env.TOKEN_HASH!, {
      subject: client?.id,
      expiresIn: '1d',
    });

    return token;
  }
}

export { AuthenticateClientUseCase };
