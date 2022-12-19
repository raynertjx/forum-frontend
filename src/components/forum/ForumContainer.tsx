import React from "react";
import ForumTaskBar from "./ForumTaskBar";
import ForumCategories from "./ForumCategories";
import Container from "../UI/Container";

const ForumContainer: React.FC = () => {
    return (
            <Container>
                <ForumTaskBar />
                <ForumCategories />
            </Container>
    );
};

export default ForumContainer;
