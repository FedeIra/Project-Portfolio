// Import external utilities:
import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React, { Suspense, lazy } from "react";

// Import local utilities:
const About = lazy(() => import("./Components/About/About.jsx"));
const Login = lazy(() => import("./Components/Login/Login.jsx"));
const Register = lazy(() => import("./Components/Register/Register.jsx"));

// Define and export main App component:
export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}
