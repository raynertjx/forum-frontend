import React, { useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { threadServices } from "../../services/Services";
import ThreadForm from "./ThreadForm";

const UpdateThread: React.FC = () => {
    const location = useLocation();
    const { title, content } = location.state;
    const navigate = useNavigate();
    const { forumId } = useParams();
    const { threadId } = useParams();
    const titleInput = useRef<HTMLInputElement | null>(null);
    const contentInput = useRef<HTMLTextAreaElement | null>(null);

    const updateThreadHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        await threadServices
            .update_thread({
                title: titleInput.current?.value,
                content: contentInput.current?.value,
                category: forumId,
                thread_id: threadId,
            })
            .then((res) => {
                console.log(res);
                navigate(-1);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <ThreadForm
            formSubmitHandler={updateThreadHandler}
            titleRef={titleInput}
            contentRef={contentInput}
            titleValue={title}
            contentValue={content}
        />
    );
};

export default UpdateThread;
