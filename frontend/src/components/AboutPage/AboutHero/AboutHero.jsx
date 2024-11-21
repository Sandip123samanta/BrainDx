import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaPython, FaDocker, FaReact } from 'react-icons/fa';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { GoArrowDown } from 'react-icons/go';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { SiTensorflow, SiFastapi } from 'react-icons/si';
import { motion } from 'framer-motion';
import './style.css';

function AboutHero() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-['Hubot-Sans',_sans-serif] relative overflow-x-clip z-2">
      <div className="absolute -z-10 inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <motion.div
          style={{
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            rotate: '1turn',
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: 'linear',
          }}
          className="absolute inset-0 border-2 size-[620px] rounded-full left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 shadow-[0_0_80px_inset] border-blue-500/5 shadow-blue-500/25"
        >
          <div className="absolute text-blue-500 top-1/2 left-0 rounded-full -translate-x-1/2 -translate-y-1/2 object-cover border border-blue-500/5 shadow-[0_0_10px_inset] shadow-blue-500/25 p-4">
            <FaPython size={30} />
          </div>
          <div className="absolute text-blue-500 top-0 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2 object-cover border border-blue-500/5 shadow-[0_0_10px_inset] shadow-blue-500/25 p-4">
            <FaDocker size={40} />
          </div>
          <div className="absolute text-yellow-500 top-1/2 left-full rounded-full -translate-x-1/2 -translate-y-1/2 object-cover border border-blue-500/5 shadow-[0_0_10px_inset] shadow-blue-500/25 p-4">
            <SiTensorflow size={30} />
          </div>
        </motion.div>
        <div className="absolute inset-0 border-2 size-[820px] rounded-full left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 shadow-[0_0_80px_inset] border-blue-500/5 shadow-blue-500/25"></div>
        <motion.div
          style={{
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            rotate: '-1turn',
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: 'linear',
          }}
          className="absolute inset-0 border-2 size-[1020px] rounded-full left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 shadow-[0_0_80px_inset] border-blue-500/5 shadow-blue-500/25"
        >
          <div className="absolute text-blue-500 top-1/2 left-0 rounded-full -translate-x-1/2 -translate-y-1/2 object-cover border border-blue-500/5 shadow-[0_0_10px_inset] shadow-blue-500/25 p-4">
            <FaReact size={30} />
          </div>
          <div className="absolute text-green-600 top-0 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2 object-cover border border-blue-500/5 shadow-[0_0_10px_inset] shadow-blue-500/25 p-4">
            <SiFastapi size={40} />
          </div>
          <div className="absolute text-pink-600 top-1/2 left-full rounded-full -translate-x-1/2 -translate-y-1/2 object-cover border border-blue-500/5 shadow-[0_0_10px_inset] shadow-blue-500/25 p-4">
            <TbBrandFramerMotion size={30} />
          </div>
        </motion.div>
        <div className="absolute inset-0 border-2 size-[1220px] rounded-full left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 shadow-[0_0_80px_inset] border-blue-500/5 shadow-blue-500/25"></div>
      </div>
      <div className="abouthero-container flex md:gap-10 gap-6 items-center justify-center flex-col h-screen">
        <Link
          to="/predict"
          className="inline-flex items-center bg-gray-900 border-gray-800 px-4 py-1.5 rounded-lg gap-2 text-white/80 hover:gap-3 transition-all duration-300 ease-linear"
        >
          <span className="w-2 h-2 rounded-full bg-green-600" />
          <span className="text-sm font-semibold">Check prediction now</span>
          <MdKeyboardArrowRight />
        </Link>
        <h1 className="about-herotext font-bold text-[2em] text-center">
          Empowering Early <br />
          Detection of Brain Tumors with AI
        </h1>
        <p className="font-semibold text-white/60 max-w-[90%] md:max-w-[60%] text-center">
          BrainDx combines cutting-edge deep learning technology with
          explainable AI to assist in the diagnosis of brain tumors from MRI
          scans.
        </p>
        <div className="flex gap-4">
          <div className="">
            <Link to="https://github.com/Sandip123samanta/BrainDx">
              <button className="git">
                <span className="glow"></span>
                <span className="git-content flex items-center gap-2 justify-center">
                  <FaGithub />
                  github
                </span>
              </button>
            </Link>
          </div>
          <button
            onClick={scrollToFeatures}
            className="inline-flex gap-1 items-center justify-center text-white px-2 md:py-0.5 py-0 border border-white rounded-full hover:bg-white hover:text-black font-semibold"
          >
            <span>Learn More</span>
            <GoArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
