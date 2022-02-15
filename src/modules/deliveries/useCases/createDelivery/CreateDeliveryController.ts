import { Request, Response } from 'express';
import { CreateDeliveryUseCase } from './CreateDeliveryUseCase';

class CreateDeliveryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { itemName } = request.body;
    const { id: clientId } = request.client;

    const createDeliveryUseCase = new CreateDeliveryUseCase();

    const delivery = await createDeliveryUseCase.execute({
      itemName,
      clientId,
    });

    return response.status(201).json(delivery);
  }
}

export { CreateDeliveryController };
