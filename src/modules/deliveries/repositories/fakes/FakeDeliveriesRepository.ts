import { Delivery } from '@prisma/client';
import { v4 as uuid } from 'uuid';
import { ICreateDeliveryDTO } from '../../dtos/ICreateDeliveryDTO';
import { IDeliveriesRepository } from '../IDeliveriesRepository';

class FakeDeliveriesRepository implements IDeliveriesRepository {
  private deliveries: Delivery[] = [];

  async create({ clientId, itemName }: ICreateDeliveryDTO): Promise<Delivery> {
    const delivery: Delivery = {
      id: uuid(),
      client_id: clientId,
      delivered_at: null,
      deliveryman_id: null,
      item_name: itemName,
      created_at: new Date(),
    };

    this.deliveries.push(delivery);

    return delivery;
  }

  async findAllNotDelivered(): Promise<Delivery[]> {
    const deliveries = this.deliveries.filter(
      delivery => delivery.delivered_at === null,
    );

    return deliveries;
  }
}

export { FakeDeliveriesRepository };
