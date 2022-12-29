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
    get_threads_from_cat: (category: string) => {
        return Api().get(`index_category/${category}`);
    },
    create_thread: (params: {
        title: string | undefined;
        content: string | undefined;
        category: string | undefined;
    }) => {
        return Api().post("forum_threads", params);
    },
    update_thread: (params: {
        title: string | undefined;
        content: string | undefined;
        category: string | undefined;
        thread_id: string | undefined;
    }) => {
        const { thread_id, ...newParams } = params;
        return Api().patch(`forum_threads/${thread_id}`, newParams);
    },
    delete_thread: (params: { thread_id: string | undefined }) => {
        const { thread_id } = params;
        return Api().delete(`forum_threads/${thread_id}`);
    },
};
