import { Client } from '@prisma/client';
import { ICreateDeliverymanDTO } from '../dtos/ICreateDeliverymanDTO';
import { IDeliverymanDataDTO } from '../dtos/IDeliverymanDataDTO';

interface IDeliverymansRepository {
  findByUsername(username: string): Promise<Client | null>;
  create(data: ICreateDeliverymanDTO): Promise<Client>;
  login(data: ICreateDeliverymanDTO): Promise<[boolean, Client | null]>;
  findByIdWithDeliveries(id: string): Promise<IDeliverymanDataDTO | null>;
}

export { IDeliverymansRepository };
