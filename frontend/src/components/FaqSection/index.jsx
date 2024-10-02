import React, { useState } from 'react';
import TextFollow from '../Ui/TextFollow/index.jsx';
import { LuPlus } from 'react-icons/lu';
import { LuMinus } from 'react-icons/lu';
import { motion, AnimatePresence } from 'framer-motion';
import './style.css';

const faq = [
  {
    question: 'What is BrainDx and how does it work?',
    answer:
      'BrainDx is an AI-powered platform designed to help detect brain tumors from MRI images. Using advanced deep learning models, it analyzes MRI scans to identify the presence of tumors.',
    key: 1,
  },
  {
    question: 'How accurate is BrainDx in detecting brain tumors?',
    answer:
      'BrainDx leverages state-of-the-art machine learning models like VGG19 and EfficientNetB0, trained on a large dataset of MRI images, to ensure high accuracy.',
    key: 2,
  },
  {
    question: 'Is my data secure when I upload MRI images?',
    answer:
      'es, BrainDx prioritizes your data privacy and security. All MRI images uploaded are processed securely and are not stored on our servers after the analysis is complete.',
    key: 3,
  },
  {
    question: 'Can I access the source code of BrainDx?',
    answer:
      "Absolutely! BrainDx is an open-source project. You can explore the complete source code on GitHub. Whether you're a developer, researcher, or enthusiast, feel free to clone the repository, experiment with the code.",
    key: 4,
  },
];

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="py-7 border-b border-white/30 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex w-full items-center">
        <span className="flex-1 md:text-lg text-xs md:font-bold font-semibold">
          {question}
        </span>
        {isOpen ? <LuMinus /> : <LuPlus />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="text-white md:text-[1.1em] text-[1em]"
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
              marginTop: '16px',
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function FaqSec() {
  return (
    <div className="text-white/60 w-screen h-auto pt-[7em] bg-gradient-to-b from-black to-transparent">
      <div className="faq-container px-10">
        <div>
          <TextFollow Text={'Faq Section'} />
        </div>
        <h1 className="faq-herotext text-[2em] font-bold md:leading-8 leading-6 mt-5">
          Frequently Asked Questions
        </h1>
        <div className="md:mt-12 mt-5 mx-auto max-w-[648px]">
          {faq.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqSec;
