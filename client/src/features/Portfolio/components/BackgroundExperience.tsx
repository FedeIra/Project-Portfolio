import type { FC } from 'react';
import TimelineCard from './TimelineCard';
import bakerImg from '../../../Assets/experience/Baker.png';

const entries = [
  {
    date: '2015 - 2022',
    logo: bakerImg,
    title: 'Baker McKenzie',
    description: `Senior associate at a top-tier international law firm, leading a team of junior and semi-senior lawyers and paralegals on complex employment and labor matters for multinational clients. Responsibilities included advising on executive hires and terminations, cross-border restructurings, compensation and benefits design, collective bargaining, and employment litigation — working directly with HR executives, C-suite stakeholders, and international counterparts to deliver tailored legal solutions aligned with business objectives.`,
    isFirst: true,
    isLast: true,
  },
];

const BackgroundExperience: FC = () => (
  <div className="max-w-4xl mx-auto">
    {entries.map((entry) => (
      <TimelineCard key={entry.title} {...entry}>
        <p>{entry.description}</p>
      </TimelineCard>
    ))}
  </div>
);

export default BackgroundExperience;
