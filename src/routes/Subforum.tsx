import React, { useEffect } from "react";
import { useAppDispatch } from "../helpers/hooks";
import { threadActions } from "../store/thread-slice";
import Title from "../components/UI/Title";
import SubforumContainer from "../components/subforum/SubforumContainer";
import { FORUM_CATEGORIES } from "../components/forum/Forum.constants";
import { useParams } from "react-router-dom";
import { threadServices } from "../services/Services";

const Subforum: React.FC = () => {
    const { forumId } = useParams() as { forumId: string };
    const forumCategory = FORUM_CATEGORIES[forumId];
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(threadActions.removeAllThreads());
        const fetchThreads = async () => {
            await threadServices.get_threads().then((res) => {
                dispatch(threadActions.getAllThreads(res.data));
            });
        };
        fetchThreads();
    }, []);

    return (
        <>
            <Title title={forumCategory.title} desc={forumCategory.subtitle} />
            <SubforumContainer category={forumId}/>
        </>
    );
};

export default Subforum;
