import React from "react";

const Title: React.FC<{ title: string; desc: string }> = (props) => {
    return (
        <div className="text-center">
            <h1 className="text-7xl pb-8 font-bold">{props.title}</h1>
            <p className="text-2xl">{props.desc}</p>
        </div>
    );
};

export default Title;
