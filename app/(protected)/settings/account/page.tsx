'use client';
import { logout } from '@/actions/logout';
import { settings } from '@/actions/settings';
import FormError from '@/components/FormError';
import FormSuccess from '@/components/FormSuccess';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useCurrentUser } from '@/hooks/auth/useCurrentUser';
import { SettingSchema, TSettingSchema } from '@/schemas/loginFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';

const AccountSettingPage = () => {
  const [isPending, startTransition] = useTransition();
  const user = useCurrentUser();
  const { update } = useSession();

  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const form = useForm<TSettingSchema>({
    resolver: zodResolver(SettingSchema),
    defaultValues: {
      name: user?.name || undefined,
      email: user?.email || undefined,
      password: undefined,
      newPassword: undefined,
    },
  });

  const handleUpdate = (data: TSettingSchema) => {
    startTransition(() => {
      settings(data)
        .then(data => {
          if (data.error) {
            setError(data.error);
          } else {
            setSuccess(data.success);
            update();
          }
        })
        .catch(() => setError('Something went wrong! try again'));
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-2xl text-center font-mono">{user?.name}</h2>

      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(handleUpdate)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Name:</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        placeholder="Enter a name"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            {user?.isOAuth === false && (
              <>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Email:</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter a new email"
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Password:</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter old password"
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>New Password:</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter new password"
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </>
            )}
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" disabled={isPending}>
            Update
          </Button>
        </form>
      </Form>
      <Button onClick={() => logout()} type="submit" disabled={isPending}>
        Log out
      </Button>
    </div>
  );
};

export default AccountSettingPage;
