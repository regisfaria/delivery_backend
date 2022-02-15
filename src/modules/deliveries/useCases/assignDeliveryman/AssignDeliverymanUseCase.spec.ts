import { CreateClientUseCase } from '../../../clients/useCases/createClient/CreateClientUseCase';
import { CreateDeliverymanUseCase } from '../../../deliverymans/useCases/createDeliveryman/CreateDeliverymanUseCase';
import { CreateDeliveryUseCase } from '../createDelivery/CreateDeliveryUseCase';
import { AssignDeliverymanUseCase } from './AssignDeliverymanUseCase';

let createClientUseCase: CreateClientUseCase;
let createDeliverymanUseCase: CreateDeliverymanUseCase;
let createDeliveryUseCase: CreateDeliveryUseCase;
let assignDeliverymanUseCase: AssignDeliverymanUseCase;

process.env.NODE_ENV = 'test';

describe('AssignDeliverymanUseCase', () => {
  beforeEach(() => {
    createClientUseCase = new CreateClientUseCase();
    createDeliverymanUseCase = new CreateDeliverymanUseCase();
    createDeliveryUseCase = new CreateDeliveryUseCase();
    assignDeliverymanUseCase = new AssignDeliverymanUseCase();
  });

  it('should be able to assign a Deliveryman for an open delivery', async () => {
    const clientUsername = 'John Doe';
    const deliverymanUsername = 'John Doe Deliveryman';
    const password = '123456';

    const client = await createClientUseCase.execute({
      username: clientUsername,
      password,
    });

    const itemName = 'TestItem';

    const delivery = await createDeliveryUseCase.execute({
      itemName,
      clientId: client.id,
    });

    const deliveryman = await createDeliverymanUseCase.execute({
      username: deliverymanUsername,
      password,
    });

    const assignedDelivery = await assignDeliverymanUseCase.execute({
      deliveryId: delivery.id,
      deliverymanId: deliveryman.id,
    });

    expect(assignedDelivery.deliveryman_id).toEqual(deliveryman.id);
  });
});
