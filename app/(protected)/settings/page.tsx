'use client';

import { logout } from '@/actions/logout';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/hooks/auth/useCurrentUser';

const SettingsPage = () => {
  const user = useCurrentUser();

  return (
    <div>
      User: {JSON.stringify(user)}
      <Button onClick={() => logout()} type="submit">
        Log out
      </Button>
    </div>
  );
};

export default SettingsPage;
