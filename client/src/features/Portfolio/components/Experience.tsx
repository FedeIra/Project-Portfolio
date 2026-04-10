import type { FC } from "react";
import { motion } from "framer-motion";
import nubceoImg from "../../../Assets/experience/nubceo.png";
import itglobersImg from "../../../Assets/experience/itGlobers.png";
import henryImg from "../../../Assets/education/henry.png";

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
    date: "Aug. 2024 – Present",
    company: "Nubceo",
    logo: nubceoImg,
    badge: "Present",
    role: "Backend Engineer",
    description:
      "Senior Backend Engineer leading fintech systems architecture. Own product lifecycle end-to-end: payment reconciliation (automating cash flow integrity), accounting automation (real-time GL entries), promotion analytics (ROI dashboards). Tech: Node.js, TypeScript, PostgreSQL, AWS. Leadership: Team coordination, task organization, architectural decisions with business alignment.",
    bullets: [
      "Designed payment reconciliation engine processing hundreds of thousands of daily sales with 97% automatic reconciliation rate, eliminating manual cash flow discrepancies (95% time reduction).",
      "Built event-driven accounting automation: developed general ledger entry system generating real-time GL records with automated journal entry posting and multi-currency support.",
      "Architected promotion intelligence platform: designed promotion tagging system automatically categorizing sales transactions with promotion metadata, enabling data-driven ROI analysis and pricing optimization dashboards.",
      "Led team coordination on complex financial systems: gathering requirements from CFO, defining architecture, development  and presenting solutions to stakeholders.",
      "Multi-tenant architecture supporting N customers with independent rules (chart of accounts, tax treatments, payment providers).",
      "Queue-based async processing: SQS for scalability,  audit trails for compliance.",
      "Tech leadership: code reviews, architectural decisions, mentoring on developers.",
    ],
    isFirst: true,
  },
  {
    date: "Apr. 2022 – Aug. 2024",
    company: "ITGlobers",
    logo: itglobersImg,
    role: "Backend Developer",
    description:
      "Backend Engineer developing new e-commerce and marketplace features. Led backend initiatives building scalable APIs (Express.js, Koa.js) for complex marketplace integrations (VTEX IO). Took ownership of task assignment, workflow organization, requirement gathering with clients. Tech: Node.js, TypeScript, AWS. Focus: clean architecture, API design, system scalability.",
    bullets: [
      "Developed new e-commerce and marketplace features: designed and implemented backend functionality for product catalogs, order management, marketplace integrations, intelligent product recommendations based on customer search metrics, advanced search capabilities, web scraping systems, Google Analytics integrations, and ERP system integrations.",
      "Led backend initiatives: task assignment, workflow organization, client requirement gathering for feature development.",
      "Designed solution architectures for new features presented to business stakeholders (VTEX IO integrations, marketplace platforms, e-commerce modules).",
      "Built RESTful APIs (Koa.js, Express.js) with JWT/OAuth2 authentication for new marketplace capabilities.",
      "Scalable architecture: clean code patterns, system design enabling feature growth and marketplace expansion.",
    ],
  },
  {
    date: "Feb. 2022 – Jun. 2022",
    company: "Henry Bootcamp",
    logo: henryImg,
    description:
      "1000 hours of theoretical-practical training. Technologies: JavaScript · Node.js · Express · PostgreSQL · Sequelize · React.js · Redux · HTML · CSS · SCRUM · GitHub",
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
          style={{ backgroundColor: entry.isFirst ? "#22d3ee" : "#0e7490" }}
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
                className={entry.logoInvert ? "invert" : ""}
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
          {entry.role && (
            <p className="text-white font-semibold mt-2 text-sm">
              {entry.role}
            </p>
          )}
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
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
      }
    : {
        hidden: { opacity: 0, x: -1000 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
      };

  return (
    <div id="experience" className="w-full">
      <motion.h2
        className="section-heading"
        initial={isMobile ? "visible" : "hidden"}
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
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: index * 0.15 },
              },
            }}
          >
            <TimelineItem entry={entry} />
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Experience;
