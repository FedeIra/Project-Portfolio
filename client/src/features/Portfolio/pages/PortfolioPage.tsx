import { useEffect, type FC } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsChevronDoubleUp } from 'react-icons/bs';

import Landing from '../components/Landing';
import Skills from '../components/Skills';
import AboutSection from '../components/AboutSection';
import Projects from '../components/Projects';
import OtherProjects from '../components/OtherProjects';
import Experience from '../components/Experience';
import Contact from '../../Contact/components/Contact';
import Comments from '../../Comments/components/Comments';
import Footer from '../components/Footer';

const PortfolioPage: FC = () => {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const navBarLinks = document.getElementsByClassName('nav-link');
      const sections = ['aboutMe', 'projects', 'experience', 'getInTouch', 'userComments'];
      const elements = sections.map((id) => document.getElementById(id));

      if (elements.some((el) => !el)) return;

      const linksArray = Array.from(navBarLinks) as HTMLElement[];
      const positions = elements.map((el) => el!.getBoundingClientRect().top);
      const len = Math.min(linksArray.length, sections.length);

      for (let i = 0; i < len; i++) {
        linksArray[i].style.textDecoration = positions[i] < 1 ? 'underline' : 'none';
        if (positions[i] < 1) {
          for (let j = 0; j < len; j++) {
            if (j !== i) linksArray[j].style.textDecoration = 'none';
          }
        }
      }
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const boxVariants = {
    hidden: { opacity: 0, x: window.innerWidth < 767 ? 0 : -1000 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div>
      <Landing />
      <div className="flex flex-col items-center text-[17px]">
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="fixed bottom-4 right-2 m-4 bg-white border-none rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform z-50 text-black"
        >
          <BsChevronDoubleUp size={20} />
        </button>

        <div className="w-full mt-[3%] mb-[5%] px-4">
          <motion.h2
            className="section-heading"
            initial={window.innerWidth < 769 ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={{ once: true }}
            variants={boxVariants}
            id="aboutMe"
          >
            About me
          </motion.h2>

          <Skills />
          <AboutSection />
        </div>

        <Projects />
        <OtherProjects />
        <Experience />
        <br />
        <Contact />
        <Comments />
        <Footer />
      </div>
    </div>
  );
};

export default PortfolioPage;
