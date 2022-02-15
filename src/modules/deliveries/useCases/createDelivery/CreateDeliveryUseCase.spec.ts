import { CreateClientUseCase } from '../../../clients/useCases/createClient/CreateClientUseCase';
import { CreateDeliveryUseCase } from './CreateDeliveryUseCase';

let createClientUseCase: CreateClientUseCase;
let createDeliveryUseCase: CreateDeliveryUseCase;

process.env.NODE_ENV = 'test';

describe('CreateDeliveryUseCase', () => {
  beforeEach(() => {
    createClientUseCase = new CreateClientUseCase();
    createDeliveryUseCase = new CreateDeliveryUseCase();
  });

  it('should be able to create a new Delivery', async () => {
    const username = 'John Doe';
    const password = '123456';

    const client = await createClientUseCase.execute({ username, password });

    const itemName = 'TestItem';

    const delivery = await createDeliveryUseCase.execute({
      itemName,
      clientId: client.id,
    });

    expect(delivery).toHaveProperty('id');
  });
});
