import type { FC, ReactNode } from 'react';

interface TimelineCardProps {
  date: string;
  logo: string;
  title: string;
  children: ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
  actions?: ReactNode;
}

const TimelineCard: FC<TimelineCardProps> = ({ date, logo, title, children, isFirst, isLast, actions }) => (
  <div className="flex">
    <div className="hidden sm:flex flex-col items-center w-1/4">
      <div className="flex-1 w-full flex">
        {!isFirst ? (
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
          style={{ backgroundColor: isFirst ? '#22d3ee' : '#0e7490' }}
        />
      </div>
      <div className="flex-1 w-full flex">
        {!isLast ? (
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

    <div className="flex-1 py-2">
      <div className="bg-primary-dark" style={{ borderRadius: 0 }}>
        <div className="p-4">
          <div className="float-right text-white">
            <p className="text-sm max-sm:text-xs">{date}</p>
          </div>
          <h4 className="flex items-center text-white gap-2">
            <img src={logo} alt={title} width={40} className="mr-2" />
            <strong>{title}</strong>
          </h4>
          <div className="text-white mt-1">{children}</div>
          {actions}
        </div>
      </div>
    </div>
  </div>
);

export default TimelineCard;
