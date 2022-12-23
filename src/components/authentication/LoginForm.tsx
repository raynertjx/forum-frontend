import React, { useState, useRef } from "react";
import Services from "../../services/Services";
import { useAppDispatch } from "../../helpers/hooks";
import { authActions } from "../../store/auth-slice";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const passwordInput = useRef<HTMLInputElement | null>(null);
    const usernameInput = useRef<HTMLInputElement | null>(null);
    const formSubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        await Services.login({
            username: usernameInput.current?.value,
            password: passwordInput.current?.value,
        })
            .then((res) => {
                const data = res.data.user;
                dispatch(
                    authActions.login({
                        user_id: data.id,
                        username: data.username,
                    })
                );
                navigate("/forum");
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
            <input type="submit" value="Submit" />
        </form>
    );
};

export default LoginForm;
