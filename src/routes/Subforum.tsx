import React from "react";
import Title from "../components/UI/Title";
import { FORUM_CATEGORIES } from "../components/forum/Forum.constants";
import { useParams } from "react-router-dom";

const Subforum: React.FC = () => {
    const { forumId } = useParams() as { forumId: string };
    const temp = FORUM_CATEGORIES[forumId];
    return <Title title={temp.title} desc={temp.subtitle} />;
};

export default Subforum;
