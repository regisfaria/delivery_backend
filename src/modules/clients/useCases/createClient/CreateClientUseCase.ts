import { Client } from '@prisma/client';
import { AppError } from '../../../../shared/errors/AppError';
import { IClientsRepository } from '../../repositories/IClientsRepository';

import { clientsRepository } from '../../repositories/implementations';

interface ICreateClient {
  username: string;
  password: string;
}

class CreateClientUseCase {
  private clientsRepository: IClientsRepository;

  constructor() {
    this.clientsRepository = clientsRepository;
  }

  async execute({ password, username }: ICreateClient): Promise<Client> {
    const clientExists = await this.clientsRepository.findByUsername(username);

    if (clientExists) {
      throw new AppError('Username already in use');
    }

    const client = await this.clientsRepository.create({ password, username });

    return client;
  }
}

export { CreateClientUseCase };
