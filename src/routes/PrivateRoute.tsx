import { useAppSelector } from "@/hooks";
import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = (props: any) => {
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);


    // isAuthenticated
    // const isAuthenticated = useSelector(selectUser);
    //   const token = localStorage.getItem("auth");

    //   console.log("token", token);
    console.log("Logged in: ", isAuthenticated);

    return <>{isAuthenticated ? <Outlet {...props} /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
