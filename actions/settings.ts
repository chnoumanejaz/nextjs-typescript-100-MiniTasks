'use server';

import { auth } from '@/auth';
import { getUserByEmail, getUserById } from '@/data/user';
import { db } from '@/lib/db';
import { sendVerificationEmail } from '@/lib/mail';
import { generateVerificationToken } from '@/lib/tokens';
import { TSettingSchema } from '@/schemas/loginFormSchema';
import bcrypt from 'bcryptjs';

export const settings = async (data: TSettingSchema) => {
  const user = await auth().then(data => data?.user);
  if (!user) return { error: 'Unauthorized access' };

  const dbUser = await getUserById(user.id);
  if (!dbUser) return { error: 'Unauthorized access' };

  if (user.isOAuth) {
    data.email = undefined;
    data.password = undefined;
    data.newPassword = undefined;
  }

  if (data.password && data.newPassword && dbUser.password) {
    const passwordMatch = await bcrypt.compare(data.password, dbUser.password);

    if (!passwordMatch) {
      return { error: 'The  old password is not correct!' };
    }

    const hashedPassword = await bcrypt.hash(data.newPassword, 10);
    data.password = hashedPassword;
    data.newPassword = undefined;
  }

  if (data.email && data.email !== user.email) {
    const existingUser = await getUserByEmail(data.email);

    if (existingUser && existingUser.id !== user.id) {
      return { error: 'This email is already in use!' };
    }

    const verificationToken = await generateVerificationToken(data.email);
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { success: 'Verification email sent! Please check your inbox' };
  }

  await db.user.update({
    where: { id: dbUser.id },
    data,
  });

  return { success: 'Settings Updated successfully!' };
};
