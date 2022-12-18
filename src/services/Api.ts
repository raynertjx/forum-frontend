import axios from "axios";

const Api = () => {
    const api_url: string = "http://localhost:3000";
    const instance = axios.create({
        withCredentials: true,
        baseURL: api_url,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Credentials' : true,
            },
    });

    // instance.interceptors.request.use(
    //     (config) => {
    //         const token = localStorage.getItem("token");
    //         if (token) {
    //             config.headers["Authorization"] = "bearer " + token;
    //         }
    //         return config;
    //     },
    //     (error) => {
    //         return Promise.reject(error);
    //     }
    // );
    return instance;
};

export default Api;
