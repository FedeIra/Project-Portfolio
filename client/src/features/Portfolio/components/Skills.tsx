import type { FC } from 'react';
import { motion } from 'framer-motion';
import clientPic from '../../../Assets/images/skills/client.png';
import responsivePic from '../../../Assets/images/skills/responsive.png';
import qualityPic from '../../../Assets/images/skills/quality.png';
import dinamicPic from '../../../Assets/images/skills/dinamic.png';

interface SkillItem {
  image: string;
  title: string;
  description: string;
}

const skills: SkillItem[] = [
  { image: clientPic, title: 'Client-Focused', description: 'I engage with clients and take ownership of technical solutions.' },
  { image: responsivePic, title: 'Versatile', description: 'Strong backend skills with full stack adaptability.' },
  { image: qualityPic, title: 'Quality', description: "I'm not satisfied with anything less than the best quality I can deliver." },
  { image: dinamicPic, title: 'Collaborative', description: 'I communicate effectively and promote teamwork in all projects.' },
];

const Skills: FC = () => {
  const isMobile = window.innerWidth < 767;

  const boxVariants = isMobile
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1 } } }
    : { hidden: { opacity: 0, x: 1000 }, visible: { opacity: 1, x: 0, transition: { duration: 1 } } };

  return (
    <motion.div
      className="flex justify-center mb-[4%]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={boxVariants}
    >
      <div className="flex justify-center items-baseline flex-wrap w-3/4 max-md:w-full">
        {skills.map((skill) => (
          <div key={skill.title} className="w-1/2 md:w-1/4 flex flex-col items-center">
            <div className="relative w-40 h-40 mx-auto max-md:w-24 max-md:h-24 md:max-lg:w-32 md:max-lg:h-32 my-2.5">
              <div
                className="absolute inset-0 bg-[rgb(76,84,111)] hexagon-shape bg-cover bg-center"
                style={{ backgroundImage: `url(${skill.image})` }}
              />
            </div>
            <div className="flex flex-col justify-center items-center text-center max-md:text-sm">
              <h2 className="text-2xl font-normal max-md:text-lg">{skill.title}</h2>
              <p className="px-4 max-md:px-2">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
