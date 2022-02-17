import { Delivery } from '@prisma/client';

import { IDeliverymansRepository } from '../../../deliverymans/repositories/IDeliverymansRepository';
import { IDeliveriesRepository } from '../../repositories/IDeliveriesRepository';

import { deliverymansRepository } from '../../../deliverymans/repositories/implementations';
import { deliveriesRepository } from '../../repositories/implementations';

import { AppError } from '../../../../shared/errors/AppError';

interface IFinishDelivery {
  deliveryId: string;
  deliverymanId: string;
}

class FinishDeliveryUseCase {
  private deliveriesRepository: IDeliveriesRepository;

  private deliverymansRepository: IDeliverymansRepository;

  constructor() {
    this.deliveriesRepository = deliveriesRepository;
    this.deliverymansRepository = deliverymansRepository;
  }

  async execute({
    deliveryId,
    deliverymanId,
  }: IFinishDelivery): Promise<Delivery> {
    const deliverymanData =
      await this.deliverymansRepository.findByIdWithDeliveries(deliverymanId);

    if (!deliverymanData?.deliveries) {
      throw new AppError('This deliveryman have no deliveries');
    }

    const deliveryExists = deliverymanData.deliveries.find(
      deliveryToFind =>
        deliveryToFind.id === deliveryId &&
        deliveryToFind.deliveryman_id === deliverymanId,
    );

    if (!deliveryExists) {
      throw new AppError(
        'This deliveryman if not responsible for this delivery',
      );
    }

    const delivery = await this.deliveriesRepository.endDelivery(deliveryId);

    return delivery;
  }
}

export { FinishDeliveryUseCase };
