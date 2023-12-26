import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import About from './Components/About/About.jsx';

export default function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}
