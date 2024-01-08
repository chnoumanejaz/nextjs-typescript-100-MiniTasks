'use server';

import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { LoginSchema, TLoginSchema } from '@/schemas/loginFormSchema';
import { AuthError } from 'next-auth';

export const login = async (data: TLoginSchema) => {
  console.log(data);

  const validatedFields = LoginSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: 'Invalid fields data' };
  }

  const {
    data: { email, password },
  } = validatedFields;

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid email or password!' };
        default:
          return { error: 'Oh, Something went wrong!' };
      }
    }

    throw error;
  }

  return { success: 'Logged in successfully!' };
};
