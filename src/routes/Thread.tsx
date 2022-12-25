import React from "react";
import { useLocation } from "react-router-dom";

const Thread: React.FC = () => {
    const location = useLocation();
    const { state } = location;
    const { title, content } = state;

    return (
        <>
            <h1>{title}</h1>
            <div>{content}</div>
        </>
    );
};

export default Thread;
