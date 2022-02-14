import { Router } from 'express';
import { createDeliverymanController } from '../useCases/createDeliveryman';

const deliverymanRoutes = Router();

deliverymanRoutes.post('/deliverymans', createDeliverymanController.handle);

export { deliverymanRoutes };
