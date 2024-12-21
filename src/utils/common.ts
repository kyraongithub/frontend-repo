import { UserType } from '@/types/users.type';
import { LOGIN_STATUS, USER_DATA } from '@/constants/common';
import { isBrowser } from '@/utils/isBrowser';

export const setUserData = (data: UserType) => {
  if (isBrowser()) {
    localStorage.setItem(USER_DATA, JSON.stringify(data));
  }
};

export const getUserData = (): UserType | any => {
  if (isBrowser()) {
    const data =
      typeof localStorage !== 'undefined'
        ? localStorage.getItem(USER_DATA)
        : null;

    return data ? (JSON.parse(data) as UserType) : null;
  }

  return null;
};

export const deleteUserData = () => {
  if (isBrowser()) {
    localStorage.removeItem(USER_DATA);
    localStorage.removeItem(LOGIN_STATUS);
  }
};

export const setStatusLogin = (data: string) => {
  if (isBrowser()) {
    localStorage.setItem(LOGIN_STATUS, data);
  }
};

export const getStatusLogin = (): UserType | any => {
  if (isBrowser()) {
    const data =
      typeof localStorage !== 'undefined'
        ? localStorage.getItem(LOGIN_STATUS)
        : null;

    return data ? data : null;
  }

  return null;
};

export const deleteStatusLogin = () => {
  if (isBrowser()) {
    localStorage.removeItem(LOGIN_STATUS);
  }
};
