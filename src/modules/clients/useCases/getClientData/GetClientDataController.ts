import { Request, Response } from 'express';
import { GetClientDataUseCase } from './GetClientDataUseCase';

class GetClientDataController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.client;

    const getClientDataUseCase = new GetClientDataUseCase();

    const clientData = await getClientDataUseCase.execute(id);

    return response.json(clientData);
  }
}

export { GetClientDataController };
