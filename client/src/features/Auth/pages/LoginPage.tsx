import { useState, type FC, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import { loginAsync } from '../state/authSlice';
import { showToast } from '../../../utils/toast';

const LoginPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMobile = window.innerWidth < 769;

  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [incomplete, setIncomplete] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (displayName.length < 6 || password.length < 6) {
      setIncomplete(true);
      return;
    }

    try {
      const result = await dispatch(
        loginAsync({ username: displayName, password }),
      ).unwrap();

      if (result) {
        showToast({ title: 'Welcome!', description: 'You have logged in successfully', status: 'success' });
        setTimeout(() => navigate('/'), 1000);
      }
    } catch (error: any) {
      showToast({
        title: 'Error.',
        description: typeof error === 'string' ? error : 'Error logging in. Please try again.',
        status: 'error',
      });
    }
  };

  return (
    <div className="relative h-screen bg-primary-dark">
      <div className="flex items-center justify-center h-full px-4">
        <div className="w-full max-w-md bg-primary-dark backdrop-blur-sm p-8 space-y-8">
          <div className="flex justify-center items-center h-[60px]">
            <h1 className="text-white text-4xl font-bold leading-tight">Log in!</h1>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <input
              type="text"
              placeholder="Your Username"
              value={displayName}
              onChange={(e) => {
                setDisplayName(e.target.value);
                setIncomplete(false);
              }}
              className="w-full px-4 py-3 bg-gray-100 text-gray-500 placeholder-gray-500 border-0 outline-none"
            />
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              autoComplete="off"
              onChange={(e) => {
                setPassword(e.target.value);
                setIncomplete(false);
              }}
              className="w-full px-4 py-3 bg-gray-100 text-gray-500 placeholder-gray-500 border-0 outline-none"
            />

            {incomplete && (
              <p className="text-center text-[#cd6155] font-semibold">
                Username and password must be at least 6 characters
              </p>
            )}

            <button
              type="submit"
              className="w-full mt-8 py-3 bg-gray-500 text-white font-sans hover:bg-gray-600 hover:shadow-xl transition-all"
            >
              Log in
            </button>
          </form>

          <div className="flex gap-1 justify-center">
            <span className="text-white">First time here?</span>
            <a href="/register" className="text-gray-400 hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute"
        style={{ top: isMobile ? '0.2rem' : '2rem', left: isMobile ? '0.2rem' : '2rem' }}
      >
        <button
          onClick={() => navigate('/')}
          className={`bg-white text-black ${isMobile ? 'px-3 py-1 text-sm' : 'px-6 py-3 text-base'} hover:bg-gray-100 transition`}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
