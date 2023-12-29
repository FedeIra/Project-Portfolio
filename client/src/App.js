// Import external utilities:
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Import local utilities:
import About from "./Components/About/About.jsx";
import "./App.css";

// Define and export main App component:
export default function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}
