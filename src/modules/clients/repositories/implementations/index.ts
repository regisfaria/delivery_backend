import { FakeClientsRepository } from '../fakes/FakeClientsRepository';
import { PrismaClientsRepository } from './PrismaClientsRepository';

const prismaClientsRepository = new PrismaClientsRepository();
const fakeClientsRepository = new FakeClientsRepository();

const clientsRepository =
  process.env.NODE_ENV === 'test'
    ? fakeClientsRepository
    : prismaClientsRepository;

export { clientsRepository };
