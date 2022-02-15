import { CreateClientUseCase } from '../../../clients/useCases/createClient/CreateClientUseCase';
import { CreateDeliveryUseCase } from '../createDelivery/CreateDeliveryUseCase';
import { FindAllAvailableUseCase } from './FindAllAvailableUseCase';

let createClientUseCase: CreateClientUseCase;
let createDeliveryUseCase: CreateDeliveryUseCase;
let findAllAvailableUseCase: FindAllAvailableUseCase;

process.env.NODE_ENV = 'test';

describe('FindAllAvailableUseCase', () => {
  beforeEach(() => {
    createClientUseCase = new CreateClientUseCase();
    createDeliveryUseCase = new CreateDeliveryUseCase();
    findAllAvailableUseCase = new FindAllAvailableUseCase();
  });

  it('should be able to list all available Deliveries', async () => {
    const username = 'John Doe';
    const password = '123456';

    const client = await createClientUseCase.execute({ username, password });

    const itemName1 = 'Sofa';
    const itemName2 = 'Internet Modem';
    const itemName3 = 'Nintendo Switch';

    const item1 = await createDeliveryUseCase.execute({
      itemName: itemName1,
      clientId: client.id,
    });
    const item2 = await createDeliveryUseCase.execute({
      itemName: itemName2,
      clientId: client.id,
    });
    const item3 = await createDeliveryUseCase.execute({
      itemName: itemName3,
      clientId: client.id,
    });

    const availableDeliveries = await findAllAvailableUseCase.execute();

    expect(availableDeliveries).toEqual(
      expect.arrayContaining([item1, item2, item3]),
    );
  });
});
