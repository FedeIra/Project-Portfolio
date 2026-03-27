import type { FC } from 'react';
import TimelineCard from './TimelineCard';
import bakerImg from '../../../Assets/experience/Baker.png';
import viviendaImg from '../../../Assets/experience/viviendaDigna.png';
import mansuetiImg from '../../../Assets/experience/mansueti.png';
import navarroImg from '../../../Assets/experience/navarro.png';

const entries = [
  {
    date: '2015 - 2022',
    logo: bakerImg,
    title: 'Baker McKenzie',
    description: 'Labour & Employment local and international advise and litigation. Executive and massive terminations, companies start-ups and shutdowns, local and international executive hires, employee compensation and benefits, bargaining of individual and collective employment agreements, labor relations and Trade Union counseling, employment and social security. Additionally, I led teams of junior and semi-senior lawyers and paralegals.',
    isFirst: true,
  },
  {
    date: '2014 - 2015',
    logo: viviendaImg,
    title: 'Vivienda Digna',
    description: 'Legal advice and handling collections (pro bono).',
  },
  {
    date: '2015 - 2015',
    logo: mansuetiImg,
    title: 'Mansueti Gallo & Sallette',
    description: 'Labour & Employment advise and litigation. Employee compensation and benefits, bargaining of individual agreements, labor relations and dismissals.',
  },
  {
    date: '2008 - 2009',
    logo: navarroImg,
    title: 'Navarro Castex',
    description: 'Legal support in litigation, translation and case law research.',
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
