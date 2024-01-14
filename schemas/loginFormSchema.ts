import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(2, { message: 'Please enter a password' }),
});

export type TLoginSchema = z.infer<typeof LoginSchema>;

export const ResetSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
});

export type TResetSchema = z.infer<typeof ResetSchema>;

export const NewPasswordSchema = z.object({
  password: z
    .string()
    .min(8, { message: 'Minimun length should be 8 characters' }),
});

export type TNewPasswordSchema = z.infer<typeof NewPasswordSchema>;

// TODO: change the file name to -> auth schema

export const RegisterSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z
    .string()
    .min(8, { message: 'Minimun length should be 8 characters' }),
  name: z.string().min(1, {
    message: 'Name is required',
  }),
});

export type TRegisterSchema = z.infer<typeof RegisterSchema>;
