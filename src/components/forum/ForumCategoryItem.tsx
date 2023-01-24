import React from "react";
import { Link } from "react-router-dom";
import { ForumCategory } from "./Forum.types";

const ForumCategoryItem: React.FC<{ url: string } & ForumCategory> = (
    props
) => {
    return (
        <div className="grid lg:grid-cols-8 px-4 py-4">
            <div className="col-span-7 grid grid-cols-3 lg:flex gap-4">
                <div>
                    <img
                        className="object-scale-down h-20 w-30"
                        src={props.image}
                        alt={props.title}
                    />
                </div>
                <div className="col-span-2">
                    <Link
                        className="font-semibold text-lg transition hover:text-gray-500"
                        to={`${props.url}`}
                        state={{ title: props.title, subtitle: props.subtitle }}
                    >
                        {props.title}
                    </Link>
                    <p className="text-lg">{props.subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default ForumCategoryItem;
