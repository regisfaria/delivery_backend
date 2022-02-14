import { Router } from 'express';

import { authenticateClientController } from '../useCases/authenticateClient';
import { authenticateDeliverymanController } from '../useCases/authenticateDeliveryman';

const accountRoutes = Router();

accountRoutes.post('/auth/client', authenticateClientController.handle);
accountRoutes.post(
  '/auth/deliveryman',
  authenticateDeliverymanController.handle,
);

export { accountRoutes };
