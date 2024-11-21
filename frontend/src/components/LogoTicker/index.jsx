import React from 'react';
import { FaReact, FaPython, FaDocker } from 'react-icons/fa';
import { SiCnn, SiFastapi, SiTensorflow } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { motion } from 'framer-motion';
import './style.css';

const logos = [
  { logo: <FaReact size={30} />, logoName: 'React' },
  { logo: <FaPython size={30} />, logoName: 'Python' },
  { logo: <FaDocker size={30} />, logoName: 'Docker' },
  { logo: <SiCnn size={30} />, logoName: 'CNN' },
  { logo: <SiFastapi size={30} />, logoName: 'FastAPI' },
  { logo: <SiTensorflow size={30} />, logoName: 'Tensorflow' },
  { logo: <TbBrandFramerMotion size={30} />, logoName: 'FramerMotion' },
];

function LogoTicker() {
  return (
    <div className="text-gray-600">
      <div className="LogoTicker-container">
        <div className="flex overflow-hidden h-[7em] relative before:content-[''] after:content-[''] before:absolute after:absolute before:w-36 before:h-full after:w-36 after:h-full before:top-0 before:left-0 after:top-0 after:right-0 before:bg-[linear-gradient(to_right,#05060f,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#05060f,rgb(0,0,0,0))]">
          <motion.div
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: '-50%' }}
            className="flex gap-16 items-center flex-none pr-16"
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center text-[2em] font-semibold md:text-[1.3em] gap-2"
              >
                {logo.logo}
                <p>{logo.logoName}</p>
              </div>
            ))}
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center text-[2em] font-semibold md:text-[1.3em] gap-2"
              >
                {logo.logo}
                <p>{logo.logoName}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LogoTicker;
