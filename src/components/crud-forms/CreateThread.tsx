import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { threadServices } from "../../services/Services";
import { useAppDispatch } from "../../helpers/hooks";
import { threadActions } from "../../store/thread-slice";
import ThreadForm from "./ThreadForm";

const CreateThread: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { forumId } = useParams();
    const titleInput = useRef<HTMLInputElement | null>(null);
    const contentInput = useRef<HTMLInputElement | null>(null);

    const createThreadHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        await threadServices
            .create_thread({
                title: titleInput.current?.value,
                content: contentInput.current?.value,
                category: forumId,
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
