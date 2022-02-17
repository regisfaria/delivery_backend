import { Delivery } from '@prisma/client';

type IDeliverymanDataDTO = {
  id: string;
  username: string;
  deliveries?: Delivery[];
} | null;

export { IDeliverymanDataDTO };
