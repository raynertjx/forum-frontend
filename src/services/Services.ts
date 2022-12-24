import Api from "./Api";

export const authServices = {
    login: (params: {
        username: string | undefined;
        password: string | undefined;
    }) => {
        return Api().post("login", params);
    },
    signup: (params: {
        username: string | undefined;
        password: string | undefined;
        password_confirmation: string | undefined;
    }) => {
        return Api().post("signup", params);
    },
    logout: () => {
        return Api().post("logout");
    },
    whoami: () => {
        return Api().get("whoami");
    },
};

export const threadServices = {
    get_threads: () => {
        return Api().get("forum_threads");
    },
};
