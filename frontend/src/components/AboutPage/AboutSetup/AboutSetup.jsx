import React from 'react';
import TextFollow from '../../Ui/TextFollow';
import './style.css';
import CopyCode from './CopyCode';
import { Link } from 'react-router-dom';
import StepNo from './StepNo';

function AboutSetup() {
  return (
    <div className="bg-gradient-to-b from-black to-transparent relative font-['Hubot-Sans',_sans-serif] pt-[10em]">
      <div className="aboutsetup-container">
        <div className="flex flex-col items-center justify-center ">
          <div>
            <TextFollow Text={'Project setup'} />
          </div>
          <div>
            <h1 className="aboutsetup-herotext text-center font-bold text-[2em] mb-5 mt-5">
              Want to setup <br />
              the project for your own.
            </h1>
          </div>
          <div>
            <p className="font-semibold text-white/60 text-center max-w-[60%] mx-auto mb-10">
              Here is the step by step guide to setup the project. The steps are
              explained below
            </p>
          </div>
        </div>
        <div>
          <div className="px-10 flex flex-col justify-center gap-10">
            <div className="step12 flex md:flex-row flex-col justify-center gap-10">
              <div className="flex flex-col gap-3">
                <StepNo step={'Step 1'} />
                <h1 className="aboutsetup-herotext font-semibold text-xl">
                  Clone the Repository
                </h1>
                <p className="text-white/60 max-w-lg">
                  First, clone the BrainDx repository from GitHub, use the copy
                  the command run it using github. Make sure git bash is
                  installed.
                </p>
                <CopyCode
                  code={
                    'git clone https://github.com/Sandip123samanta/BrainDx.git'
                  }
                />
              </div>
              <div className="flex flex-col gap-3">
                <StepNo step={'Step 2'} />
                <h1 className="aboutsetup-herotext font-semibold text-xl">
                  Backend Setup
                </h1>
                <p className="text-white/60 max-w-lg">
                  Navigate to the Backend Folder, Install Dependencies: Create a
                  virtual environment and install the required dependencies from
                  the requirements.txt file. Run the following commands.
                </p>
                <CopyCode
                  code={
                    'cd BrainDx/backend \npython3 -m venv venv \nsource venv/bin/activate \npip install -r requirements.txt'
                  }
                />
              </div>
            </div>
            <div className="step34 flex md:flex-row flex-col justify-center gap-10">
              <div className="flex flex-col gap-3">
                <StepNo step={'Step 3'} />
                <h1 className="aboutsetup-herotext font-semibold text-xl">
                  Run the Backend
                </h1>
                <p className="text-white/60 max-w-lg">
                  After setting up the environment, you can run the FastAPI
                  backend using uvicorn. Run the command give below.
                </p>
                <CopyCode
                  code={
                    'uvicorn app.main:app --reload --port 8000 --host 0.0.0.0'
                  }
                />
              </div>
              <div className="flex flex-col gap-3">
                <StepNo step={'Step 4'} />
                <h1 className="aboutsetup-herotext font-semibold text-xl">
                  Frontend Setup
                </h1>
                <p className="text-white/60 max-w-lg">
                  Navigate to the Frontend Folder, Install the necessary
                  packages, then start the frontend using the following
                  commands.
                </p>
                <CopyCode
                  code={'cd BrainDx/frontend\nnpm install\nnpm run dev'}
                />
              </div>
            </div>
            <div className="step5 md:w-full md:flex md:justify-center">
              <div className="flex flex-col gap-3 md:max-w-[45%]">
                <StepNo step={'Step 5'} />
                <h1 className="aboutsetup-herotext font-semibold text-xl">
                  Docker Setup(Optional)
                </h1>
                <p className="text-white/60 max-w-lg">
                  If you prefer running BrainDx backend using Docker, follow
                  these steps, pull the docker image and then run the
                  conatainer. You can follow the following commands.
                </p>
                <CopyCode
                  code={
                    'docker pull sandipsamanta007/braindx-backend-app\ndocker run --name my-braindx-container -p 8080:8080 sandipsamanta007/braindx-backend-app:latest'
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSetup;
