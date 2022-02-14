import { Client } from '@prisma/client';
import { v4 as uuid } from 'uuid';

import { ICreateClientDTO } from '../../dtos/ICreateClientDTO';
import { IClientsRepository } from '../IClientsRepository';

class FakeClientsRepository implements IClientsRepository {
  private clients: Client[] = [];

  async findByUsername(username: string): Promise<Client | null> {
    const client = this.clients.find(
      clientToFind =>
        clientToFind.username.toLowerCase() === username.toLowerCase(),
    );

    return client || null;
  }

  async create({ username, password }: ICreateClientDTO): Promise<Client> {
    const client = { username, password, id: uuid() };

    this.clients.push(client);

    return client;
  }

  async login({
    username,
    password,
  }: ICreateClientDTO): Promise<[boolean, Client | null]> {
    const client = this.clients.find(
      clientToFind =>
        clientToFind.username.toLowerCase() === username.toLowerCase(),
    );

    if (!client) {
      return [false, null];
    }

    const passwordMatch = client.password === password;

    const returnValue = passwordMatch ? client : null;

    return [passwordMatch, returnValue];
  }
}

export { FakeClientsRepository };
