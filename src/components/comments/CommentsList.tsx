import React from "react";
import { useAppSelector } from "../../helpers/hooks";
import CommentItem from "./CommentItem";

const CommentsList: React.FC = () => {
    const comments = useAppSelector((state) => state.comments)
    const renderComments = comments.map(
        (comment) => <CommentItem commentId={comment.id} commentUserId={comment.user_id} commentContent={comment.content} commentAuthor={comment.author} commentDate={comment.created_at} commentNo={comments.indexOf(comment) + 2}/>
    );
    return <ul>{renderComments}</ul>;
};

export default CommentsList;