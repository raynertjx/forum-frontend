import axios from "axios";
import.meta.env.MODE

const Api = () => {
    const api_url: string = "https://forum-api-6llp.onrender.com";
    const instance = axios.create({
        withCredentials: true,
        baseURL: api_url,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
    });

    instance.interceptors.request.use(
		function (config) {
			const token = localStorage.getItem("token");
			if (token) {
				config.headers!["Authorization"] = "Bearer " + token;
			}
			return config;
		},
		function (error) {
			return Promise.reject(error);
		}
	);

    return instance;
};

export default Api;
