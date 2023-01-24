import React from "react";
import { Link } from "react-router-dom";

import { formatDate } from "../../helpers/helpers";
import { ThreadType } from "./Thread.types";

const ThreadItem: React.FC<ThreadType> = (props: ThreadType) => {
    return (
        <div className="grid lg:grid-cols-8 px-2 py-4">
            <div className="col-span-8 grid grid-cols-3 lg:flex gap-4">
                <div></div>
                <div className="col-span-2">
                    <Link
                        className="font-semibold text-lg transition hover:text-gray-500"
                        to={`${props.url}`}
                        state={{
                            thread_id: props.id,
                            user_id: props.author_id,
                            title: props.title,
                            content: props.content,
                            author: props.author,
                            created_at: props.created_at,
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
        </div>
    );
};

export default ThreadItem;
