import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./NavBar";

const ProtectedRoute = ({ user, redirectPath }) => {
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
