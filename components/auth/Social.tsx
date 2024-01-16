import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { signIn } from 'next-auth/react';
import React from 'react';
import { Button } from '../ui/button';

const Social = () => {
  const handleClick = (provider: 'google') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div>
      <Button variant="outline" onClick={() => handleClick('google')}>
        Login with Google
      </Button>
    </div>
  );
};

export default Social;
