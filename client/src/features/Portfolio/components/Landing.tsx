import { type FC } from 'react';
import { HiOutlineArrowDown } from 'react-icons/hi';
import NavBar from '../../Navigation/components/NavBar';

const Landing: FC = () => (
  <div
    className="h-screen w-screen flex flex-col bg-primary"
    id="landing"
  >
    <NavBar />

    <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
      <p className="text-white/60 tracking-[0.3em] uppercase text-sm md:text-base mb-3">
        Hello, I&apos;m
      </p>
      <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
        Federico Irarrazaval
      </h1>
      <p className="text-white/90 text-2xl md:text-4xl font-light tracking-wide mb-10">
        Backend Engineer • Product-minded & Team Lead
      </p>

      <a href="#aboutMe" className="no-underline">
        <button
          type="button"
          className="group flex items-center gap-3 border-2 border-white text-white px-8 py-3 text-sm md:text-base tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
        >
          View Profile
          <HiOutlineArrowDown
            size={16}
            className="transition-transform duration-300 group-hover:translate-y-1"
          />
        </button>
      </a>
    </div>
  </div>
);

export default Landing;
