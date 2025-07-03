import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuth } from '../../features/auth/authSlice';
import LoginForm from './components/LoginForm';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSuccess = (token: string, username: string) => {
    dispatch(setAuth({ token, username }));
    login(username, token);
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onSuccess={handleSuccess} />
      {/* <LoginFormNew onSuccess={handleSuccess} /> */}
    </div>
  );
};

export default Login;
