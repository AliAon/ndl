import "./App.css";
import Home from "./pages/Home";
import { Route, Router, Routes } from "react-router";
import Fleet from "./pages/Fleet";
import About from "./pages/AboutUs";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About/>} />
      <Route path="/our-fleet" element={<Fleet/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  );
}

export default App;
