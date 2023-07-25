import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Capybara from "./pages/CapybaraPage";
import Contact from "./pages/ContactPage";

// Common component
import Header from "./shared/Header";
import Footer from "./shared/Footer";

function App() {
  return (
    <main className="root-container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capybara" element={<Capybara />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
