import { Request, Response } from 'express';
import { GetDeliverymanDataUseCase } from './GetDeliverymanDataUseCase';

class GetDeliverymanDataController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.deliveryman;

    const getDeliverymanDataUseCase = new GetDeliverymanDataUseCase();

    const deliverymanData = await getDeliverymanDataUseCase.execute(id);

    return response.json(deliverymanData);
  }
}

export { GetDeliverymanDataController };
