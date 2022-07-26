import { setItem } from "@/helper";
import { axiosClient } from "./axiosClient";

export default {
    async login(username: string, password: string): Promise<boolean> {
        const res = await axiosClient.post(
            "/auth/login",
            JSON.stringify({ username, password })
        );

        if (res.status == 201 && res.data.accessToken) {

            console.log("Token Received: ", res.data.accessToken);

            setItem("user", res.data);
            return true;
        }
        return false;
    },
}
