import { IClientDataDTO } from '../../dtos/IClientDataDTO';
import { IClientsRepository } from '../../repositories/IClientsRepository';
import { clientsRepository } from '../../repositories/implementations';

class GetClientDataUseCase {
  private clientsRepository: IClientsRepository;

  constructor() {
    this.clientsRepository = clientsRepository;
  }

  async execute(clientId: string): Promise<IClientDataDTO> {
    const client = await this.clientsRepository.findByIdWithDeliveries(
      clientId,
    );

    return client;
  }
}

export { GetClientDataUseCase };
