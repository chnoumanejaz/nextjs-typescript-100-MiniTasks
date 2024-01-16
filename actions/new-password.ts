'use server';

import { getPasswordResetToken } from '@/data/password-reset-token';
import { getUserByEmail } from '@/data/user';
import { db } from '@/lib/db';
import {
  NewPasswordSchema,
  TNewPasswordSchema,
} from '@/schemas/loginFormSchema';
import bcrypt from 'bcryptjs';

export const newPassword = async (
  data: TNewPasswordSchema,
  token?: string | null
) => {
  if (!token) {
    return { error: 'The token is missing!' };
  }

  const validatedField = NewPasswordSchema.safeParse(data);
  if (!validatedField.success) {
    return { error: 'Please provide a password!' };
  }

  const existingToken = await getPasswordResetToken(token);
  if (!existingToken) return { error: 'The token is not correct!' };

  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) return { error: 'The token is no longer valid!' };

  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser)
    return { error: 'This email is not associated with any account!' };

  const { password } = validatedField.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  });

  await db.passwordResetToken.delete({
    where: { id: existingToken.id },
  });

  return { success: 'The password reset successfully!' };
};
