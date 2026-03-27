import type { FC } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../../../Assets/portfolio_General/profile-pic2.jpg';
import technologies from '../config/technologies.json';
import TechCard from './TechCard';

const AboutSection: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-8 px-4">
      <div className="flex flex-col items-center lg:w-2/3">
        <motion.img
          src={profilePic}
          alt="profile-pic"
          className="hexagon-shape mb-[2%] w-80 h-80 object-cover max-md:w-48 max-md:h-48"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1 } },
          }}
        />
        <motion.div
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-lg text-center"
        >
          <p>
            I'm a Full Stack Web Developer with a strong focus on backend development. I take
            ownership of technical solutions, ensuring high-quality and scalable results. I excel in
            collaboration, working closely with teams and clients to build efficient and adaptable
            systems.
            <br />
            <a href="#getInTouch" className="underline">
              Let's work together.
            </a>
          </p>
        </motion.div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 lg:w-1/3">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: index * 0.1 } },
            }}
          >
            <TechCard name={tech.name} avatar={tech.avatar} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
