import React, { useState } from "react";
import ForumTaskBar from "./ForumTaskBar";
import ForumCategories from "./ForumCategories";

const ForumContainer: React.FC = () => {
    return (
        <div className="mx-auto w-10/12 lg:w-full bg-gray-100 shadow-xl mt-16 rounded-xl">
            <ForumTaskBar />
            <ForumCategories />
        </div>
    );
};

export default ForumContainer;
