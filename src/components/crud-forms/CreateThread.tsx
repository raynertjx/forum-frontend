import React, { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { categoryServices, threadServices } from "../../services/Services";
import { useAppDispatch } from "../../helpers/hooks";
import { threadActions } from "../../store/thread-slice";
import { spliceForumId } from "../../helpers/helpers";
import ThreadForm from "./ThreadForm";

const CreateThread: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { forumId } = useParams();
    const forumCategoryId = spliceForumId(forumId);
    const titleInput = useRef<HTMLInputElement | null>(null);
    const contentInput = useRef<HTMLInputElement | null>(null);
    const [threadId, setThreadId] = useState(undefined);

    const createThread = async () => {
        await threadServices
            .create_thread({
                title: titleInput.current?.value,
                content: contentInput.current?.value,
                forum_category_id: forumCategoryId,
            })
            .then((res) => {
                console.log(res.data.id);
                setThreadId(res.data.id);
                dispatch(threadActions.getAllThreads);
                navigate(-1);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const updateCategory = async () => {
        await categoryServices
            .update_category({
                id: forumCategoryId,
                latest_thread: threadId,
                thread_count: 1,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const createThreadHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        await Promise.all([createThread(), updateCategory()])
            .then((res) => console.log(res))
            .catch((error) => error);
    };

    return (
        <ThreadForm
            formSubmitHandler={createThreadHandler}
            titleRef={titleInput}
            contentRef={contentInput}
            titleValue={""}
            contentValue={""}
        />
    );
};

export default CreateThread;
