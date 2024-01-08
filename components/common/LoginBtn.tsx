import React, { FC } from 'react';
import { useRouter } from 'next/navigation';

interface LoginBtnProps {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}

const LoginBtn: FC<LoginBtnProps> = ({
  children,
  asChild,
  mode = 'redirect',
}) => {
  const router = useRouter();

  function handleLogin() {
    router.push('/auth/login');
  }

  if (mode === 'modal') return <span>Modal will be here</span>;
  return <span onClick={handleLogin}>{children}</span>;
};

export default LoginBtn;
