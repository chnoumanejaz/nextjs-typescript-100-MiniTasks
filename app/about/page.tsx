import FormSuccess from '@/components/FormSuccess';
import AdminView from '@/components/auth/AdminView';
import React from 'react';

const AboutPage = () => {
  return (
    <AdminView>
      <FormSuccess message=" Yes now you are able because you are an admin " />
    </AdminView>
  );
};

export default AboutPage;
