'use server';

import { getUserByEmail } from '@/data/user';
import { db } from '@/lib/db';
import { sendVerificationEmail } from '@/lib/mail';
import { generateVerificationToken } from '@/lib/tokens';
import { RegisterSchema, TRegisterSchema } from '@/schemas/loginFormSchema';
import bcrypt from 'bcryptjs';

export const register = async (data: TRegisterSchema) => {
  const validatedFields = RegisterSchema.safeParse(data);

  await new Promise<void>(resolve => {
    setTimeout(resolve, 1500);
  });

  if (!validatedFields.success) {
    return { error: 'Invalid fields data' };
  }

  const {
    data: { email, name, password },
  } = validatedFields;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) return { error: 'Email already taken! Please use another' };

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(verificationToken.email, verificationToken.token);
  return { success: 'Please check you email and verify the account' };
};
