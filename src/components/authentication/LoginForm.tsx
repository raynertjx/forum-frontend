import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../helpers/hooks";
import { authServices } from "../../services/Services";
import { authActions } from "../../store/auth-slice";
import Title from "../UI/Title";

const LoginForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const passwordInput = useRef<HTMLInputElement | null>(null);
    const usernameInput = useRef<HTMLInputElement | null>(null);
    const formSubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        await authServices
            .login({
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
                alert("Invalid username/password");
            });
    };

    return (
        <div className="flex flex-col items-center">
            <Title title={"Login"} desc={""} />
            <form
                onSubmit={formSubmitHandler}
                className="flex flex-col gap-4 w-4/12"
            >
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    ref={usernameInput}
                    className="border-2 rounded text-xl px-4 py-2"
                    required
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    ref={passwordInput}
                    className="border-2 rounded text-xl px-4 py-2"
                    required
                />
                <input
                    type="submit"
                    value="Login"
                    className="border-2 rounded px-4 py-2 bg-blue-400 text-xl font-medium"
                />
            </form>
        </div>
    );
};

export default LoginForm;
