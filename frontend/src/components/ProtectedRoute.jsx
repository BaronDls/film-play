import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ( redirectPath ) => {
  const { loading, user } = useAuth();
  if (loading )  return  <div>Cargando...</div>;
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
