import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { spliceForumId } from "../../helpers/helpers";
import { useAppDispatch } from "../../helpers/hooks";
import { threadServices } from "../../services/Services";
import { threadActions } from "../../store/thread-slice";
import ThreadForm from "./ThreadForm";

const CreateThread: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { forumId } = useParams();
    const forumCategoryId = spliceForumId(forumId);
    const titleInput = useRef<HTMLInputElement | null>(null);
    const contentInput = useRef<HTMLTextAreaElement | null>(null);

    const createThread = async (event: React.FormEvent) => {
        event.preventDefault();
        await threadServices
            .create_thread({
                title: titleInput.current?.value,
                content: contentInput.current?.value,
                forum_category_id: forumCategoryId,
            })
            .then((res) => {
                console.log(res.data.id);
                dispatch(threadActions.getAllThreads);
                navigate(-1);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <ThreadForm
            formSubmitHandler={createThread}
            titleRef={titleInput}
            contentRef={contentInput}
            titleValue={""}
            contentValue={""}
        />
    );
};

export default CreateThread;
