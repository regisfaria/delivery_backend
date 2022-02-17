import { Delivery } from '@prisma/client';
import { prisma } from '../../../../database/prismaClient';
import { IAddDeliverymanDTO } from '../../dtos/IAddDeliverymanDTO';
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

  async findAllNotDelivered(): Promise<Delivery[]> {
    const deliveries = await prisma.delivery.findMany({
      where: {
        delivered_at: null,
        deliveryman_id: null,
      },
    });

    return deliveries;
  }

  async addDeliveryman({
    deliveryId,
    deliverymanId,
  }: IAddDeliverymanDTO): Promise<Delivery> {
    const updatedDelivery = await prisma.delivery.update({
      where: {
        id: deliveryId,
      },
      data: {
        deliveryman_id: deliverymanId,
      },
    });

    return updatedDelivery;
  }

  async endDelivery(id: string): Promise<Delivery> {
    const updatedDelivery = await prisma.delivery.update({
      where: {
        id,
      },
      data: {
        delivered_at: new Date(),
      },
    });

    return updatedDelivery;
  }
}

export { PrismaDeliveriesRepository };
