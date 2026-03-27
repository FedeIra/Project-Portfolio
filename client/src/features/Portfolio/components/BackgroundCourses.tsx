import type { FC } from 'react';
import { FaEye } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getFileAsync } from '../state/fileSlice';
import { showToast } from '../../../utils/toast';
import TimelineCard from './TimelineCard';
import coursesData from '../config/backgroundCourses.json';
import type { Course } from '../../../utils/types';
import platziImg from '../../../Assets/courses/platzi.png';

const courseIcons = import.meta.glob('../../../assets/images/course-icons/*.png', { eager: true }) as Record<string, { default: string }>;

const BackgroundCourses: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const handleGetFile = (key?: string) => {
    if (!key) return;
    if (!user?.token) {
      showToast({ description: 'Please log in to view file.', status: 'error' });
      return;
    }
    void dispatch(getFileAsync({ token: user.token, fileName: key }));
  };

  const getIcon = (picture: string): string => {
    const match = Object.keys(courseIcons).find((k) => k.endsWith(`/${picture}`));
    return match ? courseIcons[match].default : '';
  };

  // First hardcoded course (Platzi EC2)
  const firstCourse = {
    date: '2024',
    title: 'Platzi',
    description: 'AWS. Amazon Elastic Compute Cloud (EC2).',
    key: 'Certificado Platzi. AWS. Cómputo con EC2.pdf',
  };

  return (
    <div className="max-w-4xl mx-auto">
      <TimelineCard
        date={firstCourse.date}
        logo={platziImg}
        title={firstCourse.title}
        isFirst
      >
        <p>{firstCourse.description}</p>
        <button
          onClick={() => handleGetFile(firstCourse.key)}
          className="text-white hover:text-gray-300 mt-2"
        >
          <FaEye size={20} />
        </button>
      </TimelineCard>

      {(coursesData as Course[]).map((course, index) => (
        <TimelineCard
          key={`${course.title}-${course.date}-${index}`}
          date={course.date}
          logo={getIcon(course.picture)}
          title={course.title}
          isLast={index === coursesData.length - 1}
        >
          <p>{course.description}</p>
          {course.key && (
            <button
              onClick={() => handleGetFile(course.key)}
              className="text-white hover:text-gray-300 mt-2"
            >
              <FaEye size={20} />
            </button>
          )}
        </TimelineCard>
      ))}
    </div>
  );
};

export default BackgroundCourses;
