import Link from 'next/link';
import React from 'react';

const AuthErrorPage = () => {
  return (
    <div>
      <h2>An error occured</h2>
      <Link href="/auth/login">Go home</Link>
    </div>
  );
};

export default AuthErrorPage;
