import { db } from '@/lib/db';

export const getUserAccountById = async (userId: string) => {
  try {
    const account = await db.account.findFirst({ where: { userId } });

    return account;
  } catch (error) {
    return null;
  }
};
