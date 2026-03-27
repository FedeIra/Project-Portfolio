import type { FC } from 'react';
import { motion } from 'framer-motion';
import itglobersImg from '../../../Assets/experience/itGlobers.png';
import portfolioImg from '../../../Assets/portfolio_General/portfolio-image.png';
import kinemaLogo from '../../../Assets/projects/KinemaLogo.png';
import gamingLogo from '../../../Assets/projects/gamingLogo.png';
import henryImg from '../../../Assets/education/henry.png';
import Background from './Background';

interface TimelineEntry {
  date: string;
  company: string;
  logo: string;
  logoInvert?: boolean;
  badge?: string;
  role?: string;
  description: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const timelineData: TimelineEntry[] = [
  {
    date: 'Aug. 2022 - Current',
    company: 'ITGlobers',
    logo: itglobersImg,
    badge: 'Present',
    role: 'Backend Developer:',
    description: `I contributed to multiple backend projects, focusing on system integration, architecture optimization, and automation. My responsibilities included leading technical initiatives, and maintaining direct communication with clients to ensure project success.`,
    isFirst: true,
  },
  {
    date: 'Jul. 2022 - Aug. 2022',
    company: 'Project Portfolio',
    logo: portfolioImg,
    logoInvert: true,
    description: 'Building my portfolio using the following tools: Javascript | Node.js | Express.js | AWS S3 | JWT and Passport | MongoDB | JSON | Email.js | React.js | Redux | HTML | CSS | Chakra UI | Bootstrap | Vercel | Railway | GitHub',
  },
  {
    date: 'Jun. 2022 - Jul. 2022',
    company: 'Project Kinema',
    logo: kinemaLogo,
    description: 'Team project to build a movie and TV show streaming service that includes the following features: Third-party authentication with Google; Stripe payment platform integration; Combined filters; Image loading with Cloudinary; E-mail and live notifications; Logic user delete; Redux persist; Likes and review system; and Dashboard admin. and owner.',
  },
  {
    date: 'May. 2022 - Jun. 2022',
    company: 'Project Gaming & Beyond',
    logo: gamingLogo,
    description: 'Individual Project to build a single page application consisting of videogames information with the following features: Interaction with API data; Combined filters and sorts; Paginate; and User can create, modify and delete added videogames.',
  },
  {
    date: 'Mar. 2022 - Jul. 2022',
    company: 'Henry Bootcamp',
    logo: henryImg,
    description: '1000 hours of a theoretical-practical course. Technologies: Javascript | Node.js | Express | PostgreSQL | Sequelize | React.js | Redux.js | HTML | CSS | SCRUM | GitHub',
    isLast: true,
  },
];

const TimelineItem: FC<{ entry: TimelineEntry }> = ({ entry }) => (
  <div className="flex">
    {/* Timeline indicator */}
    <div className="hidden sm:flex flex-col items-center w-1/4">
      <div className="flex-1 w-full flex">
        {!entry.isFirst ? (
          <>
            <div className="w-1/2 border-r border-gray-400" />
            <div className="w-1/2" />
          </>
        ) : (
          <>
            <div className="w-1/2" />
            <div className="w-1/2" />
          </>
        )}
      </div>
      <div className="m-0">
        <span
          className="inline-block w-4 h-4 rounded-full border border-white"
          style={{ backgroundColor: entry.isFirst ? '#2ECC71' : '#198754' }}
        />
      </div>
      <div className="flex-1 w-full flex">
        {!entry.isLast ? (
          <>
            <div className="w-1/2 border-r border-gray-400" />
            <div className="w-1/2" />
          </>
        ) : (
          <>
            <div className="w-1/2" />
            <div className="w-1/2" />
          </>
        )}
      </div>
    </div>

    {/* Card */}
    <div className="flex-1 py-2">
      <div className="bg-primary-dark border-0" style={{ borderRadius: 0 }}>
        <div className="p-4">
          <div className="float-right text-white">
            <p className="text-sm max-sm:text-xs">{entry.date}</p>
          </div>
          <h4 className="flex items-center text-white gap-2">
            <img
              src={entry.logo}
              alt={entry.company}
              width={40}
              className={entry.logoInvert ? 'invert' : ''}
            />
            <strong>{entry.company}</strong>
            {entry.badge && (
              <span className="ml-2 bg-accent-success text-white text-sm px-3 py-1 rounded-2xl">
                {entry.badge}
              </span>
            )}
          </h4>
          {entry.role && <p className="text-white font-bold mt-2">{entry.role}</p>}
          <p className="text-white mt-1 text-base">{entry.description}</p>
        </div>
      </div>
    </div>
  </div>
);

const Experience: FC = () => {
  const isMobile = window.innerWidth < 769;

  const boxVariants = isMobile
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1 } } }
    : { hidden: { opacity: 0, x: -1000 }, visible: { opacity: 1, x: 0, transition: { duration: 1 } } };

  return (
    <div id="experience" className="w-full">
      <motion.h2
        className="section-heading"
        initial={isMobile ? 'visible' : 'hidden'}
        whileInView="visible"
        viewport={{ once: true }}
        variants={boxVariants}
      >
        Experience
      </motion.h2>

      <div className="max-w-5xl mx-auto px-4">
        {timelineData.map((entry, index) => (
          <motion.div
            key={entry.company}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: -1000 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 + index * 0.5 } },
            }}
          >
            <TimelineItem entry={entry} />
          </motion.div>
        ))}
      </div>

      <div className="mt-16">
        <motion.h2
          className="section-heading"
          initial={isMobile ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true }}
          variants={boxVariants}
        >
          Background
        </motion.h2>
        <Background />
      </div>
    </div>
  );
};

export default Experience;
