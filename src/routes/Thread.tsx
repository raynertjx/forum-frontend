import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAppSelector } from "../helpers/hooks";
import { threadServices } from "../services/Services";

const Thread: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentUserId = useAppSelector((state) => state.auth.user_id);
    const { state } = location;
    const { thread_id, user_id, title, content } = state;

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
        </>
    );
};

export default Thread;
