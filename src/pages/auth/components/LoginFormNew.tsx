// components/LoginForm.tsx
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
// import { setAuth } from "../../../features/auth/authSlice";
import { Button, TextField } from '@mui/material';
// import { loginUser } from "../../../../services/authService";
import { loginUser } from '../../../services/authService';

type FormValues = {
  username: string;
  password: string;
};

type Props = {
  onSuccess: (token: string, username: string) => void;
};

const LoginFormNew = (props: Props) => {
  console.log('Props LoginForm:', props); // 🔍 log props
  const { onSuccess } = props;
  console.log('Apakah onSuccess ada?', onSuccess);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async data => {
    try {
      const token = await loginUser(data.username, data.password);
      console.log('Token boz:', token);

      console.log('Apakah onSuccess ada?', onSuccess);

      if (token) {
        onSuccess?.(token, data.username);
        // dispatch(setAuth({ token, username: "admin" }));
        // navigate("/dashboard");
      } else {
        console.warn('Login gagal: token tidak ditemukan');
      }
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Username"
        {...register('username', { required: 'Username is required' })}
        error={!!errors.username}
        helperText={errors.username?.message}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        {...register('password', { required: 'Password is required' })}
        error={!!errors.password}
        helperText={errors.password?.message}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" disabled={isSubmitting}>
        Login
      </Button>
    </form>
  );
};

export default LoginFormNew;
