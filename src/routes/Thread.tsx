import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { formatDateWithTime, spliceForumTitle } from "../helpers/helpers";
import { useAppSelector, useAppDispatch } from "../helpers/hooks";
import { useNavigate, useLocation, useParams, Link } from "react-router-dom";
import { spliceForumId } from "../helpers/helpers";
import { commentActions } from "../store/comment-slice";
import {
    threadServices,
    commentServices,
    categoryServices,
} from "../services/Services";
import CommentsList from "../components/comments/CommentsList";
import CreateComment from "../components/comments-crud/CreateComment";
import BreadcrumbNavBar from "../components/UI/BreadcrumbNavBar";

const Thread: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { forumId } = useParams();
    const forumCategoryId = spliceForumId(forumId);
    const location = useLocation();
    const currentUserId = useAppSelector((state) => state.auth.user_id);
    const { state } = location;
    const { thread_id, user_id, title, content, author, created_at } = state;
    const categoryTitle = spliceForumTitle(forumId);

    useEffect(() => {
        const fetchThreads = async () => {
            await commentServices
                .get_comments_from_thread(thread_id)
                .then((res) => {
                    console.log(res.data);
                    dispatch(commentActions.getAllComments(res.data));
                });
        };
        fetchThreads();
    }, []);

    const deleteThread = async () => {
        await threadServices.delete_thread({ thread_id }).then((res) => {
            console.log(res);
            navigate(-1);
        });
    };

    return (
        <>
            <BreadcrumbNavBar
                crumbArr={[
                    { title: categoryTitle, nav: -1 },
                    { title: title, nav: 0 },
                ]}
            />
            <div className="flex justify-between px-2">
                <h1 className="text-3xl font-medium py-4">{title}</h1>
                <div className="flex items-center gap-3">
                    {currentUserId === user_id && (
                        <Link to={"edit"} state={{ title, content }}>
                            <AiOutlineEdit
                                size={25}
                                className="transition hover:text-gray-500"
                            />
                        </Link>
                    )}
                    {currentUserId === user_id && (
                        <button onClick={deleteThread}>
                            <AiOutlineDelete
                                size={25}
                                className="transition hover:text-gray-500"
                            />
                        </button>
                    )}
                </div>
            </div>
            <div className="border-2 h-48 grid grid-rows-6 grid-cols-6">
                <div className="row-span-1 col-span-6 bg-blue-400 flex items-center justify-between px-2 font-medium">
                    <span>{`${formatDateWithTime(created_at)}`}</span>
                    <span>#1</span>
                </div>
                <div className="row-span-5 col-span-1 border-r-2 flex flex-col items-center justify-center gap-2">
                    <span className="font-medium">{author}</span>
                    <img
                        src="/forum-images/cat.jpeg"
                        alt="cat-avatar"
                        height={80}
                        width={80}
                    />
                </div>
                <div className="p-4 col-span-5 break-words">{content}</div>
            </div>
            <CommentsList />
            <CreateComment threadId={thread_id} />
        </>
    );
};

export default Thread;
