import { Router } from 'express';
import { authenticateClientController } from '../useCases/authenticateClient';

const accountRoutes = Router();

accountRoutes.post('/auth/client', authenticateClientController.handle);

export { accountRoutes };
