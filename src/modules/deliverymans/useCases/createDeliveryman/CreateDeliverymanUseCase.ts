import { Deliveryman } from '@prisma/client';
import { AppError } from '../../../../shared/errors/AppError';
import { IDeliverymansRepository } from '../../repositories/IDeliverymansRepository';

import { deliverymansRepository } from '../../repositories/implementations';

interface ICreateDeliveryman {
  username: string;
  password: string;
}

class CreateDeliverymanUseCase {
  private deliverymansRepository: IDeliverymansRepository;

  constructor() {
    this.deliverymansRepository = deliverymansRepository;
  }

  async execute({
    password,
    username,
  }: ICreateDeliveryman): Promise<Deliveryman> {
    const deliverymanExists = await this.deliverymansRepository.findByUsername(
      username,
    );

    if (deliverymanExists) {
      throw new AppError('Username already in use');
    }

    const deliveryman = await this.deliverymansRepository.create({
      password,
      username,
    });

    return deliveryman;
  }
}

export { CreateDeliverymanUseCase };
