import { hash, compare } from 'bcrypt';
import { Client } from '@prisma/client';
import { prisma } from '../../../../database/prismaClient';

import { ICreateDeliverymanDTO } from '../../dtos/ICreateDeliverymanDTO';
import { IDeliverymansRepository } from '../IDeliverymansRepository';

class PrismaDeliverymansRepository implements IDeliverymansRepository {
  async findByUsername(username: string): Promise<Client | null> {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username: {
          mode: 'insensitive',
          equals: username,
        },
      },
    });

    return deliveryman;
  }

  async create({ username, password }: ICreateDeliverymanDTO): Promise<Client> {
    const hashedPassword = await hash(password, 10);

    const deliveryman = await prisma.deliveryman.create({
      data: { username, password: hashedPassword },
    });

    return deliveryman;
  }

  async login({
    username,
    password,
  }: ICreateDeliverymanDTO): Promise<[boolean, Client | null]> {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username: {
          mode: 'insensitive',
          equals: username,
        },
      },
    });

    if (!deliveryman) {
      return [false, null];
    }

    const isCredentialsValid = await compare(password, deliveryman.password);

    return [isCredentialsValid, deliveryman];
  }
}

export { PrismaDeliverymansRepository };
