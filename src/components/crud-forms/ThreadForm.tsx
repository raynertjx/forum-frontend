import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { threadServices } from "../../services/Services";
import { useAppDispatch } from "../../helpers/hooks";
import { threadActions } from "../../store/thread-slice";

const ThreadForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const currentForumCategory = state["category"];
    const titleInput = useRef<HTMLInputElement | null>(null);
    const contentInput = useRef<HTMLInputElement | null>(null);

    const formSubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        await threadServices
            .create_thread({
                title: titleInput.current?.value,
                content: contentInput.current?.value,
                category: currentForumCategory,
            })
            .then((res) => {
                console.log(res);
                dispatch(threadActions.getAllThreads);
                navigate(-1);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="thread_title">Thread Title</label>
            <input
                placeholder="Title"
                type="text"
                name="thread_title"
                id="thread_title"
                ref={titleInput}
            />
            <label htmlFor="thread_content">Content</label>
            <input
                placeholder="Content"
                type="text"
                name="thread_content"
                id="thread_content"
                ref={contentInput}
            />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default ThreadForm;
