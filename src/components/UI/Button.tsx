import React, { PropsWithChildren } from "react";

const Button: React.FC<PropsWithChildren> = (props) => {
    return <button className="bg-blue-400 py-2 px-3">{props.children}</button>;
};

export default Button;
