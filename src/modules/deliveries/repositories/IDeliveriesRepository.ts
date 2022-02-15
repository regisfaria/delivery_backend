import { Delivery } from '@prisma/client';
import { ICreateDeliveryDTO } from '../dtos/ICreateDeliveryDTO';

interface IDeliveriesRepository {
  create(data: ICreateDeliveryDTO): Promise<Delivery>;
}

export { IDeliveriesRepository };
