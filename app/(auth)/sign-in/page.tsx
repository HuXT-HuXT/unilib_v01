'use client';

import AuthForm from '@/components/AuthForm';
import { signInWithCredentials } from '@/lib/actions/auth';
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
    onSubmit={signInWithCredentials}
  />
);

export default page;