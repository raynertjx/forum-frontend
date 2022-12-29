import React from "react";
import { Link } from "react-router-dom";
import { ThreadType } from "./Thread.types";
import { formatDate } from "../../helpers/helpers";

const ThreadItem: React.FC<ThreadType> = (props: ThreadType) => {
    return (
        <div className="grid lg:grid-cols-10 px-4 py-4">
            <div className="col-span-6 grid grid-cols-3 lg:flex gap-4">
                <div></div>
                <div className="col-span-2">
                    <Link
                        className="font-semibold text-lg"
                        to={`${props.url}`}
                        state={{
                            thread_id: props.id,
                            user_id: props.author_id,
                            title: props.title,
                            content: props.content,
                        }}
                    >
                        {props.title}
                    </Link>
                    <div className="flex gap-4">
                        <p>by {props.author}</p>
                        <p>{formatDate(props.created_at)}</p>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block col-span-3">100</div>
            <div className="hidden lg:block col-span-1">100</div>
        </div>
    );
};

export default ThreadItem;
