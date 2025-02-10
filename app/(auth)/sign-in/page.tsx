'use client';

import AuthForm from '@/components/AuthForm';
import { singInSchema } from '@/lib/validation';
import React from 'react';

const page = () => (
  <AuthForm
    type='SIGN_IN'
    schema={singInSchema}
    defaultValues={{
      email: '',
      password: '',
    }}
    onSubmit={() => {}}
  />
);

export default page;