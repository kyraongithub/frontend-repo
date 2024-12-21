'use client';

import useUsers from '@/apis/users/state';
import PrivateRoute from '@/components/layouts/PrivateRoute';
import { UserType } from '@/types/users.type';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect } from 'react';
import useDashboard from './useDashboard';
import { Backdrop, Box, Button, CircularProgress } from '@mui/material';
import UserForm from '@/components/Container/UserForm';

const DashboardView = () => {
  const { getUsers } = useUsers();

  useEffect(() => {
    getUsers();
  }, []);

  const {
    users = [],
    isLoading,
    logoutHandler,
    handleSelectUser,
    handleDeleteUser,
    isOpenForm,
    setisOpenForm,
  } = useDashboard();

  return (
    <PrivateRoute>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        p={2}
      >
        <h1>KYRA USER MANAGEMENT</h1>
        <Box display={'flex'} gap={2}>
          <Button
            onClick={() => setisOpenForm(true)}
            disabled={isLoading}
            variant="contained"
            color="primary"
          >
            Add user
          </Button>
          <Button onClick={logoutHandler} variant="contained" color="error">
            Logout
          </Button>
        </Box>
      </Box>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <UserForm isOpenForm={isOpenForm} setisOpenForm={setisOpenForm} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Created At</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user: UserType) => (
              <TableRow
                key={user.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">
                  {new Date(
                    user.created_at._seconds * 1000
                  ).toLocaleDateString()}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}
                >
                  <Button
                    onClick={() => handleSelectUser(user)}
                    disabled={isLoading}
                    variant="contained"
                    color="warning"
                  >
                    Edit
                  </Button>
                  <Button
                    disabled={isLoading}
                    onClick={() => handleDeleteUser(user.id)}
                    variant="contained"
                    color="error"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PrivateRoute>
  );
};

export default DashboardView;
