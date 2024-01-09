import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { signIn } from 'next-auth/react';
import React from 'react';

const Social = () => {
  const handleClick = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div>
      <button
        className="border bg-sky-400"
        onClick={() => handleClick('google')}>
        Login with Google
      </button>
      <button
        className="border bg-sky-400"
        onClick={() => handleClick('github')}>
        Login with Github
      </button>
    </div>
  );
};

export default Social;
