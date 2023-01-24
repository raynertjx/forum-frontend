import React from "react";

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

    return <CommentBox {...commentProps} />;
};

export default CommentItem;
