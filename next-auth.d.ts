import { DefaultSession } from 'next-auth';
import { JWT } from '@auth/core/jwt';
import { UserRole } from '@prisma/client';

export type ExtendedUser = DefaultSession['user'] & {
  role: UserRole;
  isOAuth: boolean;
};

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;
  }
}
