import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import { useAuth } from "../context/AuthContext";
import PropTypes from "prop-types";

const ProtectedRoute = ({redirectPath}) => {
  const { loading, user } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary-default px-4">
        <div className="text-white text-lg">Cargando...</div>
      </div>
    );
  }
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

ProtectedRoute.propTypes = {
  redirectPath: PropTypes.string,
};

ProtectedRoute.defaultProps = {
  redirectPath: "/login",
};

export default ProtectedRoute;
