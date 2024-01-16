'use client';
import React, { useState, useTransition } from 'react';
import CardWrapper from './CardWrapper';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  NewPasswordSchema,
  TNewPasswordSchema,
} from '@/schemas/loginFormSchema';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import FormError from '../FormError';
import FormSuccess from '../FormSuccess';
import { login } from '@/actions/login';
import Link from 'next/link';
import { reset } from '@/actions/reset';
import { useRouter, useSearchParams } from 'next/navigation';
import { newPassword } from '@/actions/new-password';

const NewPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const router = useRouter();

  const form = useForm<TNewPasswordSchema>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: '',
    },
  });

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  function onSubmit(data: TNewPasswordSchema) {
    setError('');
    setSuccess('');

    startTransition(() => {
      newPassword(data, token).then(data => {
        setError(data?.error);
        setSuccess(data?.success);
        form.reset();
      });
    });
  }

  if (!token) return router.push('/auth/login');

  return (
    <CardWrapper
      headerLabel="Create a new password"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login">
      {/* Login form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {/* Email */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="********"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? 'Confirming...' : 'Confirm new password'}
            {/* TODO:  add loading */}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default NewPasswordForm;
