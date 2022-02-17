import { Client, Delivery } from '@prisma/client';

type IClientDataDTO = (Client & { deliveries: Delivery[] }) | null;

export { IClientDataDTO };
