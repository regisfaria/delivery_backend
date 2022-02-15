import { Router } from 'express';
import { ensureAuthenticatedClient } from '../../../shared/middlewares/ensureAuthenticatedClient';
import { createDeliveryController } from '../useCases/createDelivery';

const deliveriesRoutes = Router();

deliveriesRoutes.post(
  '/deliveries',
  ensureAuthenticatedClient,
  createDeliveryController.handle,
);

export { deliveriesRoutes };
