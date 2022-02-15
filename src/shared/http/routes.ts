import { Router } from 'express';

import { accountRoutes } from '../../modules/accounts/routes/accounts.routes';
import { clientsRoutes } from '../../modules/clients/routes/clients.routes';
import { deliveriesRoutes } from '../../modules/deliveries/routes/deliveries.routes';
import { deliverymanRoutes } from '../../modules/deliverymans/routes/deliverymans.routes';

const routes = Router();

routes.use(clientsRoutes);
routes.use(deliverymanRoutes);
routes.use(accountRoutes);
routes.use(deliveriesRoutes);

export { routes };
