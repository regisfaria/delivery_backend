import { Router } from 'express';

import { accountRoutes } from '../../modules/accounts/routes/accounts.routes';
import { clientsRoutes } from '../../modules/clients/routes/clients.routes';
import { deliverymanRoutes } from '../../modules/deliveryman/routes/deliverymans.routes';

const routes = Router();

routes.use(clientsRoutes);
routes.use(deliverymanRoutes);
routes.use(accountRoutes);

export { routes };
