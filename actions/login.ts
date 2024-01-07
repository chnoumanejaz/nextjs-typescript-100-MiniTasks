'use server';

import { LoginSchema, TLoginSchema } from '@/schemas/loginFormSchema';

export const login = async (data: TLoginSchema) => {
  console.log(data);

  const validatedFields = LoginSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: 'Invalid fields data' };
  }

  return { success: 'Logged in successfully!' };
};
