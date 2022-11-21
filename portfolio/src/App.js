import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './Components/About/About.jsx';
import Landing from './Components/Landing/Landing.jsx';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}
