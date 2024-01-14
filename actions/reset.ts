'use server';

import { getUserByEmail } from '@/data/user';
import { sendPasswordResetEmail } from '@/lib/mail';
import { generatePasswordResetToken } from '@/lib/tokens';
import { ResetSchema, TResetSchema } from '@/schemas/loginFormSchema';

export const reset = async (data: TResetSchema) => {
  const validatedField = ResetSchema.safeParse(data);

  if (!validatedField.success) {
    return { error: 'Invalid email!' };
  }

  const { email } = validatedField.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: 'No account found with this email!' };
  }

  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );

  return { success: 'Reset email sent! Check your mails' };
};
