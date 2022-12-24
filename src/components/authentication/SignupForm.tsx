import React, { useState, useRef } from "react";
import { authServices } from "../../services/Services";
import { useAppDispatch } from "../../helpers/hooks";
import { useNavigate } from "react-router-dom";

const SignupForm: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const usernameInput = useRef<HTMLInputElement | null>(null);
    const passwordInput = useRef<HTMLInputElement | null>(null);
    const confirmPasswordInput = useRef<HTMLInputElement | null>(null);
    const formSubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        await authServices.signup({
            username: usernameInput.current?.value,
            password: passwordInput.current?.value,
            password_confirmation: confirmPasswordInput.current?.value,
        })
            .then((res) => {
                navigate("/login");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                ref={usernameInput}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                ref={passwordInput}
            />
            <label htmlFor="password_confirmation">Confirm Password</label>
            <input
                type="password"
                name="password_confirmation"
                id="password_confirmation"
                placeholder="Confirm Password"
                ref={confirmPasswordInput}
            />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default SignupForm;
