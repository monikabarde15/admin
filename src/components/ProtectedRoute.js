import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  // agar login nahi hai to redirect
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // warna nested routes dikhaye
  return <Outlet />;
};

export default ProtectedRoute;
