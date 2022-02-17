import { Delivery } from '@prisma/client';
import { v4 as uuid } from 'uuid';
import { IAddDeliverymanDTO } from '../../dtos/IAddDeliverymanDTO';
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
      delivery =>
        delivery.delivered_at === null && delivery.deliveryman_id === null,
    );

    return deliveries;
  }

  async addDeliveryman({
    deliveryId,
    deliverymanId,
  }: IAddDeliverymanDTO): Promise<Delivery> {
    const deliveryIndex = this.deliveries.findIndex(
      delivery => delivery.id === deliveryId,
    );

    this.deliveries[deliveryIndex].deliveryman_id = deliverymanId;

    return this.deliveries[deliveryIndex];
  }

  async endDelivery(id: string): Promise<Delivery> {
    const deliveryIndex = this.deliveries.findIndex(
      delivery => delivery.id === id,
    );

    this.deliveries[deliveryIndex].delivered_at = new Date();

    return this.deliveries[deliveryIndex];
  }
}

export { FakeDeliveriesRepository };
