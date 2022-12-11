import React, { useState } from "react";

const ForumTaskBar: React.FC = () => {
    return <div className="grid w-full bg-blue-400 mt-16 py-3 px-4 grid-cols-10 font-medium text-lg">
        <div className="col-span-6">Categories</div>
        <div className="hidden lg:block lg:col-span-2">Latest Thread</div>
        <div className="hidden lg:block lg:col-span-1">Threads</div>
        <div className="hidden lg:block lg:col-span-1">Comments</div>
    </div>;
};

export default ForumTaskBar;
