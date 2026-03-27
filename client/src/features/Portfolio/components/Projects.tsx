import { useState, type FC } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaGlobe, FaStar } from 'react-icons/fa';
import kinemaImg from '../../../Assets/projects/Kinema2.png';
import kinemaLogo from '../../../Assets/projects/KinemaLogo.png';
import gamingImg from '../../../Assets/projects/gaming&beyond1.png';
import gamingLogo from '../../../Assets/projects/gamingLogo.png';
import ProjectCarousel from './ProjectCarousel';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  logo: string;
  siteUrl: string;
  codeUrl: string;
  award?: string;
  carouselType: 'kinema' | 'gaming';
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, image, logo, siteUrl, codeUrl, award, carouselType }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full lg:w-[400px] mb-8 group">
      <div className="bg-white shadow-[0_0_30px_rgba(0,0,0,0.5)] max-h-full pb-5 transition-transform duration-1000 hover:scale-105">
        {/* Image with overlay */}
        <div className="relative overflow-hidden">
          <img src={image} alt={title} className="w-full rounded-none" />
          <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-100 flex flex-col items-center justify-center text-white">
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <button
              onClick={() => setShowModal(true)}
              className="rounded-full border-[3px] border-white px-6 py-4 text-lg hover:bg-white/20 transition"
            >
              Preview!
            </button>
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center -mt-20 group-hover:hidden">
          <img src={logo} alt={`${title}-logo`} className="w-[130px] h-[130px] rounded-full border-4 border-gray-500" />
        </div>

        {/* Text */}
        <div className="py-8 text-center text-gray-600">
          <h2 className="uppercase font-black mb-5">{title}</h2>
          <p className="px-9 text-sm md:text-base">{description}</p>
          {award && (
            <div className="flex items-center justify-center gap-1 mt-2 group-hover:hidden">
              <FaStar size={22} color="orange" />
              <p className="text-sm">{award}</p>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4">
          <a href={siteUrl} target="_blank" rel="nofollow noreferrer">
            <button className="bg-blue-600 text-white px-5 py-2 flex items-center gap-2 hover:bg-blue-700 transition">
              View Site <FaGlobe size={22} />
            </button>
          </a>
          <a href={codeUrl} target="_blank" rel="nofollow noreferrer">
            <button className="bg-gray-600 text-white px-5 py-2 flex items-center gap-2 hover:bg-gray-700 transition">
              View Code <FaGithub size={22} />
            </button>
          </a>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setShowModal(false)}>
          <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="bg-black border border-white border-b-[3px] border-b-gray-500">
              <ProjectCarousel type={carouselType} />
            </div>
            <div className="bg-white p-4 flex justify-end">
              <button onClick={() => setShowModal(false)} className="text-black text-2xl font-bold hover:text-gray-600">
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Projects: FC = () => {
  const isMobile = window.innerWidth < 769;

  const boxVariants = isMobile
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1 } } }
    : { hidden: { opacity: 0, x: -1000 }, visible: { opacity: 1, x: 0, transition: { duration: 1 } } };

  const boxVariants2 = isMobile
    ? boxVariants
    : { hidden: { opacity: 0, x: 1000 }, visible: { opacity: 1, x: 0, transition: { duration: 1 } } };

  return (
    <div id="projects" className="w-full">
      <motion.h2
        className="section-heading"
        initial={isMobile ? 'visible' : 'hidden'}
        whileInView="visible"
        viewport={{ once: true }}
        variants={boxVariants}
      >
        Personal Projects
      </motion.h2>

      <motion.div
        className="flex flex-col lg:flex-row justify-center items-start gap-8 px-8 lg:px-24 mt-[2%] mb-[5%]"
        initial={isMobile ? 'visible' : 'hidden'}
        whileInView="visible"
        viewport={{ once: true }}
        variants={boxVariants2}
      >
        <ProjectCard
          title="Kinema"
          description="Kinema is a movie and TV Show streaming website with the following features: Third-party authentication with Google; Stripe payment platform integration; Combined filters; Image loading with Cloudinary; E-mail and live notifications; Logic for user removal; Rating and review system; and Admin. and owner dashboard."
          image={kinemaImg}
          logo={kinemaLogo}
          siteUrl="https://kinema-showcase.vercel.app/"
          codeUrl="https://github.com/PG-Movies-Group-1/Kinema-Project"
          award="Selected by Henry among the best 4 projects of the course."
          carouselType="kinema"
        />
        <ProjectCard
          title="Gaming & Beyond"
          description="G&B is a gaming website with the following features: Search engine; Combined filters and sorts; Paging; User interaction to create, delete and modify videogames added by users."
          image={gamingImg}
          logo={gamingLogo}
          siteUrl="https://gaming-beyond-v2.vercel.app/"
          codeUrl="https://github.com/FedeIra/Project-Gaming-Beyond-v2"
          carouselType="gaming"
        />
      </motion.div>
    </div>
  );
};

export default Projects;
