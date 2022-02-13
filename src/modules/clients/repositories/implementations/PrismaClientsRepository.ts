import { hash } from 'bcrypt';
import { Client } from '@prisma/client';
import { prisma } from '../../../../database/prismaClient';

import { ICreateClientDTO } from '../../dtos/ICreateClientDTO';
import { IClientsRepository } from '../IClientsRepository';

class PrismaClientsRepository implements IClientsRepository {
  async findByUsername(username: string): Promise<Client | null> {
    const client = await prisma.client.findFirst({
      where: {
        username: {
          mode: 'insensitive',
          equals: username,
        },
      },
    });

    return client;
  }

  async create({ username, password }: ICreateClientDTO): Promise<Client> {
    const hashedPassword = await hash(password, 10);

    const client = await prisma.client.create({
      data: { username, password: hashedPassword },
    });

    return client;
  }
}

export { PrismaClientsRepository };
