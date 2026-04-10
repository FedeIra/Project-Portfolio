import { useState, type FC } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import kinema1 from '../../../Assets/Project_Kinema_Carrousel/Kinema1.png';
import kinema2 from '../../../Assets/Project_Kinema_Carrousel/Kinema2.png';
import kinema3 from '../../../Assets/Project_Kinema_Carrousel/Kinema3.png';
import kinema4 from '../../../Assets/Project_Kinema_Carrousel/Kinema4.png';
import kinema5 from '../../../Assets/Project_Kinema_Carrousel/Kinema5.png';
import kinema6 from '../../../Assets/Project_Kinema_Carrousel/Kinema6.png';

import gaming1 from '../../../Assets/Project_Gaming_Carrousel/gaming1.png';
import gaming2 from '../../../Assets/Project_Gaming_Carrousel/gaming2.png';
import gaming3 from '../../../Assets/Project_Gaming_Carrousel/gaming3.png';
import gaming4 from '../../../Assets/Project_Gaming_Carrousel/gaming4.png';
import gaming5 from '../../../Assets/Project_Gaming_Carrousel/gaming5.png';
import gaming6 from '../../../Assets/Project_Gaming_Carrousel/gaming6.png';

interface CarouselSlide {
  image: string;
  caption: string;
}

const kinemaSlides: CarouselSlide[] = [
  { image: kinema1, caption: 'Landing' },
  { image: kinema2, caption: 'Home' },
  { image: kinema3, caption: 'Detail' },
  { image: kinema4, caption: 'Video' },
  { image: kinema5, caption: 'Owner Panel' },
  { image: kinema6, caption: 'Admin. Panel' },
];

const gamingSlides: CarouselSlide[] = [
  { image: gaming1, caption: 'Landing' },
  { image: gaming2, caption: 'Home' },
  { image: gaming3, caption: 'Detail' },
  { image: gaming4, caption: 'Add game' },
  { image: gaming5, caption: 'Review added game' },
  { image: gaming6, caption: 'Edit game' },
];

interface ProjectCarouselProps {
  type: 'kinema' | 'gaming';
}

const ProjectCarousel: FC<ProjectCarouselProps> = ({ type }) => {
  const slides = type === 'kinema' ? kinemaSlides : gamingSlides;
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <div className="relative project-carousel">
      <img src={slides[current].image} alt={slides[current].caption} className="w-full rounded" />

      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-center py-2">
        <h3 className="text-lg font-semibold">{slides[current].caption}</h3>
      </div>

      <button
        onClick={prev}
        className="absolute bottom-0 left-0 p-[11.5%] bg-black/90 text-white hover:bg-black transition"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={next}
        className="absolute bottom-0 right-0 p-[11.5%] bg-black/90 text-white hover:bg-black transition"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ProjectCarousel;
