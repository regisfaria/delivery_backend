import { CreateDeliverymanUseCase } from '../createDeliveryman/CreateDeliverymanUseCase';
import { GetDeliverymanDataUseCase } from './GetDeliverymanDataUseCase';

let createDeliverymanUseCase: CreateDeliverymanUseCase;
let getDeliverymanDataUseCase: GetDeliverymanDataUseCase;

process.env.NODE_ENV = 'test';

describe('GetDeliverymanDataUseCase', () => {
  beforeEach(() => {
    createDeliverymanUseCase = new CreateDeliverymanUseCase();
    getDeliverymanDataUseCase = new GetDeliverymanDataUseCase();
  });

  it("should be able to retrieve a deliveryman's data", async () => {
    const username = 'John Doe';
    const password = '123456';

    const deliveryman = await createDeliverymanUseCase.execute({
      username,
      password,
    });

    const deliverymanData = await getDeliverymanDataUseCase.execute(
      deliveryman.id,
    );

    expect(deliverymanData).toHaveProperty('deliveries');
  });
});
