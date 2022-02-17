import { hash, compare } from 'bcrypt';
import { Client } from '@prisma/client';
import { prisma } from '../../../../database/prismaClient';

import { ICreateDeliverymanDTO } from '../../dtos/ICreateDeliverymanDTO';
import { IDeliverymansRepository } from '../IDeliverymansRepository';
import { IDeliverymanDataDTO } from '../../dtos/IDeliverymanDataDTO';

class PrismaDeliverymansRepository implements IDeliverymansRepository {
  async findByIdWithDeliveries(
    id: string,
  ): Promise<IDeliverymanDataDTO | null> {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        username: true,
        deliveries: true,
      },
    });

    return deliveryman;
  }

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

    // this is needed because if credentials are invalid, I don't want
    // to return the client, only when the passwords match
    const returnValue = isCredentialsValid ? deliveryman : null;

    return [isCredentialsValid, returnValue];
  }
}

export { PrismaDeliverymansRepository };
