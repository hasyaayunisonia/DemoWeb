import { createContext, useContext, useState } from "react";

type AuthType = {
  token: string | null;
  username: string | null;
  login: (username: string, token: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [username, setUsername] = useState<string | null>(
    localStorage.getItem("username")
  );

  const login = (username: string, token: string) => {
    setToken(token);
    setUsername(username);
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    console.log("Login berhasil!");
  };

  const logout = () => {
    setToken(null);
    setUsername(null);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    console.log("Logout berhasil!");
  };

  return (
    <AuthContext.Provider value={{ token, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

// import { createContext } from "react";
// import { useSelector } from "react-redux";
// import type { RootState } from "../app/store";

// export const AuthContext = createContext(null);
// export const useAuth = () => useSelector((state: RootState) => state.auth);
