import type { FC } from 'react';
import { motion } from 'framer-motion';
import nubceoImg from '../../../Assets/experience/nubceo.png';
import itglobersImg from '../../../Assets/experience/itGlobers.png';
import henryImg from '../../../Assets/education/henry.png';
import Background from './Background';

interface TimelineEntry {
  date: string;
  company: string;
  logo?: string;
  logoInvert?: boolean;
  badge?: string;
  role?: string;
  description: string;
  bullets?: string[];
  isFirst?: boolean;
  isLast?: boolean;
}

const timelineData: TimelineEntry[] = [
  {
    date: 'Aug. 2024 – Present',
    company: 'Nubceo',
    logo: nubceoImg,
    badge: 'Present',
    role: 'Backend Engineer',
    description: 'Backend Engineer specialized in fintech, with expertise in designing and scaling APIs and microservices using Node.js, TypeScript, PostgreSQL, and AWS. Full product lifecycle ownership across core modules — from requirements and architecture through implementation and production monitoring — including reconciliation, accounting, and promotions systems.',
    bullets: [
      'Proactive leadership in backend development, facilitating task management, work organization, and team coordination.',
      'Development of RESTful APIs for system integrations using Express.js and Fastify.',
      'Implementation of secure authentication and authorization with JWT and OAuth2.',
      'Performance and scalability optimization in cloud environments, including enhancements and integrations in serverless architectures with AWS Lambda, S3, DynamoDB, SQS, ECS, RDS, Secrets Manager, and CloudWatch.',
      'Design and development of scalable architectures, following best practices and clean architecture.',
      'Agile development with Scrum, participating in sprint planning, code reviews, and technical workshops to ensure continuous improvement.',
      'Development of multi-tenant architectures supporting complex financial operations across multiple companies and subsidiaries.',
      'Integration with third-party payment providers (e.g. MercadoPago, Rappi) to automate reconciliation and settlement processes.',
    ],
    isFirst: true,
  },
  {
    date: 'Apr. 2022 – Aug. 2024',
    company: 'ITGlobers',
    logo: itglobersImg,
    role: 'Backend Developer',
    description: 'Backend development for marketplaces, e-commerce, and other services, building scalable APIs and microservices using Node.js, TypeScript, and AWS. Experienced in taking leadership roles within projects, proactively assigning tasks, organizing workflows, and ensuring efficient development processes. Strong background in integrating e-commerce platforms like VTEX IO and designing robust and scalable architectures.',
    bullets: [
      'Proactive leadership in backend development, facilitating task management, work organization, and team coordination.',
      'Active participation in client meetings to gather requirements, design solution architectures, and present technical proposals aligned with business needs.',
      'Development of RESTful APIs for system integrations using Koa.js and Express.js.',
      'Implementation of secure authentication and authorization with JWT and OAuth2.',
      'Design and development of scalable architectures, following best practices and clean architecture.',
    ],
  },
  {
    date: 'Feb. 2022 – Jun. 2022',
    company: 'Henry Bootcamp',
    logo: henryImg,
    description: '1000 hours of theoretical-practical training. Technologies: JavaScript · Node.js · Express · PostgreSQL · Sequelize · React.js · Redux · HTML · CSS · SCRUM · GitHub',
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
          style={{ backgroundColor: entry.isFirst ? '#22d3ee' : '#0e7490' }}
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
          <h4 className="flex items-center text-white gap-2 flex-wrap">
            {entry.logo ? (
              <img
                src={entry.logo}
                alt={entry.company}
                width={40}
                className={entry.logoInvert ? 'invert' : ''}
              />
            ) : (
              <div className="w-10 h-10 bg-accent-green flex items-center justify-center rounded text-white font-bold text-lg flex-shrink-0">
                {entry.company[0]}
              </div>
            )}
            <strong>{entry.company}</strong>
            {entry.badge && (
              <span className="bg-accent-success text-white text-xs px-3 py-1 rounded-2xl">
                {entry.badge}
              </span>
            )}
          </h4>
          {entry.role && <p className="text-white font-semibold mt-2 text-sm">{entry.role}</p>}
          <p className="text-white mt-1 text-sm">{entry.description}</p>
          {entry.bullets && (
            <ul className="list-disc list-outside ml-5 mt-2 text-white text-sm space-y-1">
              {entry.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          )}
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
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.15 } },
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
