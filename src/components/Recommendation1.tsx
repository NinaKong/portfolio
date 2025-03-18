import { FC } from 'react';

interface Recommendation1Props { }

const Recommendation1: FC<Recommendation1Props> = () => (
  <div id="recommendation1" className="max-w-7xl m-auto mt-16">
    <div className="flex justify-center mb-11 text-2xl md:text-3xl font-bold mb-4 dark:text-white">
      Testimonials
    </div>
    <div className="w-full h-full bg-gray-100 dark:bg-gray-800">
      <div className="w-full h-full py-10 flex flex-wrap justify-center items-center gap-2">
        <div className="w-[320px] mt-20 mx-auto flex flex-col gap-2 px-4 shadow-lg border border-gray-300 border-gray-300 rounded-lg bg-white dark:bg-gray-900">
          <div className="w-full flex justify-center items-center">
            <div className="w-[128px] h-[128px] rounded-full outline outline-offset-2 outline-1 outline-blue-400 shadow-lg relative -top-[64px]">
              <div className="inline-flex items-center justify-center w-full h-full text-4xl text-white bg-indigo-500 rounded-full">
                CP
              </div>
            </div>
          </div>
          <div className="w-full h-full text-center flex flex-col gap-4 relative -top-10">
            <h1 className="text-xl  font-serif capitalize font-semibold text-gray-700 dark:text-gray-300">
              Carlos Pertuz
            </h1>
            <h2 className="text-lg text-indigo-500 font-semibold dark:text-white">
              Software Development Manager
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Nina was a Front-End Developer on my team where she helped to maintain and build new functionalities for our eMenus product at Cendyn.
              Nina is very innovative, creative and delivers the best practice at any projects. Her ability to work collaboratively while guiding projects quickly and effectively is excellent. Her enthusiasm is infectious and she brings the whole team up. Nina is an outstanding Front-End Developer and a team player.
            </p>
          </div>
        </div>
        <div className="w-[320px] mt-20 mx-auto flex flex-col gap-2 px-4 border border-gray-300 border-gray-300 rounded-lg bg-white dark:bg-gray-900">
          <div className="w-full flex justify-center items-center">
            <div className="w-[128px] h-[128px] rounded-full outline outline-offset-2 outline-1 outline-blue-400 shadow-lg relative -top-[64px]">
              <div className="inline-flex items-center justify-center w-full h-full text-4xl text-white bg-indigo-500 rounded-full">
                XD
              </div>
            </div>
          </div>
          <div className="w-full h-full text-center flex flex-col gap-4 relative -top-10">
            <h1 className="text-xl  font-serif capitalize font-semibold text-gray-700 dark:text-gray-300">
              Xundong Ding
            </h1>
            <h2 className="text-lg text-indigo-500 font-semibold dark:text-white">
              CTO
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Nina is a fast learner and hard worker. She motivates herself and also her team members. The rare mix of productivity and ambition sets a great example for the rest of the team, and explains why everyone loves working with Nina.
            </p>
          </div>
        </div>
        <div className="w-[320px] mt-20 mx-auto flex flex-col gap-2 px-4 shadow-lg border border-gray-300 border-gray-300 rounded-lg bg-white dark:bg-gray-900">
          <div className="w-full flex justify-center items-center">
            <div className="w-[128px] h-[128px] rounded-full outline outline-offset-2 outline-1 outline-blue-400 shadow-lg relative -top-[64px]">
              <div className="inline-flex items-center justify-center w-full h-full text-4xl text-white bg-indigo-500 rounded-full">
                CJ
              </div>
            </div>
          </div>
          <div className="w-full h-full text-center flex flex-col gap-4 relative -top-10">
            <h1 className="text-xl  font-serif capitalize font-semibold text-gray-700 dark:text-gray-300">
              Coleen Jackson
            </h1>
            <h2 className="text-lg text-indigo-500 font-semibold dark:text-white">
              Senior Project Manager
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              I am always excited to work with Nina on any project. Nina has grown tremendously over the years displaying her aptitude for frontend development while ensuring always following the best practices. Each time I have worked with Nina she has presented herself as a bright developer. Nina not only gets her job done well, but helps to maintain a positive attitude on her team which always is essential to the team's success.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Recommendation1;
