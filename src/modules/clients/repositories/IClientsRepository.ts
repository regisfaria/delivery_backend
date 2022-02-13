import { Client } from '@prisma/client';
import { ICreateClientDTO } from '../dtos/ICreateClientDTO';

interface IClientsRepository {
  findByUsername(username: string): Promise<Client | null>;
  create(data: ICreateClientDTO): Promise<Client>;
  login(data: ICreateClientDTO): Promise<[boolean, Client | null]>;
}

export { IClientsRepository };
