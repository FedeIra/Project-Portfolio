import { useState, type FC, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import { signupAsync } from '../state/authSlice';
import { showToast } from '../../../utils/toast';

const RegisterPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMobile = window.innerWidth < 769;

  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [validName, setValidName] = useState(true);
  const [validPass, setValidPass] = useState(true);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (displayName.length < 6) {
      setValidName(false);
      return;
    }
    if (password.length < 6) {
      setValidPass(false);
      return;
    }

    try {
      await dispatch(signupAsync({ username: displayName, password })).unwrap();
      showToast({ title: 'Welcome!', description: 'You are now registered.', status: 'success' });
      setTimeout(() => navigate('/login'), 1000);
    } catch (error: any) {
      showToast({
        title: 'Error.',
        description: typeof error === 'string' ? error : 'Error signing up. Please try again.',
        status: 'error',
      });
    }
  };

  return (
    <div className="relative h-screen bg-primary-dark">
      <div className="flex items-center justify-center h-full px-4">
        <div className="w-full max-w-md bg-primary-dark backdrop-blur-sm p-8 space-y-8">
          <div className="flex justify-center items-center h-[60px]">
            <h1 className="text-white text-4xl font-bold leading-tight">Sign Up!</h1>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-1">
            <input
              type="text"
              placeholder="Username"
              value={displayName}
              onChange={(e) => {
                setDisplayName(e.target.value);
                setValidName(true);
              }}
              className="w-full px-4 py-3 bg-gray-100 text-gray-500 placeholder-gray-500 border-0 outline-none"
            />
            {!validName && (
              <p className="text-center text-[#cd6155] font-semibold">
                Username must be at least 6 characters long
              </p>
            )}

            <input
              type="password"
              placeholder="Password"
              value={password}
              autoComplete="off"
              onChange={(e) => {
                setPassword(e.target.value);
                setValidPass(true);
              }}
              className="w-full px-4 py-3 mt-5 bg-gray-100 text-gray-500 placeholder-gray-500 border-0 outline-none"
            />
            {!validPass && (
              <p className="text-center text-[#cd6155] font-semibold">
                Password must be at least 6 characters long
              </p>
            )}

            <button
              type="submit"
              className="w-full mt-8 py-3 bg-gray-500 text-white font-sans hover:bg-gray-600 hover:shadow-xl transition-all"
            >
              Sign Up
            </button>
          </form>

          <div className="flex gap-1 justify-center">
            <span className="text-white">Are you already registered?</span>
            <a href="/login" className="text-gray-400 hover:underline">
              Log in
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute"
        style={{ top: isMobile ? '0.5rem' : '2rem', left: isMobile ? '0.5rem' : '2rem' }}
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

export default RegisterPage;
