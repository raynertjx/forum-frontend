import React, { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { commentServices } from "../../services/Services";
import { useAppSelector, useAppDispatch } from "../../helpers/hooks";
import { threadActions } from "../../store/thread-slice";
import CommentForm from "./CommentForm";

type Prop = {
    threadId: number;
};

const CreateComment: React.FC<Prop> = (props: Prop) => {
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const contentInput = useRef<HTMLInputElement | null>(null);

    const createCommentHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        await commentServices
            .create_comment({
                content: contentInput.current?.value,
                forum_thread_id: props.threadId,
            })
            .then((res) => {
                console.log(res.data.id);
                dispatch(threadActions.getAllThreads);
                navigate(0);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            {isLoggedIn && (
                <CommentForm
                    formSubmitHandler={createCommentHandler}
                    contentRef={contentInput}
                    contentValue={""}
                />
            )}
        </>
    );
};

export default CreateComment;
