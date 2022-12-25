import React from "react";
import Container from "../UI/Container";
import Taskbar from "../UI/Taskbar";
import ThreadItem from "./ThreadItem";
import { formatUrl } from "../../helpers/helpers";
import { useAppSelector } from "../../helpers/hooks";
import { NavLink } from "react-router-dom";

type Prop = { category: string };

const SubforumContainer: React.FC<Prop> = (props: Prop) => {
    const allThreads = useAppSelector((state) =>
        state.threads.filter((thread) => thread.category === props.category)
    );
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

    return (
        <Container>
            <div className="bg-white flex justify-end pb-3">
                {isLoggedIn && <NavLink
                    to="new"
                    className="bg-blue-400 px-3 py-1"
                    state={{ category: props.category }}
                >
                    New Thread
                </NavLink>}
            </div>
            <Taskbar
                headers={["Thread", "Latest Comment", "Comments", "Views"]}
            />
            <div className="flex flex-col">
                {allThreads.map((thread) => (
                    <ThreadItem
                        id={thread.id}
                        url={formatUrl(thread.id, thread.title)}
                        title={thread.title}
                        content={thread.content}
                        author={thread.username}
                        category={thread.category}
                        created_at={thread.created_at}
                    />
                ))}
            </div>
        </Container>
    );
};

export default SubforumContainer;
