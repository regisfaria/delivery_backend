import { IDeliverymanDataDTO } from '../../dtos/IDeliverymanDataDTO';
import { IDeliverymansRepository } from '../../repositories/IDeliverymansRepository';
import { deliverymansRepository } from '../../repositories/implementations';

class GetDeliverymanDataUseCase {
  private deliverymansRepository: IDeliverymansRepository;

  constructor() {
    this.deliverymansRepository = deliverymansRepository;
  }

  async execute(deliverymanId: string): Promise<IDeliverymanDataDTO> {
    const deliveryman =
      await this.deliverymansRepository.findByIdWithDeliveries(deliverymanId);

    return deliveryman;
  }
}

export { GetDeliverymanDataUseCase };
