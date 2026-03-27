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
    { href: '#projects', label: 'Personal Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#getInTouch', label: 'Get in touch' },
    { href: '#userComments', label: 'Post comments' },
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/federicoirarrazaval/', icon: FaLinkedin },
    { href: 'https://github.com/FedeIra', icon: FaGithub },
    { href: 'mailto:fedeirar@gmail.com', icon: FaEnvelope },
    { href: 'https://api.whatsapp.com/send?phone=5491167887879&text=Hey', icon: FaWhatsapp },
  ];

  return (
    <nav className="fixed top-0 w-full bg-primary-light text-white text-xl z-50 md:bg-primary-light max-md:bg-primary-dark">
      <div className="flex items-center justify-between px-[5%] py-3">
        <a href="#landing">
          <img src={portfolioImg} alt="portfolio" width={30} className="invert ml-4" />
        </a>

        <a href="#getInTouch" className="text-white ml-4 lg:hidden">
          Get in touch!
        </a>

        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div className={`lg:flex items-center gap-2 ${menuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-primary-dark p-4' : 'hidden'}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-white ml-4 hover:underline no-underline"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <div className="relative ml-4">
            <button
              onClick={() => setResumeOpen(!resumeOpen)}
              className="text-white hover:underline"
            >
              Resume
            </button>
            {resumeOpen && (
              <div className="absolute top-full left-0 bg-white text-black rounded shadow-lg mt-1 min-w-[150px] z-50">
                <button
                  onClick={() => { window.open(cvEnglish); setResumeOpen(false); }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-base"
                >
                  English
                </button>
                <button
                  onClick={() => { window.open(cvSpanish); setResumeOpen(false); }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-base"
                >
                  Spanish
                </button>
                <hr className="border-gray-200" />
                <button
                  onClick={() => { window.open(cvBoth); setResumeOpen(false); }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-base"
                >
                  Both Languages
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-1 lg:absolute lg:right-[5%]">
            {socialLinks.map(({ href, icon: Icon }) => (
              <a key={href} href={href} target="_blank" rel="nofollow noreferrer">
                <button className="p-2 text-white hover:opacity-80">
                  <Icon size={27} />
                </button>
              </a>
            ))}

            {user?.token ? (
              <div className="relative group ml-2">
                <button className="text-white">{user.username}</button>
                <div className="hidden group-hover:block absolute top-full right-0 bg-white text-black rounded shadow-lg">
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex gap-2 ml-2">
                <button
                  onClick={() => navigate('/login')}
                  className="border border-white text-white px-4 py-1 hover:bg-white/10 transition"
                >
                  Log In
                </button>
                <button
                  onClick={() => navigate('/register')}
                  className="border border-white text-white px-4 py-1 hover:bg-white/10 transition"
                >
                  Register
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
