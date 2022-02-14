import { FakeDeliverymansRepository } from '../fakes/FakeDeliverymansRepository';
import { PrismaDeliverymansRepository } from './PrismaDeliverymansRepository';

const prismaDeliverymansRepository = new PrismaDeliverymansRepository();
const fakeDeliverymansRepository = new FakeDeliverymansRepository();

const deliverymansRepository =
  process.env.NODE_ENV === 'test'
    ? fakeDeliverymansRepository
    : prismaDeliverymansRepository;

export { deliverymansRepository };
