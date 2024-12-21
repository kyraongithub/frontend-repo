'use client';

import LoginForm from '@/components/Container/LoginForm';
import React from 'react';
import useLogin from './useLogin';

const LoginView = () => {
  const { handleSubmit, email, setEmail, password, setPassword } = useLogin();

  return (
    <LoginForm
      handleSubmit={handleSubmit}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
    />
  );
};

export default LoginView;
