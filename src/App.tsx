import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import About from "./routes/About";
import Forum from "./routes/Forum";
import Login from "./routes/Login";
import Subforum from "./routes/Subforum";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Navigate to="/forum" replace />} />
                <Route path="/forum" element={<Forum />} />
                <Route path="/forum/:forumId" element={<Subforum/>}/>
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Layout>
    );
}
export default App;
