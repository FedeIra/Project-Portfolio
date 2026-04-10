import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Suspense, lazy } from 'react';

const Portfolio = lazy(() => import('./features/Portfolio/pages/PortfolioPage'));
const Login = lazy(() => import('./features/Auth/pages/LoginPage'));
const Register = lazy(() => import('./features/Auth/pages/RegisterPage'));

const App: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen text-white text-xl">
          Loading...
        </div>
      }
    >
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default App;
