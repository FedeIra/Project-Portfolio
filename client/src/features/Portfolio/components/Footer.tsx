import type { FC } from 'react';
import { FaLinkedin, FaWhatsapp, FaGithub, FaEnvelope } from 'react-icons/fa';

interface SocialLink {
  href: string;
  icon: typeof FaLinkedin;
  hoverClass: string;
}

const socialLinks: SocialLink[] = [
  { href: 'https://www.linkedin.com/in/federicoirarrazaval/', icon: FaLinkedin, hoverClass: 'hover:text-[#0077b5]' },
  { href: 'https://github.com/FedeIra', icon: FaGithub, hoverClass: 'hover:text-black hover:bg-white' },
  { href: 'mailto:fedeirar@gmail.com', icon: FaEnvelope, hoverClass: 'hover:text-[#0077b5]' },
  { href: 'https://api.whatsapp.com/send?phone=5491167887879&text=Hey', icon: FaWhatsapp, hoverClass: 'hover:text-green-500 hover:bg-white' },
];

const Footer: FC = () => (
  <footer className="flex flex-col items-center justify-center bg-primary-light w-full py-14">
    <div className="flex justify-around w-[300px]">
      {socialLinks.map(({ href, icon: Icon, hoverClass }) => (
        <a key={href} href={href} target="_blank" rel="noopener noreferrer">
          <button className={`bg-primary-dark p-3 text-white transition ${hoverClass}`}>
            <Icon size={24} />
          </button>
        </a>
      ))}
    </div>
    <p className="text-center text-sm mt-6">&copy; 2025 Federico Irarrazaval</p>
  </footer>
);

export default Footer;
