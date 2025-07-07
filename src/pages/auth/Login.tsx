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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="flex flex-col gap-4  items-center">
        <h2>Login</h2>
        <LoginForm onSuccess={handleSuccess} />
        {/* <LoginFormNew onSuccess={handleSuccess} /> */}
      </div>
    </div>
  );
};

export default Login;
