import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../helpers/hooks";
import { commentServices } from "../../services/Services";
import UpdateComment from "../comments-crud/UpdateComment";
import CommentBox from "./CommentBox";

export interface commentProps {
    commentId: number;
    commentUserId: number;
    commentContent: string;
    commentAuthor: string;
    commentDate: string;
    commentNo: number;
}

const CommentItem: React.FC<commentProps> = (props: commentProps) => {
    const commentProps = {
        commentId: props.commentId,
        commentUserId: props.commentUserId,
        commentContent: props.commentContent,
        commentAuthor: props.commentAuthor,
        commentDate: props.commentDate,
        commentNo: props.commentNo,
    };

    const [showEditForm, setshowEditForm] = useState(false);
    const currentUserId = useAppSelector((state) => state.auth.user_id);
    const navigate = useNavigate();
    const openEditForm = () => setshowEditForm(true);
    const closeEditForm = () => setshowEditForm(false);
    const deleteComment = async () => {
        await commentServices
            .delete_comment({ comment_id: props.commentId.toString() })
            .then((res) => {
                console.log(res);
                navigate(0);
            });
    };

    return <CommentBox {...commentProps} />;
};

export default CommentItem;
