import { Deliveryman } from '@prisma/client';
import { v4 as uuid } from 'uuid';

import { ICreateDeliverymanDTO } from '../../dtos/ICreateDeliverymanDTO';
import { IDeliverymanDataDTO } from '../../dtos/IDeliverymanDataDTO';
import { IDeliverymansRepository } from '../IDeliverymansRepository';

class FakeDeliverymansRepository implements IDeliverymansRepository {
  private deliverymans: Deliveryman[] = [];

  async findByIdWithDeliveries(
    id: string,
  ): Promise<IDeliverymanDataDTO | null> {
    let deliveryman = this.deliverymans.find(
      deliverymanToFind => deliverymanToFind.id === id,
    ) as IDeliverymanDataDTO;

    if (deliveryman) {
      Object.assign(deliveryman, { deliveries: [] });
    } else {
      deliveryman = null;
    }

    return deliveryman;
  }

  async findByUsername(username: string): Promise<Deliveryman | null> {
    const deliveryman = this.deliverymans.find(
      deliverymanToFind =>
        deliverymanToFind.username.toLowerCase() === username.toLowerCase(),
    );

    return deliveryman || null;
  }

  async create({
    username,
    password,
  }: ICreateDeliverymanDTO): Promise<Deliveryman> {
    const deliveryman = { username, password, id: uuid() };

    this.deliverymans.push(deliveryman);

    return deliveryman;
  }

  async login({
    username,
    password,
  }: ICreateDeliverymanDTO): Promise<[boolean, Deliveryman | null]> {
    const deliveryman = this.deliverymans.find(
      deliverymanToFind =>
        deliverymanToFind.username.toLowerCase() === username.toLowerCase(),
    );

    if (!deliveryman) {
      return [false, null];
    }

    const passwordMatch = deliveryman.password === password;

    const returnValue = passwordMatch ? deliveryman : null;

    return [passwordMatch, returnValue];
  }
}

export { FakeDeliverymansRepository };
