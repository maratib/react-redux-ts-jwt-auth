import { getLocalUser } from "@/helper";
import { useAppSelector } from "@/store";
import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = (props: any) => {
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

    const user = getLocalUser();
    console.log("Logged in: ", isAuthenticated);
    console.log("User in: ", user?.accessToken);

    return <>{isAuthenticated ? <Outlet {...props} /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
