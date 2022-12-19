import React, { useState } from "react";
import Taskbar from "../UI/Taskbar";

const ForumTaskBar: React.FC = () => {
    return <Taskbar headers={["Categories", "Latest Thread", "Threads", "Comments"]}/>
};

export default ForumTaskBar;
