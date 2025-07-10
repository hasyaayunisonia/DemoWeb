// components/LoginForm.tsx
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
// import { setAuth } from "../../../features/auth/authSlice";
import { Button, TextField } from '@mui/material';
// import { loginUser } from "../../../../services/authService";
import { loginUser } from '../../../services/authService';
import { motion } from 'framer-motion';

type FormValues = {
  username: string;
  password: string;
};

type Props = {
  onSuccess: (token: string, username: string) => void;
};

const LoginForm: React.FC<Props> = ({ onSuccess }) => {
  // console.log("Props LoginForm:", props); // 🔍 log props
  // const { onSuccess } = props;
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
      <motion.button
        type="submit"
        whileHover={isSubmitting ? {} : { scale: 1.05, boxShadow: '0px 0px 8px rgba(0,0,0,0.3)' }}
        whileTap={isSubmitting ? {} : { scale: 0.95 }}
        transition={{ stiffness: 300 }}
        className={`bg-blue-500 text-white px-4 py-2 rounded 
  ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
        disabled={isSubmitting}
        style={{ width: '100px' }}
      >
        {isSubmitting ? 'Loading...' : 'Login'}
      </motion.button>
    </form>
  );
};

export default LoginForm;
