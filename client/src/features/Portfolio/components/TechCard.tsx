import type { FC } from 'react';

interface TechCardProps {
  name: string;
  avatar: string;
}

const iconModules = import.meta.glob('../../../assets/images/tech-icons/*.png', { eager: true }) as Record<string, { default: string }>;

const TechCard: FC<TechCardProps> = ({ name, avatar }) => {
  const key = Object.keys(iconModules).find((k) => k.endsWith(`/${avatar}`));
  const iconSrc = key ? iconModules[key].default : '';

  if (!iconSrc) return null;

  return (
    <div className="bg-gray-700/50 w-28 py-2 flex items-center justify-center">
      <img src={iconSrc} alt={name} className="h-10 w-20 object-contain" />
    </div>
  );
};

export default TechCard;
