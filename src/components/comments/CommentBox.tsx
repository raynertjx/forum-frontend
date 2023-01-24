import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { formatDateWithTime } from "../../helpers/helpers";
import { useAppSelector } from "../../helpers/hooks";
import { commentServices } from "../../services/Services";
import UpdateComment from "../comments-crud/UpdateComment";
import { commentProps } from "./CommentItem";

const CommentBox: React.FC<commentProps> = (props: commentProps) => {
    const navigate = useNavigate();
    const [showEditForm, setshowEditForm] = useState(false);
    const currentUserId = useAppSelector((state) => state.auth.user_id);
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
        <div className="border-2 h-48 grid grid-rows-6 grid-cols-6">
            <div className="row-span-1 col-span-6 bg-blue-400 flex items-center justify-between px-2 font-medium">
                <span>{`${formatDateWithTime(props.commentDate)}`}</span>
                <span>{`#${props.commentNo}`}</span>
            </div>
            <div className="row-span-5 col-span-1 border-r-2 flex flex-col items-center justify-center gap-2">
                <span className="font-medium">{props.commentAuthor}</span>
                <img
                    src="/forum-images/cat.jpeg"
                    alt="cat-avatar"
                    height={80}
                    width={80}
                />
            </div>
            <div className="p-4 row-span-4 col-span-5">
                {!showEditForm && (
                    <p className="break-words">{props.commentContent}</p>
                )}
                {currentUserId === props.commentUserId && showEditForm && (
                    <UpdateComment
                        commentId={props.commentId}
                        commentContent={props.commentContent}
                        closeEditForm={closeEditForm}
                    />
                )}
            </div>
            <div className="flex row-span-1 col-span-5 justify-end">
                {currentUserId === props.commentUserId && (
                    <div>
                        {!showEditForm && (
                            <div className="flex gap-2 pr-2">
                                <button onClick={openEditForm}>
                                    <AiOutlineEdit
                                        size={20}
                                        className="transition hover:text-gray-500"
                                    />
                                </button>
                                <button onClick={deleteComment}>
                                    <AiOutlineDelete
                                        size={20}
                                        className="transition hover:text-gray-500"
                                    />
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CommentBox;
