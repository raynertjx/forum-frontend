import React, { useState } from "react";
import { IoLogoOctocat } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../helpers/hooks";
import { useAppSelector } from "../../helpers/hooks";
import { authServices } from "../../services/Services";
import { authActions } from "../../store/auth-slice";

const Header: React.FC = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const mobileMenuHandler = (event: React.MouseEvent) => {
        setShowMobileMenu((prevState) => !prevState);
    };
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const logoutHandler = async (event: React.MouseEvent) => {
        await authServices.logout().then((res) => {
            dispatch(authActions.logout());
            localStorage.removeItem("token");
            navigate("/forum");
        });
    };

    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
    const username = useAppSelector((state) => state.auth.username);

    return (
        <nav className="bg-gray-100 text-xl">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex justify-between">
                    <div className="flex space-x-10">
                        <div className="font-firacode font-bold flex gap-4 items-center py-5">
                            <IoLogoOctocat className="text-blue-500" />
                            <span>soccat</span>
                        </div>
                        <div className="hidden lg:flex items-center space-x-6 font-medium">
                            <NavLink
                                className="py-5 px-3 text-gray-700 hover:text-gray-500"
                                to="/forum"
                            >
                                Forum
                            </NavLink>
                            <NavLink
                                className="py-5 px-3 text-gray-700 hover:text-gray-500"
                                to="/about"
                            >
                                About
                            </NavLink>
                        </div>
                    </div>
                    <div className="hidden lg:flex  items-center space-x-1 font-medium">
                        {isLoggedIn && <span className="px-2">{username}</span>}
                        {!isLoggedIn && (
                            <NavLink
                                className="p-5 text-gray-700 hover:text-gray-500"
                                to="/login"
                            >
                                Login
                            </NavLink>
                        )}
                        {!isLoggedIn && (
                            <NavLink
                                className="p-5 text-gray-700 hover:text-gray-500"
                                to="/signup"
                            >
                                Sign Up
                            </NavLink>
                        )}
                        {isLoggedIn && (
                            <button
                                onClick={logoutHandler}
                                className="p-5 hover:text-gray-500"
                            >
                                Log Out
                            </button>
                        )}
                    </div>
                    <div className="lg:hidden flex items-center">
                        <button onClick={mobileMenuHandler}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`lg:hidden ${
                    showMobileMenu ? "block" : "hidden"
                } z-20 absolute bg-gray-100 w-full`}
            >
                <NavLink
                    className="block py-3 px-8 font-medium hover:bg-gray-200"
                    to="/forum"
                >
                    Forum
                </NavLink>
                <NavLink
                    className="block py-3 px-8 font-medium hover:bg-gray-200"
                    to="/about"
                >
                    About
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;
