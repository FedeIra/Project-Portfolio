import type { FC } from 'react';
import TimelineCard from './TimelineCard';
import universityImg from '../../../Assets/education/university.png';
import molinosImg from '../../../Assets/education/molinos.png';
import henryImg from '../../../Assets/education/henry.png';

const entries = [
  {
    date: '2022',
    logo: henryImg,
    title: 'Henry Bootcamp',
    description:
      '1000 hours of theoretical-practical training. Technologies: JavaScript · Node.js · Express · PostgreSQL · Sequelize · React.js · Redux · HTML · CSS · SCRUM · GitHub',
    isFirst: true,
  },
  {
    date: '2017 - 2020',
    logo: universityImg,
    title: 'Pontifical Catholic University of Argentina',
    description: 'Specialization in Labor & Employment Law.',
  },
  {
    date: '2015 - 2016',
    logo: universityImg,
    title: 'Pontifical Catholic University of Argentina',
    description: 'Postgraduate courses in Labor & Employment Law and Legal Counselling.',
  },
  {
    date: '2007 - 2014',
    logo: universityImg,
    title: 'Pontifical Catholic University of Argentina',
    description: 'Lawyer.',
  },
  {
    date: '1994 - 2006',
    logo: molinosImg,
    title: 'Los Molinos',
    description: 'Bachelor.',
    isLast: true,
  },
];

const BackgroundEducation: FC = () => (
  <div className="max-w-4xl mx-auto">
    {entries.map((entry) => (
      <TimelineCard key={`${entry.title}-${entry.date}`} {...entry}>
        <p>{entry.description}</p>
      </TimelineCard>
    ))}
  </div>
);

export default BackgroundEducation;
