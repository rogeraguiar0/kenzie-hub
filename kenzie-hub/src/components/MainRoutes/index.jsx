import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

function MainRoutes() {
  const { user } = useContext(UserContext);

  return user ? Outlet : <Navigate to="/" replace />;
}

export default MainRoutes;
