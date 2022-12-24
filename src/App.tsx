import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Services from "./services/Services";
import { useAppDispatch } from "./helpers/hooks";
import { authActions } from "./store/auth-slice";
import Layout from "./components/layout/Layout";
import About from "./routes/About";
import Forum from "./routes/Forum";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Subforum from "./routes/Subforum";
import Thread from "./routes/Thread";
import ThreadForm from "./components/crud-forms/ThreadForm";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchCookie = async () => {
            await Services.whoami()
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
                    <Route path=":forumId/new" element={<ThreadForm />} />
                    <Route path=":forumId/:threadId" element={<Thread />} />
                </Route>
                <Route path="*" element={<Navigate to="/forum" replace />} />
            </Routes>
        </Layout>
    );
}
export default App;
