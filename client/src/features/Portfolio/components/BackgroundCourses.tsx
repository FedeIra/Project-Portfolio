import type { FC } from 'react';
import { FaEye, FaCog } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getFileAsync } from '../state/fileSlice';
import { showToast } from '../../../utils/toast';
import coursesData from '../config/backgroundCourses.json';
import type { Course } from '../../../utils/types';
import platziImg from '../../../Assets/courses/platzi.png';

const courseIcons = import.meta.glob('../../../assets/images/course-icons/*.png', { eager: true }) as Record<string, { default: string }>;

const getIcon = (picture: string): string => {
  const match = Object.keys(courseIcons).find((k) => k.endsWith(`/${picture}`));
  return match ? courseIcons[match].default : platziImg;
};

interface CourseRowProps {
  date: string;
  logo: string;
  title: string;
  description: string;
  courseKey?: string;
  onView: (key?: string) => void;
}

const CourseRow: FC<CourseRowProps> = ({ date, logo, title, description, courseKey, onView }) => (
  <div className="flex items-center gap-3 bg-primary-dark px-3 py-2 mb-1">
    <img src={logo} alt={title} width={24} height={24} className="flex-shrink-0 object-contain" />
    <div className="flex-1 min-w-0">
      <span className="text-white font-semibold text-sm">{title} — </span>
      <span className="text-gray-300 text-sm">{description}</span>
    </div>
    <span className="text-gray-400 text-xs flex-shrink-0 ml-2">{date}</span>
    {courseKey ? (
      <button
        onClick={() => onView(courseKey)}
        className="text-white hover:text-gray-300 flex-shrink-0 ml-1"
        title="View certificate"
      >
        <FaEye size={14} />
      </button>
    ) : (
      <span className="text-gray-500 flex-shrink-0 ml-1 animate-spin" title="Certificate in progress" style={{ animationDuration: '3s' }}>
        <FaCog size={14} />
      </span>
    )}
  </div>
);

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

  return (
    <div className="max-w-4xl mx-auto">
      {(coursesData as Course[]).map((course, index) => (
        <CourseRow
          key={`${course.title}-${course.date}-${index}`}
          date={course.date}
          logo={getIcon(course.picture)}
          title={course.title}
          description={course.description}
          courseKey={course.key}
          onView={handleGetFile}
        />
      ))}
    </div>
  );
};

export default BackgroundCourses;
