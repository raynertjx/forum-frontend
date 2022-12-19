import React from "react";

interface Props {
    children: React.ReactNode;
}

const Container: React.FC<Props> = (props) => {
    return (
        <div className="mx-auto w-10/12 lg:w-full bg-gray-100 shadow-xl mt-16 rounded-xl">
            {props.children}
        </div>
    );
};

export default Container;
