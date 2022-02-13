import { Router } from 'express';

import { clientsRoutes } from './modules/clients/routes/clients.routes';

const routes = Router();

routes.use(clientsRoutes);

export { routes };
