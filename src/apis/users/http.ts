import { getUserData } from '@/utils/common';
import { fetchApi } from '../fetchApi';
import { UserType } from '@/types/users.type';

export const GetUsersData = async () => {
  return fetchApi({
    method: 'GET',
    baseURL: process.env.NEXT_PUBLIC_API,
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${getUserData()?.accessToken}`,
    },
    url: '/api/v1/users',
  });
};

export const CreateUserData = async (dataUser: {
  name: string;
  email: string;
}) => {
  return fetchApi({
    method: 'POST',
    baseURL: process.env.NEXT_PUBLIC_API,
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${getUserData()?.accessToken}`,
    },
    url: '/api/v1/users',
    data: dataUser,
  });
};

export const UpdateUserData = async (dataUser: UserType) => {
  return fetchApi({
    method: 'PUT',
    baseURL: process.env.NEXT_PUBLIC_API,
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${getUserData()?.accessToken}`,
    },
    url: `/api/v1/users/${dataUser.id}`,
    data: dataUser,
  });
};

export const DeleteUserData = async (id: string) => {
  return fetchApi({
    method: 'DELETE',
    baseURL: process.env.NEXT_PUBLIC_API,
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${getUserData()?.accessToken}`,
    },
    url: `/api/v1/users/${id}`,
  });
};
