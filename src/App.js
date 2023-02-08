import "./App.css";
import Home from "./pages/Home";
import { Route, Router, Routes } from "react-router";
import Fleet from "./pages/Fleet";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-fleet" element={<Fleet/>} />
    </Routes>
  );
}

export default App;
