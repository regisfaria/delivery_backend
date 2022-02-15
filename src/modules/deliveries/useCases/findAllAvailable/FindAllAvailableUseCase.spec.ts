import { CreateClientUseCase } from '../../../clients/useCases/createClient/CreateClientUseCase';
import { CreateDeliverymanUseCase } from '../../../deliverymans/useCases/createDeliveryman/CreateDeliverymanUseCase';
import { AssignDeliverymanUseCase } from '../assignDeliveryman/AssignDeliverymanUseCase';
import { CreateDeliveryUseCase } from '../createDelivery/CreateDeliveryUseCase';
import { FindAllAvailableUseCase } from './FindAllAvailableUseCase';

let createClientUseCase: CreateClientUseCase;
let createDeliveryUseCase: CreateDeliveryUseCase;
let findAllAvailableUseCase: FindAllAvailableUseCase;
let createDeliverymanUseCase: CreateDeliverymanUseCase;
let assignDeliverymanUseCase: AssignDeliverymanUseCase;

process.env.NODE_ENV = 'test';

describe('FindAllAvailableUseCase', () => {
  beforeEach(() => {
    createClientUseCase = new CreateClientUseCase();
    createDeliveryUseCase = new CreateDeliveryUseCase();
    findAllAvailableUseCase = new FindAllAvailableUseCase();
    createDeliverymanUseCase = new CreateDeliverymanUseCase();
    assignDeliverymanUseCase = new AssignDeliverymanUseCase();
  });

  it('should be able to list all available Deliveries', async () => {
    const username = 'John Doe';
    const password = '123456';

    const client = await createClientUseCase.execute({ username, password });

    const deliverymanUsername = 'John Doe';

    const deliveryman = await createDeliverymanUseCase.execute({
      username: deliverymanUsername,
      password,
    });

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

    await assignDeliverymanUseCase.execute({
      deliveryId: item3.id,
      deliverymanId: deliveryman.id,
    });

    const availableDeliveries = await findAllAvailableUseCase.execute();

    expect(availableDeliveries).toEqual(expect.arrayContaining([item1, item2]));
  });
});
