import { Router } from 'express';
import { createClientController } from '../useCases/createClient';

const clientsRoutes = Router();

clientsRoutes.post('/clients', createClientController.handle);

export { clientsRoutes };
