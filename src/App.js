import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
