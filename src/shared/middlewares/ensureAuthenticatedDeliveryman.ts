import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../errors/AppError';

interface IPayload {
  sub: string;
}

function ensureAuthenticatedDeliveryman(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(
      token,
      process.env.DELIVERYMAN_TOKEN_HASH!,
    ) as IPayload;

    Object.assign(request, { deliveryman: { id: sub } });

    return next();
  } catch (error) {
    console.log(error);
    throw new AppError('Invalid token', 401);
  }
}

export { ensureAuthenticatedDeliveryman };
