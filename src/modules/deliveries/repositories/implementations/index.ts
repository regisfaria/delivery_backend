import { FakeDeliveriesRepository } from '../fakes/FakeDeliveriesRepository';
import { PrismaDeliveriesRepository } from './PrismaDeliveriesRepository';

const prismaDeliveriesRepository = new PrismaDeliveriesRepository();
const fakeDeliveriesRepository = new FakeDeliveriesRepository();

const deliveriesRepository =
  process.env.NODE_ENV === 'test'
    ? fakeDeliveriesRepository
    : prismaDeliveriesRepository;

export { deliveriesRepository };
