import useUsers from '@/apis/users/state';
import { logout } from '@/store/auth.store';
import { setSelectedUser } from '@/store/user.store';
import { UserType } from '@/types/users.type';
import { deleteStatusLogin, deleteUserData } from '@/utils/common';
import { auth } from '@/utils/firebase';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const useDashboard = () => {
  const { getUsers, deleteUser } = useUsers();

  const [isOpenForm, setisOpenForm] = useState(false);
  const { isLoading } = useSelector((state: any) => state.api);
  const dispatch = useDispatch();
  const router = useRouter();

  const { users } = useSelector((state: any) => state.users);

  useEffect(() => {
    if (users === undefined) getUsers();
  }, [users]);

  const logoutHandler = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will logged out from our system!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await auth.signOut();
        deleteUserData();
        deleteStatusLogin();
        dispatch(logout());
        router.push('/');
      }
    });
  };

  const handleSelectUser = (user: UserType) => {
    dispatch(setSelectedUser(user));
    setisOpenForm(true);
  };

  const handleDeleteUser = (id: string) => {
    Swal.fire({
      title: 'Are you sure delete data?',
      text: 'Deleted data cannot restored!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteUser(id);
        await getUsers(); // refresh data
      }
    });
  };

  return {
    users,
    isLoading,
    logoutHandler,
    handleDeleteUser,
    handleSelectUser,
    isOpenForm,
    setisOpenForm,
  };
};

export default useDashboard;
