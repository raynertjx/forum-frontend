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

export const categoryServices = {
    get_categories: () => {
        return Api().get("forum_categories");
    },
    update_category: (params: {
        id: number | undefined;
        latest_thread: string | undefined;
        thread_count: number | undefined;
    }) => {
        const { id } = params;
        return Api().patch(`forum_categories/${id}`, params);
    },
};

export const threadServices = {
    get_threads: () => {
        return Api().get("forum_threads");
    },
    get_threads_from_cat: (forum_category_id: number) => {
        return Api().get(`index_category/${forum_category_id}`);
    },
    create_thread: (params: {
        title: string | undefined;
        content: string | undefined;
        forum_category_id: number | undefined;
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

export const commentServices = {
    get_comments_from_thread: (forum_thread_id: number) => {
        return Api().get(`index_thread/${forum_thread_id}`);
},
    create_comment: (params: {
        content: string | undefined;
        forum_thread_id: number | undefined;
    }) => {
        return Api().post("forum_comments", params);
    },
    update_comment: (params: {
        content: string | undefined;
        comment_id: string | undefined;
    }) => {
        const { comment_id, ...newParams } = params;
        return Api().patch(`forum_comments/${comment_id}`, newParams);
    },
    delete_comment: (params: { comment_id: string | undefined }) => {
        const { comment_id } = params;
        return Api().delete(`forum_comments/${comment_id}`);
    },
};
