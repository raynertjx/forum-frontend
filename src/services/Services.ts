import Api from "./Api";

const Services = {
    login: (params: {
        username: string | undefined;
        password: string | undefined;
    }) => {
        return Api().post("login", params);
    },
    signup: (params: {
        username: string | undefined;
        password: string | undefined;
    }) => {
        return Api().post("signup", params);
    },
    logout: () => {
        return Api().post("logout");
    },
    authenticate: () => {
        return Api().get("authenticate");
    },
    get_threads: () => {
        return Api().get("forum_threads");
    },
};

export default Services;