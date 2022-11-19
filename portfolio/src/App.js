import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
