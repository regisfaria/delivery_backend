import { Request, Response } from 'express';
import { FinishDeliveryUseCase } from './FinishDeliveryUseCase';

class FinishDeliveryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { deliveryId } = request.params;
    const { id: deliverymanId } = request.deliveryman;

    const finishDeliveryUseCase = new FinishDeliveryUseCase();

    const delivery = await finishDeliveryUseCase.execute({
      deliveryId,
      deliverymanId,
    });

    return response.json(delivery);
  }
}

export { FinishDeliveryController };
