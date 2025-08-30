import { HashRouter, Routes, Route } from "react-router-dom";
import "@/styles/main.scss";
import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import BaMbuma from "@/pages/Projects/BaMbuma/BaMbuma";
import Rouge from "@/pages/Projects/Rouge/Rouge";
import Koyekola from "@/pages/Projects/Koyekola/Koyekola";
import GuessJeans from "@/pages/Projects/GuessJeans/GuessJeans"; // ⬅️ NEW

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/ba-mbuma" element={<BaMbuma />} />
        <Route path="/project/rouge" element={<Rouge />} />
        <Route path="/project/koyekola" element={<Koyekola />} />
        <Route path="/project/guess-jeans" element={<GuessJeans />} />{" "}
        {/* ⬅️ NEW */}
      </Routes>
    </HashRouter>
  );
}
