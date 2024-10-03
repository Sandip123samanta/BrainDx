import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import TextFollow from '../../Ui/TextFollow/index.jsx';
import { HiCube } from 'react-icons/hi2';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import './style.css';

const features = [
  {
    title: 'Transfer learning models',
    description:
      'Powered by a pre-trained VGG16, EffiecientNetB0, ResNet50 model for accurate and reliable predictions.',
    goTo: 'https://keras.io/guides/transfer_learning/',
  },
  {
    title: 'Explainable AI',
    description:
      "Integrated with LIME (Local Interpretable Model-agnostic Explanations) Provides users with visual explanations of the model's predictions, highlighting the important regions of the MRI image",
    goTo: 'https://github.com/marcotcr/lime',
  },
  {
    title: 'Open Source',
    description:
      'All the code is available for developers to inspect, contribute to, or set up locally.',
    goTo: 'https://github.com/Sandip123samanta/BrainDx',
  },
];

export const FeaturesCard = ({ title, description, goTo }) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

  const borderRef = useRef(null);
  useEffect(() => {
    const updateMousePosition = (e) => {
      if (!borderRef.current) return;
      const borderRect = borderRef.current?.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return (
    <div className="border border-white/30 px-4 py-10 text-center rounded-xl sm:flex-1 relative z-2">
      <motion.div
        className="absolute inset-0 border-2 border-[#98c0ef] rounded-xl -z-10"
        ref={borderRef}
        style={{
          maskImage: maskImage,
          WebkitMaskImage: maskImage,
        }}
      ></motion.div>
      <div className="w-full h-full flex flex-col items-center gap-3">
        <div
          style={{
            background: 'linear-gradient(0deg, #d8ecf8 0%, #98c0ef 100%)',
            boxShadow: 'text-shadow: 0 2px 16px rgba(174, 207, 242, 0.24)',
          }}
          className="inline-flex md:h-14 md:w-14 h-10 w-10 rounded-lg justify-center items-center"
        >
          <div className="text-black">
            <HiCube size={30} />
          </div>
        </div>
        <h2 className="aboutfeature-herotext text-sm font-semibold">{title}</h2>
        <p className="text-white/60 text-center">{description}</p>
        <Link
          to={goTo}
          className="text-white flex items-center gap-2 hover:gap-3 hover:text-[#98c0ef] transition-all duration-200"
        >
          <span>Learn more</span>
          <MdOutlineArrowRightAlt />
        </Link>
      </div>
    </div>
  );
};

function AboutFeature() {
  return (
    <div
      id="features"
      className="font-['Hubot-Sans',_sans-serif] mt-16 bg-gradient-to-b from-transparent to-black"
    >
      <div className="aboutfeature-container">
        <div className="flex flex-col items-center justify-center">
          <div>
            <TextFollow Text={'Features'} />
          </div>
          <h1 className="aboutfeature-herotext font-bold text-[2em] text-center">
            Know more about BrainDx <br /> Features
          </h1>
          <p className="font-semibold text-white/60 max-w-[90%] md:max-w-[50%] text-center">
            see what are the main functions of BrainDx, and how we transformed
            concepts into engaging digital experience
          </p>
        </div>
        <div className="mt-16 flex md:flex-row flex-col gap-4 px-10">
          {features.map(({ title, description, goTo }) => (
            <FeaturesCard
              key={title}
              title={title}
              description={description}
              goTo={goTo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutFeature;
