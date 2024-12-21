'use client';

import React from 'react';
import useForm from './useForm';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { UserFormProps } from './Form.interface';

const UserForm = (props: UserFormProps) => {
  const { isOpenForm, setisOpenForm } = props;
  const { name, setname, email, setemail, handleSaveUser } = useForm({
    setisOpenForm,
  });
  return (
    <Dialog open={isOpenForm} onClose={() => setisOpenForm(false)}>
      <DialogTitle>User Data</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <TextField
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setisOpenForm(false)}>Cancel</Button>
        <Button onClick={handleSaveUser}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserForm;
