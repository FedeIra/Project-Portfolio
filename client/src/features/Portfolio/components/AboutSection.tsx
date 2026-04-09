import type { FC } from "react";
import { motion } from "framer-motion";
import profilePic from "../../../Assets/portfolio_General/profile-pic2.jpg";
import technologies from "../config/technologies.json";
import TechCard from "./TechCard";

const iconModules = import.meta.glob(
  "../../../assets/images/tech-icons/*.png",
  { eager: true },
) as Record<string, { default: string }>;
const visibleTechnologies = technologies.filter((tech) =>
  Object.keys(iconModules).some((k) => k.endsWith(`/${tech.avatar}`)),
);

const AboutSection: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-6 px-4">
      <div className="flex flex-col items-center lg:w-2/5">
        <motion.img
          src={profilePic}
          alt="profile-pic"
          className="hexagon-shape mb-[2%] w-80 h-80 object-cover max-md:w-48 max-md:h-48 brightness-110 contrast-95"
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
            Backend Engineer building financial and marketplace solutions. I
            design and deliver complete solutions: from client requirements to
            scalable architecture to production. Technical leader who
            contributes to product strategy. Node.js, TypeScript, PostgreSQL,
            AWS, VTEX. Full-stack capable (React when needed). I actively use
            AI-assisted development tools in my daily workflow.
            <br />
            <a href="#getInTouch" className="underline">
              Let's work together.
            </a>
          </p>
        </motion.div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 lg:w-1/3">
        {visibleTechnologies.map((tech, index) => (
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
