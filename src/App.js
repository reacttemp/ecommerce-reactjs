import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Activity from "./pages/activity/Activity";
import Author from "./pages/author/Author";
import Page404 from "./pages/404/Page404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/author" element={<Author />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
