import React from "react";
import Container from "../UI/Container";
import Taskbar from "../UI/Taskbar";
import ThreadItem from "./ThreadItem";
import Button from "../UI/Button";
import { formatUrl } from "../../helpers/helpers";
import { useAppSelector } from "../../helpers/hooks";
import { NavLink } from "react-router-dom";

const SubforumContainer: React.FC = () => {
    const allThreads = useAppSelector((state) => state.threads);

    return (
        <Container>
            <div className="bg-white flex justify-end pb-3">
                <NavLink to="new" className="bg-blue-400 px-3 py-1">
                    New Thread
                </NavLink>
            </div>
            <Taskbar
                headers={["Thread", "Latest Comment", "Comments", "Views"]}
            />
            <div className="flex flex-col">
                {allThreads.map((item) => (
                    <ThreadItem
                        url={formatUrl(item.id, item.title)}
                        title={item.title}
                        author={item.username}
                        category={item.category}
                        created_at={item.created_at}
                    />
                ))}
            </div>
        </Container>
    );
};

export default SubforumContainer;
