import { useState, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaWhatsapp, FaGithub, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { logout } from '../../Auth/state/authSlice';
import { showToast } from '../../../utils/toast';
import portfolioImg from '../../../Assets/portfolio_General/portfolio-image.png';
import cvEnglish from '../../../Assets/resumesCV/cv_english.pdf';
import cvSpanish from '../../../Assets/resumesCV/cv_spanish.pdf';
import cvBoth from '../../../Assets/resumesCV/cv_both.pdf';

const NavBar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    showToast({ title: 'Logged out.', description: 'You have been logged out.', status: 'success' });
  };

  const navLinks = [
    { href: '#aboutMe', label: 'About me' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#getInTouch', label: 'Get in touch' },
    { href: '#userComments', label: 'Comments' },
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/federicoirarrazaval/', icon: FaLinkedin, hoverClass: 'hover:text-[#0077b5]' },
    { href: 'https://github.com/FedeIra', icon: FaGithub, hoverClass: 'hover:text-black hover:bg-white' },
    { href: 'mailto:fedeirar@gmail.com', icon: FaEnvelope, hoverClass: 'hover:text-[#0077b5]' },
    { href: 'https://api.whatsapp.com/send?phone=5491167887879&text=Hey', icon: FaWhatsapp, hoverClass: 'hover:text-green-500 hover:bg-white' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-primary-light text-white z-50">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#landing" className="flex-shrink-0">
          <img src={portfolioImg} alt="portfolio" width={30} className="invert ml-2" />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1 text-sm flex-1 px-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-white px-2 py-1 hover:underline whitespace-nowrap"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <div className="relative px-2">
            <button
              onClick={() => setResumeOpen(!resumeOpen)}
              className="text-white hover:underline whitespace-nowrap"
            >
              Resume
            </button>
            {resumeOpen && (
              <div className="absolute top-full left-0 bg-white text-black rounded shadow-lg mt-1 min-w-[150px] z-50">
                <button
                  onClick={() => { window.open(cvEnglish); setResumeOpen(false); }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  English
                </button>
                <button
                  onClick={() => { window.open(cvSpanish); setResumeOpen(false); }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  Spanish
                </button>
                <hr className="border-gray-200" />
                <button
                  onClick={() => { window.open(cvBoth); setResumeOpen(false); }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  Both Languages
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Desktop social + auth */}
        <div className="hidden lg:flex items-center gap-1 flex-shrink-0">
          {socialLinks.map(({ href, icon: Icon, hoverClass }) => (
            <a key={href} href={href} target="_blank" rel="nofollow noreferrer">
              <button className={`p-2 text-white transition ${hoverClass}`}>
                <Icon size={22} />
              </button>
            </a>
          ))}

          {user?.token ? (
            <div className="relative group ml-2">
              <button className="text-white text-sm">{user.username}</button>
              <div className="hidden group-hover:block absolute top-full right-0 bg-white text-black rounded shadow-lg">
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap text-sm"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-1 ml-2">
              <button
                onClick={() => navigate('/login')}
                className="border border-white text-white px-3 py-1 text-sm hover:bg-white/10 transition"
              >
                Log In
              </button>
              <button
                onClick={() => navigate('/register')}
                className="border border-white text-white px-3 py-1 text-sm hover:bg-white/10 transition"
              >
                Register
              </button>
            </div>
          )}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white p-2">
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col bg-primary-dark px-6 py-4 gap-3 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-white hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <div className="relative">
            <button
              onClick={() => setResumeOpen(!resumeOpen)}
              className="text-white hover:underline"
            >
              Resume
            </button>
            {resumeOpen && (
              <div className="bg-white text-black rounded shadow-lg mt-1 min-w-[150px]">
                <button
                  onClick={() => { window.open(cvEnglish); setResumeOpen(false); setMenuOpen(false); }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  English
                </button>
                <button
                  onClick={() => { window.open(cvSpanish); setResumeOpen(false); setMenuOpen(false); }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Spanish
                </button>
                <button
                  onClick={() => { window.open(cvBoth); setResumeOpen(false); setMenuOpen(false); }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Both Languages
                </button>
              </div>
            )}
          </div>

          <div className="flex gap-1 mt-1">
            {socialLinks.map(({ href, icon: Icon, hoverClass }) => (
              <a key={href} href={href} target="_blank" rel="nofollow noreferrer">
                <button className={`p-2 text-white transition ${hoverClass}`}>
                  <Icon size={22} />
                </button>
              </a>
            ))}
          </div>

          {user?.token ? (
            <button onClick={handleLogout} className="text-white text-left hover:underline">
              Logout ({user.username})
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => { navigate('/login'); setMenuOpen(false); }}
                className="border border-white text-white px-4 py-1 hover:bg-white/10 transition"
              >
                Log In
              </button>
              <button
                onClick={() => { navigate('/register'); setMenuOpen(false); }}
                className="border border-white text-white px-4 py-1 hover:bg-white/10 transition"
              >
                Register
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
