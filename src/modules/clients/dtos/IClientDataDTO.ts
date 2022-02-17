import { Delivery } from '@prisma/client';

type IClientDataDTO = {
  id: string;
  username: string;
  deliveries?: Delivery[];
} | null;

export { IClientDataDTO };
