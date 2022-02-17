import { Router } from 'express';
import { ensureAuthenticatedClient } from '../../../shared/middlewares/ensureAuthenticatedClient';
import { createClientController } from '../useCases/createClient';
import { getClientDataController } from '../useCases/getClientData';

const clientsRoutes = Router();

clientsRoutes.post('/clients', createClientController.handle);

clientsRoutes.get(
  '/clients/me',
  ensureAuthenticatedClient,
  getClientDataController.handle,
);

export { clientsRoutes };
