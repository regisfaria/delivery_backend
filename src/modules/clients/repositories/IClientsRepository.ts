import { Client } from '@prisma/client';
import { IClientDataDTO } from '../dtos/IClientDataDTO';
import { ICreateClientDTO } from '../dtos/ICreateClientDTO';

interface IClientsRepository {
  create(data: ICreateClientDTO): Promise<Client>;
  login(data: ICreateClientDTO): Promise<[boolean, Client | null]>;
  findByUsername(username: string): Promise<Client | null>;
  findByIdWithDeliveries(id: string): Promise<IClientDataDTO | null>;
}

export { IClientsRepository };
