import { apiError, apiSuccess, startLoading } from '@/store/api.store';
import { getUserData } from '@/utils/common';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  CreateUserData,
  DeleteUserData,
  GetUsersData,
  UpdateUserData,
} from './http';
import { UserType } from '@/types/users.type';
import { setUsers } from '@/store/user.store';

const useUsers = () => {
  const user = getUserData();
  const dispatch = useDispatch();

  const getUsers = useCallback(async () => {
    dispatch(startLoading());
    try {
      const { data } = await GetUsersData();
      dispatch(setUsers(data?.users));
      dispatch(apiSuccess());
    } catch (error) {
      dispatch(apiError(error));
    }
  }, []);

  const createUser = useCallback(
    async (params: { name: string; email: string }) => {
      dispatch(startLoading());
      try {
        await CreateUserData(params);
        await getUsers(); // refresh data
        dispatch(apiSuccess());
      } catch (error) {
        dispatch(apiError(error));
      }
    },
    [user]
  );

  const updateUser = useCallback(
    async (params: UserType) => {
      dispatch(startLoading());
      try {
        await UpdateUserData(params);
        await getUsers(); // refresh data
        dispatch(apiSuccess());
      } catch (error) {
        dispatch(apiError(error));
      }
    },
    [user]
  );
  const deleteUser = useCallback(
    async (id: string) => {
      dispatch(startLoading());
      try {
        await DeleteUserData(id);
        await getUsers(); // refresh data
        dispatch(apiSuccess());
      } catch (error) {
        dispatch(apiError(error));
      }
    },
    [user]
  );

  return { getUsers, createUser, updateUser, deleteUser };
};

export default useUsers;
