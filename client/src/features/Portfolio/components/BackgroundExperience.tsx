import type { FC } from 'react';
import TimelineCard from './TimelineCard';
import bakerImg from '../../../Assets/experience/Baker.png';

const entries = [
  {
    date: 'Aug 2015 – Feb 2022',
    logo: bakerImg,
    title: 'Baker McKenzie',
    description: `Senior Attorney · Labor & Employment. Led teams of paralegals and junior attorneys advising local and multinational companies on cross-border negotiations, M&A due diligence, compliance and litigation.`,
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
