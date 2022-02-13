import { Router } from 'express';

import { accountRoutes } from '../../modules/accounts/routes/accounts.routes';
import { clientsRoutes } from '../../modules/clients/routes/clients.routes';

const routes = Router();

routes.use(clientsRoutes);
routes.use(accountRoutes);

export { routes };
