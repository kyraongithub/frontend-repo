import useUsers from '@/apis/users/state';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { UseFormProps } from './Form.interface';

const useForm = ({ setisOpenForm }: UseFormProps) => {
  const [userId, setuserId] = useState('');
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const { createUser, updateUser } = useUsers();

  const { selectedUser } = useSelector((state: any) => state.users);

  useEffect(() => {
    if (selectedUser) {
      setuserId(selectedUser.id);
      setname(selectedUser.name);
      setemail(selectedUser.email);
    }
  }, [selectedUser]);

  const handleAddUser = async () => {
    await createUser({
      name,
      email,
    });
  };

  const handleUpdateUser = async () => {
    await updateUser({
      id: userId,
      name,
      email,
    });
  };

  const handleSaveUser = async () => {
    if (userId) {
      handleUpdateUser();
    } else {
      handleAddUser();
    }
    setisOpenForm(false);
  };

  return {
    name,
    setname,
    email,
    setemail,
    handleSaveUser,
  };
};

export default useForm;
