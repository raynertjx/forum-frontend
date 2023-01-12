import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../helpers/hooks";
import { commentServices } from "../../services/Services";
import UpdateComment from "../comments-crud/UpdateComment";

type Prop = {
    commentId: number;
    commentUserId: number;
    commentContent: string;
    commentAuthor: string;
    commentDate: string;
};

const CommentItem: React.FC<Prop> = (props: Prop) => {
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

    return (
        <div className="flex gap-4">
            <div>
                {props.commentContent}
                {props.commentAuthor}
                {props.commentDate}
            </div>
            {currentUserId === props.commentUserId && (
                <div>
                    {!showEditForm && <div>
                        <button onClick={openEditForm}>Edit</button>
                        <button onClick={deleteComment}>Delete</button>
                    </div>}
                    {showEditForm && <UpdateComment commentId={props.commentId} commentContent={props.commentContent} closeEditForm={closeEditForm}/>}
                </div>
            )}
        </div>
    );
};

export default CommentItem;
