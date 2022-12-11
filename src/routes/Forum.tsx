import React from "react";
import ForumContainer from "../components/forum/ForumContainer";
import Title from "../components/UI/Title";

const Forum: React.FC = () => {
    return (
        <>
            <Title
                title="The Soccat Forum"
                desc="A place for wholesome banter!"
            />
            <ForumContainer />
        </>
    );
};

export default Forum;
    