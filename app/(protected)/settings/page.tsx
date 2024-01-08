import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import React from 'react';

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div>
      Session: {JSON.stringify(session)}
      <form
        action={async () => {
          'use server';
          await signOut();
        }}>
        <Button type="submit">Log out</Button>
      </form>
    </div>
  );
};

export default SettingsPage;
