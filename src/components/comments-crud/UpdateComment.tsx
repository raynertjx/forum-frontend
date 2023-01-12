import React, { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { commentServices } from "../../services/Services";
import { useAppDispatch } from "../../helpers/hooks";
import { threadActions } from "../../store/thread-slice";
import CommentForm from "./CommentForm";

type Prop = {
    commentId: number;
    commentContent: string;
    closeEditForm: () => void;
};

const UpdateComment: React.FC<Prop> = (props: Prop) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const contentInput = useRef<HTMLInputElement | null>(null);

    const updateCommentHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        await commentServices
            .update_comment({
                content: contentInput.current?.value,
                comment_id: props.commentId.toString(),
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
            <CommentForm
                formSubmitHandler={updateCommentHandler}
                contentRef={contentInput}
                contentValue={props.commentContent}
            />
            <button onClick={props.closeEditForm}>Cancel</button>
        </>
    );
};

export default UpdateComment;
