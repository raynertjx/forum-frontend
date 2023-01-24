import React from "react";

import Container from "../UI/Container";
import ForumCategories from "./ForumCategories";
import ForumTaskBar from "./ForumTaskBar";

const ForumContainer: React.FC = () => {
    return (
        <Container>
            <ForumTaskBar />
            <ForumCategories />
        </Container>
    );
};

export default ForumContainer;
