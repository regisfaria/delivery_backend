import { Request, Response } from 'express';
import { AssignDeliverymanUseCase } from './AssignDeliverymanUseCase';

class AssignDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { deliveryId } = request.params;
    const { id: deliverymanId } = request.deliveryman;

    const assignDeliverymanUseCase = new AssignDeliverymanUseCase();

    const delivery = await assignDeliverymanUseCase.execute({
      deliveryId,
      deliverymanId,
    });

    return response.status(200).json(delivery);
  }
}

export { AssignDeliverymanController };
