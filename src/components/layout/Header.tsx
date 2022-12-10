import React from "react";
import { NavLink } from "react-router-dom";
import { IoLogoOctocat } from "react-icons/io";

const Header: React.FC = () => {
    return (
        <header className="bg-slate-50 text-accent-blue w-full h-20 flex justify-between items-center px-20">
            <div className="font-firacode text-4xl flex gap-6 items-center">    
                soccat <IoLogoOctocat />
            </div>
            <nav>
                <ul
                    className="flex list-none gap-10 text-xl
                [&>li>a]:font-medium [&>li>a:hover]:text-black"
                >
                    <li>
                        <NavLink to="/forum">Forum</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
