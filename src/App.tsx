import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Services from "./services/Services";
import { useAppDispatch } from "./hooks/hooks";
import { authActions } from "./store/auth-slice";
import Layout from "./components/layout/Layout";
import About from "./routes/About";
import Forum from "./routes/Forum";
import Login from "./routes/Login";
import Subforum from "./routes/Subforum";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchCookie = async () => {
            await Services.authenticate()
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
                <Route path="/forum" element={<Forum />} />
                <Route path="/forum/:forumId" element={<Subforum />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Layout>
    );
}
export default App;
