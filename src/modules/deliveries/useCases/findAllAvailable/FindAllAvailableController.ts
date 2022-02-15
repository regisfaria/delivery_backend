import { Request, Response } from 'express';
import { FindAllAvailableUseCase } from './FindAllAvailableUseCase';

class FindAllAvailableController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllAvailableUseCase = new FindAllAvailableUseCase();

    const deliveries = await findAllAvailableUseCase.execute();

    return response.json(deliveries);
  }
}

export { FindAllAvailableController };
