import React, { useRef } from 'react';
import './style.css';
import TextFollow from '../Ui/TextFollow/index.jsx';
import CodeImage from '../../assets/codeimage-snippet_2.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function GetCode() {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ['start end', 'end end'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <div className="text-white w-screen h-auto pt-[7em] bg-gradient-to-b from-transparent to-black">
      <div>
        <div>
          <TextFollow Text={'Get Code'} />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="getcode-herotext text-[2em] font-bold md:leading-8 leading-6 mt-5">
            Interested to know <br />
            how BrainDx works behind the scenes?
          </h1>
          <p className="text-[#d8ecf8be] text-[1.2em] text-center font-['Hubot-Sans','sans-serif'] mt-5 max-w-[85%] md:max-w-[60%] mb-5">
            You can check out the complete source code of the project on my
            GitHub. Eager to learn, or someone passionate about healthcare AI,
            feel free to clone the repository and experiment with the code.
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <motion.div
            style={{
              opacity: opacity,
              rotateX: rotateX,
              transformPerspective: '800px',
            }}
            className="md:w-[70%] w-[90%] h-auto object-cover overflow-hidden rounded-sm"
          >
            <img ref={imgRef} src={CodeImage} alt="code snippet" />
          </motion.div>
        </div>
        <div className="flex justify-center mt-10">
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
      </div>
    </div>
  );
}

export default GetCode;
