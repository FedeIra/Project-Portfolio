import { useState, useRef, type FC } from 'react';
import BackgroundCourses from './BackgroundCourses';
import BackgroundExperience from './BackgroundExperience';
import BackgroundEducation from './BackgroundEducation';

type AccordionKey = 'courses' | 'experience' | 'education' | null;

interface AccordionSectionProps {
  title: string;
  eventKey: AccordionKey;
  activeKey: AccordionKey;
  onToggle: (key: AccordionKey) => void;
  children: React.ReactNode;
}

const AccordionSection: FC<AccordionSectionProps> = ({ title, eventKey, activeKey, onToggle, children }) => {
  const isOpen = activeKey === eventKey;
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    const opening = !isOpen;
    onToggle(opening ? eventKey : null);
    if (opening) {
      setTimeout(() => {
        containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  return (
    <div ref={containerRef} className="border border-primary mx-[5%] mb-4" style={{ borderRadius: 0 }}>
      <button
        type="button"
        onClick={handleToggle}
        className="w-full text-left px-4 py-3 bg-white text-black font-bold flex justify-between items-center"
      >
        {title}
        <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className="bg-primary p-4">
          {children}
        </div>
      )}
    </div>
  );
};

const Background: FC = () => {
  const [activeKey, setActiveKey] = useState<AccordionKey>('courses');

  return (
    <div className="max-w-5xl mx-auto">
      <AccordionSection title="Programming Courses" eventKey="courses" activeKey={activeKey} onToggle={setActiveKey}>
        <BackgroundCourses />
      </AccordionSection>

      <AccordionSection title="Background Experience" eventKey="experience" activeKey={activeKey} onToggle={setActiveKey}>
        <BackgroundExperience />
      </AccordionSection>

      <AccordionSection title="Background Education" eventKey="education" activeKey={activeKey} onToggle={setActiveKey}>
        <BackgroundEducation />
      </AccordionSection>
    </div>
  );
};

export default Background;
