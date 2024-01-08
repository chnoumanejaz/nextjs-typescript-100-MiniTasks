'use server';

import { getUserByEmail } from '@/data/user';
import { db } from '@/lib/db';
import { RegisterSchema, TRegisterSchema } from '@/schemas/loginFormSchema';
import bcrypt from 'bcrypt';

export const register = async (data: TRegisterSchema) => {
  console.log(data);

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

  // TODO: send verification email
  // return { success: 'Please check you email and verify the account' };

  return { success: 'Account created successfully' };
};
