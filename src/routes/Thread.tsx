import React from "react";
import { useAppSelector } from "../helpers/hooks";
import { useParams } from "react-router-dom";

const Thread: React.FC = () => {
    const { threadId } = useParams() as { threadId: string };
    const currentThreadId = Number(
        threadId.substring(0, threadId.indexOf("-"))
    );
    const currentThread = useAppSelector((state) => state.threads).find(
        (item) => item.id === currentThreadId
    );

    return <div>{currentThread?.content}</div>;
};

export default Thread;
