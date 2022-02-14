import { Client } from '@prisma/client';
import { ICreateDeliverymanDTO } from '../dtos/ICreateDeliverymanDTO';

interface IDeliverymansRepository {
  findByUsername(username: string): Promise<Client | null>;
  create(data: ICreateDeliverymanDTO): Promise<Client>;
  login(data: ICreateDeliverymanDTO): Promise<[boolean, Client | null]>;
}

export { IDeliverymansRepository };
