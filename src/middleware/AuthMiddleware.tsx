import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../features/auth/authSlice";
import type { RootState } from "../app/store";

const AuthMiddleware = () => {
  const dispatch = useDispatch();
  const username = useSelector((state: RootState) => state.auth.username);
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");

    if (storedToken && storedUsername && (!token || !username)) {
      dispatch(setAuth({ token: storedToken, username: storedUsername }));
    }
  }, [token, username, dispatch]);

  return null;
};

export default AuthMiddleware;
