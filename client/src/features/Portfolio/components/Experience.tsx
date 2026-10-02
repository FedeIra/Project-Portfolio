import type { FC } from "react";
import { motion } from "framer-motion";
import nubceoImg from "../../../Assets/experience/nubceo.png";
import itglobersImg from "../../../Assets/experience/itGlobers.png";

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
    role: "Senior Backend Engineer",
    description:
      "Senior Backend Engineer working end to end: from requirements with the CFO and business stakeholders to functional definition, architecture and delivery. Platforms: payment reconciliation (co-led), promotions, accounting automation (contributor).",
    bullets: [
      "Co-led the payment reconciliation platform build with the tech lead; since 2025, lead all new sales reconciliation work: multi-tenant, per-client rules, AWS SQS, audit trails; 1M+ transactions/week per client, 97% auto-reconciled, 95% less processing time.",
      "Informal lead on reconciliation initiatives and other cross-functional projects (backend, frontend, QA): define product scope with the CFO and stakeholders, write the functional specs and backend technical specs, contribute to frontend definitions as the team's go-to person on the product, coordinate the team, review all PRs and report status.",
      "Co-built a production MCP server in TypeScript: tools, prompts and resources exposing internal APIs over stdio and streamable HTTP, running authenticated and multi-tenant.",
      "Shipped two user-selectable LLM integrations (Claude, Gemini): reconciliation-sequence suggestions for the ~3% the engine cannot close (the model proposes, a person approves) and promotion PDF-to-JSON extraction.",
      "Designed and built the promotions platform: full CRUD and an async matching engine that tags each sale with the promotion applied, enabling promotion ROI analysis.",
      "Core contributor to event-driven accounting automation: real-time, multi-currency general ledger entries.",
    ],
    isFirst: true,
  },
  {
    date: "Apr. 2022 – Aug. 2024",
    company: "ITGlobers",
    logo: itglobersImg,
    role: "Backend Engineer",
    description:
      "Backend Engineer building integrations between client ERPs and VTEX IO for e-commerce and marketplace clients.",
    bullets: [
      "Built 20+ integrations between client ERPs and VTEX IO: order-status flows, inventory sync, 6+ payment platforms, Google Analytics, and bulk-load scripts handling 100K+ sales.",
      "Built REST APIs and microservices with Node.js, TypeScript, Koa.js, Express.js and AWS (Lambda, SQS, SNS, CloudWatch).",
      "Gathered client requirements, defined functional solutions and proposed architectures; led task assignment.",
    ],
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
