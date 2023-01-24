import React from "react";
import { Link } from "react-router-dom";

import { formatUrl } from "../../helpers/helpers";
import { useAppSelector } from "../../helpers/hooks";
import BreadcrumbNavBar from "../UI/BreadcrumbNavBar";
import Container from "../UI/Container";
import Taskbar from "../UI/Taskbar";
import ThreadItem from "./ThreadItem";

type Prop = { forumCategoryId: number; forumCategoryTitle: string };

const SubforumContainer: React.FC<Prop> = (props: Prop) => {
    const allThreads = useAppSelector((state) =>
        state.threads
            .filter(
                (thread) => thread.forum_category_id === props.forumCategoryId
            )
            .sort((a, b) => {
                const dateA = new Date(a.updated_at);
                const dateB = new Date(b.updated_at);
                return dateA > dateB ? -1 : 1;
            })
    );
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

    return (
        <Container>
            <div className="bg-white flex justify-between pb-3">
                <BreadcrumbNavBar
                    crumbArr={[{ title: props.forumCategoryTitle, nav: 0 }]}
                />
                {isLoggedIn && (
                    <Link
                        to="new"
                        className="bg-blue-400 px-4 py-1 rounded font-medium transition hover:bg-blue-500"
                    >
                        New Thread
                    </Link>
                )}
            </div>
            <Taskbar headers={["Thread", "Comments"]} />
            <div className="flex flex-col">
                {allThreads.map((thread) => (
                    <ThreadItem
                        key={thread.id}
                        id={thread.id}
                        url={formatUrl(thread.id, thread.title)}
                        title={thread.title}
                        content={thread.content}
                        author={thread.username}
                        author_id={thread.user_id}
                        created_at={thread.created_at}
                    />
                ))}
            </div>
        </Container>
    );
};

export default SubforumContainer;
