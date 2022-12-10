import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import About from "./pages/About";
import Forum from "./pages/Forum";
import Login from "./pages/Login";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Forum />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/" replace />}/>
            </Routes>
        </Layout>
    );
}
export default App;
