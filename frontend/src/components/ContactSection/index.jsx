import React from 'react';
import TextFollow from '../Ui/TextFollow/index.jsx';
import { Link } from 'react-router-dom';
import { IoIosMailUnread } from 'react-icons/io';
import './style.css';

function ContactMe() {
  return (
    <div className="mt-[10em] mb-[10em]">
      <div>
        <div>
          <TextFollow Text={'Contect Us'} />
        </div>
        <h1 className="contact-herotext text-[2em] font-bold md:leading-8 leading-6 mt-5">
          Get in Touch
        </h1>
        <div className="w-full">
          <p className='text-[#d8ecf8be] text-[1.2em] text-center font-["Hubot-Sans","sans-serif"] mt-5 max-w-[85%] md:max-w-[60%] mb-5  mx-auto'>
            Have a question or just want to say hi? <br /> We love to hear from
            you.
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <Link to="mailto:samanthasandip565@gmail.com">
            <button className="git">
              <span className="glow"></span>
              <span className="git-content flex items-center gap-2 justify-center">
                <IoIosMailUnread />
                contact
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
