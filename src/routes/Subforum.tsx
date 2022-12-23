import React, { useEffect } from "react";
import { useAppDispatch } from "../helpers/hooks";
import { threadActions } from "../store/thread-slice";
import Title from "../components/UI/Title";
import SubforumContainer from "../components/subforum/SubforumContainer";
import { FORUM_CATEGORIES } from "../components/forum/Forum.constants";
import { useParams } from "react-router-dom";
import Services from "../services/Services";

const Subforum: React.FC = () => {
    const { forumId } = useParams() as { forumId: string };
    const temp = FORUM_CATEGORIES[forumId];
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(threadActions.removeAllThreads());
        const fetchThreads = async () => {
            await Services.get_threads().then((res) => {
                dispatch(threadActions.getAllThreads(res.data));
            });
        };
        fetchThreads();
    }, []);

    return (
        <>
            <Title title={temp.title} desc={temp.subtitle} />
            <SubforumContainer />
        </>
    );
};

export default Subforum;
