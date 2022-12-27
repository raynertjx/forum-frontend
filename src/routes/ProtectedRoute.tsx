import React from "react";
import { useAppSelector } from "../helpers/hooks";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
    if (!isLoggedIn) {
        return <Navigate to={"/login"} />;
    }
    return <Outlet />;
};

export default ProtectedRoute;
