import { setItem } from "@/helper";
import { LoginForm } from "@/types";
import { axiosClient } from "./axiosClient";

// export default {
//     async login(loginFrom: LoginForm): Promise<User> {
//         const res = await axiosClient.post(
//             "/auth/login",
//             JSON.stringify(loginFrom)
//         );

//         console.log('DATA: ', res.data);


//         if (res.status == 201 && res.data.accessToken) {


//             console.log("Token Received: ", res.data.accessToken);

//             setItem("user", JSON.stringify(res.data));
//             return true;
//         }
//         return false;
//     },
// }


// import axios from "axios";

// const API_URL = "http://localhost:8080/api/auth/";

const login = async (loginFrom: LoginForm) => {
    return axiosClient.post(
        "/auth/login",
        JSON.stringify(loginFrom)
    );

};

const authService = {
    login,
};

export default authService;