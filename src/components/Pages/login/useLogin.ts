'use client';

import { loginSuccess, loginFailed } from '@/store/auth.store';
import { getUserData, setStatusLogin, setUserData } from '@/utils/common';
import { auth } from '@/utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authState = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const userData = getUserData();
    if (userData) {
      dispatch(loginSuccess(userData));
    }
  }, []);

  useEffect(() => {
    if (authState.isLoggedIn) {
      router.push('/dashboard');
    }
  }, [authState, router]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user: any = userCredential.user;
      const userData = {
        id: user.id,
        email: user.email,
        name: user.name,
        displayName: user.displayName,
        accessToken: user.accessToken,
      };
      dispatch(loginSuccess(userData));
      setUserData(userData);
      setStatusLogin('true');
      router.push('/dashboard');
    } catch (error) {
      console.log(error);
      dispatch(loginFailed());
    }
  };

  return {
    handleSubmit,
    email,
    setEmail,
    password,
    setPassword,
  };
};

export default useLogin;
