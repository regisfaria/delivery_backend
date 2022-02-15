import { Delivery } from '@prisma/client';
import { IDeliveriesRepository } from '../../repositories/IDeliveriesRepository';
import { deliveriesRepository } from '../../repositories/implementations';

class FindAllAvailableUseCase {
  private deliveriesRepository: IDeliveriesRepository;

  constructor() {
    this.deliveriesRepository = deliveriesRepository;
  }

  async execute(): Promise<Delivery[]> {
    const deliveries = await this.deliveriesRepository.findAllNotDelivered();

    return deliveries;
  }
}

export { FindAllAvailableUseCase };
