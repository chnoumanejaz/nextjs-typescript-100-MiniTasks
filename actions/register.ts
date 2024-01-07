'use server';

import { RegisterSchema, TRegisterSchema } from '@/schemas/loginFormSchema';

export const register = async (data: TRegisterSchema) => {
  console.log(data);

  const validatedFields = RegisterSchema.safeParse(data);

  await new Promise<void>(resolve => {
    setTimeout(resolve, 1500);
  });

  if (!validatedFields.success) {
    return { error: 'Invalid fields data' };
  }

  return { success: 'Please check you email and verify the account' };
};
