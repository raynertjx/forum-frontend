import React from "react";
import { NavLink } from "react-router-dom";
import { IoLogoOctocat } from "react-icons/io";

const Header: React.FC = () => {
    return (
        // <header className="bg-slate-50 text-accent-blue h-20 flex justify-between items-center px-20 w-full">
        <nav className="bg-gray-100 text-xl">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-10">
                        <div className="font-firacode font-bold flex gap-4 items-center py-5">
                            <IoLogoOctocat className="text-blue-500"/>
                            <span>soccat</span>
                        </div>
                        <div className="hidden lg:flex items-center space-x-6">
                            <NavLink
                                className="py-5 px-3 text-gray-700 hover:text-gray-900"
                                to="/forum"
                            >
                                Forum
                            </NavLink>
                            <NavLink
                                className="py-5 px-3 text-gray-700 hover:text-gray-900"
                                to="/about"
                            >
                                About
                            </NavLink>
                        </div>
                    </div>
                    <div className="hidden lg:flex  items-center space-x-1">
                        <NavLink
                            className="py-5 px-1 text-gray-700 hover:text-gray-900"
                            to="/login"
                        >
                            Login
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
        // {/* </header> */}
    );
};

export default Header;
