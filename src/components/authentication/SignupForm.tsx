import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { authServices } from "../../services/Services";
import Title from "../UI/Title";

const SignupForm: React.FC = () => {
    const navigate = useNavigate();
    const usernameInput = useRef<HTMLInputElement | null>(null);
    const passwordInput = useRef<HTMLInputElement | null>(null);
    const confirmPasswordInput = useRef<HTMLInputElement | null>(null);
    const formSubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            if (
                passwordInput.current?.value !==
                confirmPasswordInput.current?.value
            ) {
                throw new Error("Passwords should match");
            }
        } catch (error) {
            alert("Passwords do not match!");
        }
        await authServices
            .signup({
                username: usernameInput.current?.value,
                password: passwordInput.current?.value,
                password_confirmation: confirmPasswordInput.current?.value,
            })
            .then((res) => {
                navigate("/login");
            })
            .catch((error) => {
                alert("Username already exists!");
                console.log(error);
            });
    };

    return (
        <div className="flex flex-col items-center">
            <Title title={"Sign Up"} desc={"Be part of the Soccat Forum!"} />
            <form
                onSubmit={formSubmitHandler}
                className="flex flex-col gap-4 w-4/12 mt-8"
            >
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    ref={usernameInput}
                    className="border-2 rounded text-xl px-4 py-2"
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    ref={passwordInput}
                    className="border-2 rounded text-xl px-4 py-2"
                />
                <input
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    placeholder="Confirm Password"
                    ref={confirmPasswordInput}
                    className="border-2 rounded text-xl px-4 py-2"
                />
                <input
                    type="submit"
                    value="Sign Up"
                    className="border-2 rounded px-4 py-2 bg-blue-400 text-xl font-medium"
                />
            </form>
        </div>
    );
};

export default SignupForm;
