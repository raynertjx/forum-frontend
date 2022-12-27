import React from "react";
import { FORUM_CATEGORIES } from "./Forum.constants";
import ForumCategoryItem from "./ForumCategoryItem";

const ForumCategories: React.FC = () => {
    return (
        <div className="flex flex-col">
            {Object.entries(FORUM_CATEGORIES).map(([key, value]) => (
                <ForumCategoryItem
                    key={key}
                    url={key}
                    title={value.title}
                    subtitle={value.subtitle}
                    image={value.image}
                    latest={value.latest}
                    threads={value.threads}
                    comments={value.comments}
                />
            ))}
        </div>
    );
};

export default ForumCategories;
