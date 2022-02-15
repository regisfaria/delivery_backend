import { Router } from 'express';
import { ensureAuthenticatedClient } from '../../../shared/middlewares/ensureAuthenticatedClient';
import { ensureAuthenticatedDeliveryman } from '../../../shared/middlewares/ensureAuthenticatedDeliveryman';
import { createDeliveryController } from '../useCases/createDelivery';
import { findAllAvailableController } from '../useCases/findAllAvailable';

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

export { deliveriesRoutes };
