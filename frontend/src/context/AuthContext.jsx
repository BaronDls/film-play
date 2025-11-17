import { createContext, useContext, useState } from "react";
import axios from "axios";
const API = import.meta.env.VITE_API_URL;

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const setTokenHeader = (token) => {
    if (token) {
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  
  const login = async (email, password) => {
    setLoading(true);

    try {
      const res = await axios.post(`${API}user/login`, { email, password });
      const token = res?.data?.token || res?.data?.accessToken || null;
      if (!token) {
        setLoading(false);
        throw new Error("No se recibió token");
      }
      setTokenHeader(token);
      setUser(res.data.user || null);
    } catch (err) {
      setUser(null);
      throw new Error(err?.response?.data?.message || "Error al iniciar sesión");
    }finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setTokenHeader(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
