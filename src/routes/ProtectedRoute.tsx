import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "../helpers/hooks";

const ProtectedRoute: React.FC = () => {
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
    if (!isLoggedIn) {
        return <Navigate to={"/login"} />;
    }
    return <Outlet />;
};

export default ProtectedRoute;
