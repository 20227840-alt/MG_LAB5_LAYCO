import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">

          <Link className="navbar-brand" to="/">PORTAL SA MUNDO NG MGA TAO</Link>

          <div>
            <Link className="nav-link text-white d-inline me-3" to="/">Home</Link>
            <Link className="nav-link text-white d-inline me-3" to="/about">About</Link>
            <Link className="nav-link text-white d-inline me-3" to="/services">Services</Link>
            <Link className="nav-link text-white d-inline" to="/contact">Contact</Link>
          </div>

        </div>
      </nav>

      <div className="container mt-4">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>

    </Router>
  );
}

export default App;