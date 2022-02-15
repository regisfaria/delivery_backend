import { Delivery } from '@prisma/client';
import { IDeliveriesRepository } from '../../repositories/IDeliveriesRepository';
import { deliveriesRepository } from '../../repositories/implementations';

interface IAssignDeliveryman {
  deliveryId: string;
  deliverymanId: string;
}

class AssignDeliverymanUseCase {
  private deliveriesRepository: IDeliveriesRepository;

  constructor() {
    this.deliveriesRepository = deliveriesRepository;
  }

  async execute({
    deliveryId,
    deliverymanId,
  }: IAssignDeliveryman): Promise<Delivery> {
    const delivery = await this.deliveriesRepository.addDeliveryman({
      deliveryId,
      deliverymanId,
    });

    return delivery;
  }
}

export { AssignDeliverymanUseCase };
