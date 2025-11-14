
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./components/Topbar.jsx";
import Mainbar from "./components/Mainbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <a href="#main" className="skip-link">Hoppa till innehåll</a>

        <header>
          <Topbar />
          <Mainbar />
        </header>

        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}