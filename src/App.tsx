import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import Layout from "./components/layout/Layout";
import CreateThread from "./components/threads-crud/CreateThread";
import UpdateThread from "./components/threads-crud/UpdateThread";
import { useAppDispatch } from "./helpers/hooks";
import About from "./routes/About";
import Forum from "./routes/Forum";
import Login from "./routes/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Signup from "./routes/Signup";
import Subforum from "./routes/Subforum";
import Thread from "./routes/Thread";
import { authServices } from "./services/Services";
import { authActions } from "./store/auth-slice";

function App() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCookie = async () => {
            await authServices
                .whoami()
                .then((res) => {
                    const data = res.data;
                    dispatch(
                        authActions.login({
                            user_id: data.user_id,
                            username: data.username,
                        })
                    );
                })
                .catch((error) => {
                    dispatch(authActions.logout());
                    alert("Your sesson has expired. Please log in again.");
                    navigate("/login");
                    return error;
                });
        };
        fetchCookie();
    }, []);

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Navigate to="/forum" replace />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forum">
                    <Route index element={<Forum />} />
                    <Route path=":forumId" element={<Subforum />} />
                    <Route path=":forumId/:threadId" element={<Thread />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path=":forumId/new" element={<CreateThread />} />
                        <Route
                            path=":forumId/:threadId/edit"
                            element={<UpdateThread />}
                        />
                    </Route>
                </Route>
                <Route path="*" element={<Navigate to="/forum" replace />} />
            </Routes>
        </Layout>
    );
}
export default App;
