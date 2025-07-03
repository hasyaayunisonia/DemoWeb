import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearAuth } from '../../features/auth/authSlice';
import { useAuth } from '../../contexts/AuthContext';

const Dashboard = () => {
  const { logout } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const user = useSelector((state: RootState) => state.auth); // ✅ di sini

  //   console.log("USER:", user);

  const handleClick = (number: number) => {
    switch (number) {
      case 1:
        navigate('/laporan-kerusakan');
        break;
      case 2:
        navigate('/demo');
        break;
      case 3:
        navigate('/shopping-cart');
        break;
      case 4:
        dispatch(clearAuth());
        logout();
        navigate('/');
        break;
      case 5:
        navigate('/dynamic-form');
        break;
      case 6:
        navigate('/feedback-form');
        break;
      case 7:
        navigate('/comment-form');
        break;
      case 8:
        navigate('/upload-form');
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={() => handleClick(1)}>Form</button>
      <br></br>
      <button onClick={() => handleClick(2)}>Demo</button>
      <br></br>
      <button onClick={() => handleClick(3)}>Shopping Cart</button>
      <br></br>
      <button onClick={() => handleClick(5)}>Dynamic Form</button>
      <br></br>
      <button onClick={() => handleClick(6)}>Feedback Form</button>
      <br></br>
      <button onClick={() => handleClick(7)}>Comment Form</button>
      <br></br>
      <button onClick={() => handleClick(8)}>Upload Form</button>
      <br></br>
      <button onClick={() => handleClick(4)}>Logout</button>
    </div>
  );
};

export default Dashboard;
