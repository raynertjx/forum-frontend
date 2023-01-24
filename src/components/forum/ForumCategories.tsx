import React from "react";

import { useAppSelector } from "../../helpers/hooks";
import ForumCategoryItem from "./ForumCategoryItem";

const ForumCategories: React.FC = () => {
    const allCategories = useAppSelector((state) => state.categories);
    return (
        <div className="flex flex-col">
            {allCategories.map((category) => (
                <ForumCategoryItem
                    key={category.id}
                    url={`${category.id}-${category.url}`}
                    title={category.name}
                    subtitle={category.subtitle}
                    image={`/forum-images/${category.url}.jpeg`}
                    latest={category.latest_thread}
                    threads={category.thread_count}
                />
            ))}
        </div>
    );
};

export default ForumCategories;
