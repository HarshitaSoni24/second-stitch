import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Upload from "./pages/Upload";
import Result from "./pages/Result";
import Processing from "./pages/Processing";
import ThemeToggle from "./components/ThemeToggle";
import AnimatedBackground from "./components/AnimatedBackground";


/* Add to src/App.jsx or a new component */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border-2 border-[#E67E22] rounded-full pointer-events-none z-[999] hidden md:block"
      animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
      transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.5 }}
    />
  );
};

export default function App() {
  const location = useLocation();

  return (
    <>
      <AnimatedBackground />
      <ThemeToggle />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/processing" element={<Processing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/result" element={<Result />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
