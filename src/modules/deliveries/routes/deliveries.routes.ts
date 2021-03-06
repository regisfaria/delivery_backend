import { Router } from 'express';

import { ensureAuthenticatedClient } from '../../../shared/middlewares/ensureAuthenticatedClient';
import { ensureAuthenticatedDeliveryman } from '../../../shared/middlewares/ensureAuthenticatedDeliveryman';

import { assignDeliverymanController } from '../useCases/assignDeliveryman';
import { createDeliveryController } from '../useCases/createDelivery';
import { findAllAvailableController } from '../useCases/findAllAvailable';
import { finishDeliveryController } from '../useCases/finishDelivery';

const deliveriesRoutes = Router();

deliveriesRoutes.post(
  '/deliveries',
  ensureAuthenticatedClient,
  createDeliveryController.handle,
);

deliveriesRoutes.get(
  '/deliveries/open',
  ensureAuthenticatedDeliveryman,
  findAllAvailableController.handle,
);

deliveriesRoutes.patch(
  '/deliveries/assign/:deliveryId',
  ensureAuthenticatedDeliveryman,
  assignDeliverymanController.handle,
);

deliveriesRoutes.patch(
  '/deliveries/finish/:deliveryId',
  ensureAuthenticatedDeliveryman,
  finishDeliveryController.handle,
);

export { deliveriesRoutes };
