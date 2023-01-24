import axios from "axios";
import.meta.env.MODE

const Api = () => {
    const api_url: string = "https://forum-backend1.onrender.com";
    const instance = axios.create({
        withCredentials: true,
        baseURL: api_url,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
    });

    return instance;
};

export default Api;
