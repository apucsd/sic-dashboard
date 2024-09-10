import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isLoggedIn } from "../utils/utils";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  if (!!isLoggedIn()) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
