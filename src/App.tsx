import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import About from "./routes/About";
import Forum from "./routes/Forum";
import Login from "./routes/Login";

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
