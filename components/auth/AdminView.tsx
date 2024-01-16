'use client';
import { useCurrentUser } from '@/hooks/auth/useCurrentUser';
import { UserRole } from '@prisma/client';
import React from 'react';
import FormError from '../FormError';

interface AdminViewProps {
  children: React.ReactNode;
}

const AdminView = ({ children }: AdminViewProps) => {
  const role = useCurrentUser()?.role;

  if (role !== UserRole.ADMIN) {
    return <FormError message="You dont have admin access" />;
  }

  return <>{children}</>;
};

export default AdminView;
