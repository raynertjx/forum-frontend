import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../helpers/hooks";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { commentActions } from "../store/comment-slice";
import { threadServices, commentServices } from "../services/Services";
import CreateComment from "../components/comments-crud/CreateComment";

const Thread: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const currentUserId = useAppSelector((state) => state.auth.user_id);
    const { state } = location;
    const { thread_id, user_id, title, content } = state;

    useEffect(() => {
        dispatch(commentActions.removeAllComments());
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
            {currentUserId === user_id && (
                <Link to={"edit"} state={{ title, content }}>
                    Edit
                </Link>
            )}
            {currentUserId === user_id && (
                <button onClick={deleteThread}>Delete</button>
            )}
            <h1>{title}</h1>
            <div>{content}</div>
            <CreateComment threadId={thread_id} />
        </>
    );
};

export default Thread;
