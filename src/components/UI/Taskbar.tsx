import React from "react";

const Taskbar: React.FC<{headers: string[]}> = ({ headers }) => {
    return <div className="grid w-full bg-blue-400 py-3 px-4 grid-cols-10 font-medium text-lg">
        <div className="col-span-6">{headers[0]}</div>
        <div className="hidden lg:block lg:col-span-2">{headers[1]}</div>
        <div className="hidden lg:block lg:col-span-1">{headers[2]}</div>
        <div className="hidden lg:block lg:col-span-1">{headers[3]}</div>
    </div>;
};

export default Taskbar;
