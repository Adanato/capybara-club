import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/HomePage";
import About from "./Pages/AboutPage";
import Resume from "./Pages/ResumePage";
import Contact from "./Pages/ContactPage";

// Common component
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";

function App() {
  return (
    <>
      <main className="root-container">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
