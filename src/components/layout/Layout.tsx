import React from "react";
import Header from "./Header";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
    return (
        <>
            <Header />
            <main className="mx-auto w-full max-w-5xl">
                {props.children}
            </main>
        </>
    );
};

export default Layout;
