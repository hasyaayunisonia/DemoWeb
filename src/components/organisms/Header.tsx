import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../contexts/AuthContext';
import { clearAuth } from '@/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/atoms/ui/button';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearAuth());
    logout();
    navigate('/');
  };
  return (
    <header className="w-full p-4 bg-gray-100 flex justify-between items-center sticky top-0 z-50">
      <div className="flex gap-4">
        <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'text-blue-500' : ''}>
          {location.pathname === '/dashboard' ? 'Welcome To Dashboard' : 'Back To Dashboard'}
        </Link>
      </div>
      <Button onClick={handleLogout}>Logout</Button>
    </header>
  );
};

export default Header;
