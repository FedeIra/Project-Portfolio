import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import About from './Components/About/About.jsx';
import Landing from './Components/Landing/Landing.jsx';
import Experience from './Components/Experience/Experience.jsx';

export default function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </AnimatePresence>
  );
}
