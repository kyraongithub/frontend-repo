'use client';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { LoginFormProps } from './Login.interface';

const LoginForm = (props: LoginFormProps) => {
  const { handleSubmit, email, setEmail, password, setPassword } = props;

  return (
    <Box
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '400px',
      }}
      m={'0 auto'}
      p={'32px'}
      display={'flex'}
      gap={'16px'}
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
