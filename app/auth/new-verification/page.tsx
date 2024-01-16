'use client';
import { newVerification } from '@/actions/new-verification';
import FormError from '@/components/FormError';
import FormSuccess from '@/components/FormSuccess';
import { useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

const EmailVerificationPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const onSubmit = useCallback(() => {
    if (!token) {
      setError('Verification token is missing!');
      return;
    }

    newVerification(token)
      .then(data => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError('Something went wrong!');
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div>
      <h2>Email Verification Page</h2>
      verifying your account
      <FormSuccess message={success} />
      <FormError message={error} />
    </div>
  );
};

export default EmailVerificationPage;
