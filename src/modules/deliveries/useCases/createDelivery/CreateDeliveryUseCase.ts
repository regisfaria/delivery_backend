import { Delivery } from '@prisma/client';
import { IDeliveriesRepository } from '../../repositories/IDeliveriesRepository';
import { deliveriesRepository } from '../../repositories/implementations';

interface ICreateDelivery {
  itemName: string;
  clientId: string;
}

class CreateDeliveryUseCase {
  private deliveriesRepository: IDeliveriesRepository;

  constructor() {
    this.deliveriesRepository = deliveriesRepository;
  }

  async execute({ itemName, clientId }: ICreateDelivery): Promise<Delivery> {
    const delivery = await this.deliveriesRepository.create({
      clientId,
      itemName,
    });

    return delivery;
  }
}

export { CreateDeliveryUseCase };
