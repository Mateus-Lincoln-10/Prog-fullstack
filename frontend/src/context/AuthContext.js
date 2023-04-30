import { createContext, useMemo, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await api.post("/login", { email, password });
      const { accessToken } = response.data;
      localStorage.setItem("accessToken", accessToken);
      setUser({ accessToken });
    } catch (error) {
        throw new Error("Email ou senha inválidos");
    }
  };

  const isLogged = () => {
    return localStorage.getItem("accessToken");
  }

  const authContextValue = useMemo(() => ({ user, login, isLogged }), [user]);
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};