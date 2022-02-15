import { Delivery } from '@prisma/client';
import { prisma } from '../../../../database/prismaClient';
import { ICreateDeliveryDTO } from '../../dtos/ICreateDeliveryDTO';
import { IDeliveriesRepository } from '../IDeliveriesRepository';

class PrismaDeliveriesRepository implements IDeliveriesRepository {
  async create({ clientId, itemName }: ICreateDeliveryDTO): Promise<Delivery> {
    const delivery = await prisma.delivery.create({
      data: {
        client_id: clientId,
        item_name: itemName,
      },
    });

    return delivery;
  }
}

export { PrismaDeliveriesRepository };
