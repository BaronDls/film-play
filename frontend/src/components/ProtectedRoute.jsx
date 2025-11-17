import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./NavBar";

const ProtectedRoute = ({ user, redirectPath }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
