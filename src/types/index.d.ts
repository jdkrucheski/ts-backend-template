export {};

declare global {
  namespace Express {
    interface Request {
      uid?: string;
      role?: string;
    }
  }
}

export interface JwtPayload {
  uid: string;
  role: string;
}
