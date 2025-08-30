import { HashRouter, Routes, Route } from "react-router-dom";
import "@/styles/main.scss";
import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}
