import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import Title from "../components/UI/Title";
import SubforumContainer from "../components/subforum/SubforumContainer";
import { spliceForumId } from "../helpers/helpers";
import { useAppDispatch } from "../helpers/hooks";
import { threadServices } from "../services/Services";
import { threadActions } from "../store/thread-slice";

const Subforum: React.FC = () => {
    const location = useLocation();
    const { forumId } = useParams() as { forumId: string };
    const forumCategoryId = spliceForumId(forumId);
    const { title, subtitle } = location.state;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(threadActions.removeAllThreads());
        const fetchThreads = async () => {
            await threadServices
                .get_threads_from_cat(forumCategoryId)
                .then((res) => {
                    console.log(res.data);
                    dispatch(threadActions.getAllThreads(res.data));
                });
        };
        fetchThreads();
    }, []);
    console.log(title);

    return (
        <>
            <Title title={title} desc={subtitle} />
            <SubforumContainer
                forumCategoryId={forumCategoryId}
                forumCategoryTitle={title}
            />
        </>
    );
};

export default Subforum;
