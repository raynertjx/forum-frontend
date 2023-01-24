import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

interface breadcrumbProps {
    crumbArr: {
        title: string;
        nav: number;
    }[];
}

const BreadcrumbNavBar: React.FC<breadcrumbProps> = (props) => {
    const navigate = useNavigate();
    return (
        <ul className="flex gap-2 items-center text-lg font-medium">
            <NavLink to="/" className="transition hover:text-gray-500">Home</NavLink>
            <span>&#62;</span>
            {props.crumbArr.map((crumb) => {
                return (
                    <>
                        <a className="transition hover:text-gray-500" onClick={() => navigate(crumb.nav)}>{crumb.title}</a>
                        {props.crumbArr.length === 2 &&
                            props.crumbArr.indexOf(crumb) === 0 && (
                                <span>&#62;</span>
                            )}
                    </>
                );
            })}
        </ul>
    );
};

export default BreadcrumbNavBar;
