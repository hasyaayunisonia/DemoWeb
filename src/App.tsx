import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MuiTabs from "./components/MuiTabs";
import MuiModal from "./components/MuiModal";
import LoginForm from "./pages/auth/components/LoginForm";
import FormLaporanKerusakan from "./pages/FormLaporanKerusakan";
import AppRoutes from "./routes/AppRoutes";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./app/store";
import { setAuth } from "./features/auth/authSlice";
import AuthMiddleware from "./middleware/AuthMiddleware";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const handleLoginSuccess = (token: string) => {
    console.log("Login berhasil! Token:", token);
    // Misal: Simpan token ke localStorage
    localStorage.setItem("token", token);
    // Redirect atau update state juga bisa di sini
  };

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div>
        {/* <MuiTabs /> */}
        {/* <MuiModal /> */}
        {/* <LoginForm onSuccess={handleLoginSuccess} /> */}
        {/* <FormLaporanKerusakan /> */}
        <AuthMiddleware />
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
