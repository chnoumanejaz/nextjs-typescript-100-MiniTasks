import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import LoginForm from '../auth/LoginForm';

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

  if (mode === 'modal')
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="p-0 w-auto bg-transparent border-none">
          <LoginForm />
        </DialogContent>
      </Dialog>
    );

  return <span onClick={handleLogin}>{children}</span>;
};

export default LoginBtn;
