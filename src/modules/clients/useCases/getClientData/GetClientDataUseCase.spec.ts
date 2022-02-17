import { CreateClientUseCase } from '../createClient/CreateClientUseCase';
import { GetClientDataUseCase } from './GetClientDataUseCase';

let createClientUseCase: CreateClientUseCase;
let getClientDataUseCase: GetClientDataUseCase;
// let createClientUseCase: CreateClientUseCase;

process.env.NODE_ENV = 'test';

describe('GetClientDataUseCase', () => {
  beforeEach(() => {
    createClientUseCase = new CreateClientUseCase();
    getClientDataUseCase = new GetClientDataUseCase();
  });

  it("should be able to retrieve a client's data", async () => {
    const username = 'John Doe';
    const password = '123456';

    const client = await createClientUseCase.execute({ username, password });

    const clientData = await getClientDataUseCase.execute(client.id);

    expect(clientData).toHaveProperty('deliveries');
  });
});
