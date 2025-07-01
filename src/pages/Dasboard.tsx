import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearAuth } from "../features/auth/authSlice";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const user = useSelector((state: RootState) => state.auth); // ✅ di sini

  //   console.log("USER:", user);

  const handleLogout = () => {
    dispatch(clearAuth());
    logout();
    navigate("/");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
