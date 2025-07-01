// components/LoginForm.tsx
import React from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import { Button, TextField } from "@mui/material";
import { loginUser } from "../../../services/authService";

type FormValues = {
  username: string;
  password: string;
};

type Props = {
  onSuccess?: (token: string) => void;
};

const LoginForm: React.FC<Props> = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const token = await loginUser(data.username, data.password);
    onSuccess?.(token);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Username"
        {...register("username", { required: "Username is required" })}
        error={!!errors.username}
        helperText={errors.username?.message}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        {...register("password", { required: "Password is required" })}
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

export default LoginForm;
