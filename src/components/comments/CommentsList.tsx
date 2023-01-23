import React from "react";
import { useAppSelector } from "../../helpers/hooks";
import CommentItem from "./CommentItem";

const CommentsList: React.FC = () => {
    const comments = useAppSelector((state) => state.comments);
    const arrayForSort = [...comments];
    const sortedComments = arrayForSort.sort((a, b) => a.created_at > b.created_at ? 1 : -1);
    const renderComments = sortedComments.map((comment) => (
        <CommentItem
            commentId={comment.id}
            commentUserId={comment.user_id}
            commentContent={comment.content}
            commentAuthor={comment.author}
            commentDate={comment.created_at}
            commentNo={comments.indexOf(comment) + 2}
        />
    ));
    return <ul>{renderComments}</ul>;
};

export default CommentsList;
