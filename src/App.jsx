import { Routes, Route } from "react-router-dom";

// Main Pages
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Capybara from "./pages/CapybaraPage";
import Contact from "./pages/ContactPage";
import Auth from "./pages/AuthPage";

// Sub Pages
import Post from "./pages/PostPage";

// Common component
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import NotFound from "./shared/NotFoundPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capybara" element={<Capybara />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
