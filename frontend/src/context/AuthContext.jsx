import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const API = import.meta.env.VITE_API_URL;

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const setTokenHeader = (token) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const userData = localStorage.getItem("user");

        if (token) {
          setTokenHeader(token);
          if (userData) {
            try {
              setUser(JSON.parse(userData));
            } catch (err) {
              localStorage.removeItem("user");
              setUser(null);
            }
          } else {
            setUser(null);
          }
        } else {
          setUser(null);
        }
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await axios.post(`${API}user/login`, { email, password });
      const token = res?.data?.token || res?.data?.accessToken;
      if (!token) throw new Error("No se recibió token");
      const userInfo = res.data.user;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userInfo));

      setTokenHeader(token);
      setUser(userInfo);
      return userInfo;
    } catch (err) {
      setUser(null);
      throw new Error(err?.response?.data?.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
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
