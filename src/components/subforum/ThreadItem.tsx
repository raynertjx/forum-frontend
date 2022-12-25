import React from "react";
import { NavLink } from "react-router-dom";
import { ThreadType } from "./Thread.types";
import { formatDate } from "../../helpers/helpers";

const ThreadItem: React.FC<{ url: string } & ThreadType> = (props) => {
    return (
        <div className="grid lg:grid-cols-10 px-4 py-4">
            <div className="col-span-6 grid grid-cols-3 lg:flex gap-4">
                <div></div>
                <div className="col-span-2">
                    <NavLink
                        className="font-semibold text-lg"
                        to={`/forum/${props.category}/${props.url}`}
                    >
                        {props.title}
                    </NavLink>
                    <div className="flex gap-4">
                        <p>by {props.author}</p>
                        <p>{formatDate(props.created_at)}</p>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block col-span-2">100</div>
            <div className="hidden lg:block col-span-1">100</div>
            <div className="hidden lg:block col-span-1">100</div>
        </div>
    );
};

export default ThreadItem;
