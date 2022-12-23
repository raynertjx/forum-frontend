import React from "react";
import Container from "../UI/Container";
import Taskbar from "../UI/Taskbar";
import ThreadItem from "./ThreadItem";
import { useAppSelector } from "../../helpers/hooks";

const SubforumContainer: React.FC = () => {

    const allThreads = useAppSelector(state => state.threads)

    return (
        <Container>
            <Taskbar
                headers={["Thread", "Latest Comment", "Comments", "Views"]}
            />
            <div className="flex flex-col">
                {allThreads.map(item => <ThreadItem url={item.title} title={item.title} author={item.username} created_at={item.created_at}/>)}
            </div>
        </Container>
    );
};

export default SubforumContainer;
