import { Router } from 'express';

import { ensureAuthenticatedDeliveryman } from '../../../shared/middlewares/ensureAuthenticatedDeliveryman';

import { createDeliverymanController } from '../useCases/createDeliveryman';
import { getDeliverymanDataController } from '../useCases/getDeliverymanData';

const deliverymanRoutes = Router();

deliverymanRoutes.post('/deliverymans', createDeliverymanController.handle);

deliverymanRoutes.get(
  '/deliverymans/me',
  ensureAuthenticatedDeliveryman,
  getDeliverymanDataController.handle,
);

export { deliverymanRoutes };
