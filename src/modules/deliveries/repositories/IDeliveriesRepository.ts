import { Delivery } from '@prisma/client';

import { IAddDeliverymanDTO } from '../dtos/IAddDeliverymanDTO';
import { ICreateDeliveryDTO } from '../dtos/ICreateDeliveryDTO';

interface IDeliveriesRepository {
  create(data: ICreateDeliveryDTO): Promise<Delivery>;
  findAllNotDelivered(): Promise<Delivery[]>;
  addDeliveryman(data: IAddDeliverymanDTO): Promise<Delivery>;
  endDelivery(id: string): Promise<Delivery>;
}

export { IDeliveriesRepository };
