import React from "react";
import { NavLink } from "react-router-dom";
import { ForumCategory } from "./Forum.types";

const ForumCategoryItem: React.FC<{ url: string } & ForumCategory> = (
    props
) => {
    return (
        <div className="grid lg:grid-cols-10 px-4 py-4">
            <div className="col-span-6 grid grid-cols-3 lg:flex gap-4">
                <div>
                    <img
                        className="object-scale-down h-20 w-30"
                        src={props.image}
                        alt={props.title}
                    />
                </div>
                <div className="col-span-2">
                    <NavLink
                        className="font-semibold text-lg"
                        to={`/forum/${props.url}`}
                    >
                        {props.title}
                    </NavLink>
                    <p>{props.subtitle}</p>
                </div>
            </div>
            <div className="hidden lg:block col-span-2">{props.latest}</div>
            <div className="hidden lg:block col-span-1">{props.threads}</div>
            <div className="hidden lg:block col-span-1">{props.comments}</div>
        </div>
    );
};

export default ForumCategoryItem;
