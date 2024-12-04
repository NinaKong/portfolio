import { FC } from 'react';

interface Recommendation2Props { }

const Recommendation2: FC<Recommendation2Props> = () => (
  <div className="Recommendation2 max-w-7xl m-auto">
    <div className="w-full h-full bg-gray-100 dark:bg-gray-800">
      <div className="w-full h-full py-20md:pt-0 flex flex-wrap justify-center items-center gap-2">
        <div
          className="w-[20rem] mt-20 mx-auto flex flex-col gap-2 px-4 border border-gray-300 border-gray-300 rounded-lg bg-white dark:bg-gray-900">
          <div className="w-full flex justify-center items-center">
            <div className="w-[8rem] h-[8rem] rounded-full outline outline-offset-2 outline-1 outline-blue-400 shadow-lg relative -top-[4rem]">
              <div className="inline-flex items-center justify-center w-full h-full text-4xl text-white bg-indigo-500 rounded-full">
                YD
              </div>
            </div>
          </div>
          <div className="w-full h-full text-center flex flex-col gap-4 relative -top-10">
            <h1 className="text-xl  font-serif capitalize font-semibold text-gray-700 dark:text-gray-300">
              Yong Ding
            </h1>
            <h2 className="text-lg text-indigo-500 font-semibold dark:text-white">
              Principal Software Engineer
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Nina worked on several projects with me at Cendyn. During my time working with Nina, she approached problems methodically and exhibits professionalism when it comes to client satisfaction and meeting deadlines. She was reliable and would work through any problems. Moreover, she's very enjoyable to work with and her tireless work ethic and positive attitude make her an invaluable asset to the team. I highly recommend her.
            </p>
          </div>
        </div>
        <div
          className="w-[20rem] max-md:mt-20 mx-auto flex flex-col gap-2 px-4 shadow-lg border border-gray-300 border-gray-300 rounded-lg bg-white dark:bg-gray-900">
          <div className="w-full flex justify-center items-center">
            <div className="w-[8rem] h-[8rem] rounded-full outline outline-offset-2 outline-1 outline-blue-400 shadow-lg relative -top-[4rem]">
              <div className="inline-flex items-center justify-center w-full h-full text-4xl text-white bg-indigo-500 rounded-full">
                LS
              </div>
            </div>
          </div>
          <div className="w-full h-full text-center flex flex-col gap-4 relative -top-10">
            <h1 className="text-xl  font-serif capitalize font-semibold text-gray-700 dark:text-gray-300">
              Leon 🌟 (4 Years Old)
            </h1>
            <h2 className="text-lg text-indigo-500 font-semibold dark:text-white">
              Junior Dinosaur Explorer
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
            My mom is the best in the whole galaxy! She helps me with everything and gives the best hugs. She makes yummy food, reads me stories, and always makes me laugh. This is the best website because my mom is on it. She’s the greatest!
            </p>
          </div>
        </div>
        <div
          className="w-[20rem] m-20 mx-auto flex flex-col gap-2 px-4 shadow-lg border border-gray-300 border-gray-300 rounded-lg bg-white dark:bg-gray-900">
          <div className="w-full flex justify-center items-center">
            <div className="w-[8rem] h-[8rem] rounded-full outline outline-offset-2 outline-1 outline-blue-400 shadow-lg relative -top-[4rem]">
              <div className="inline-flex items-center justify-center w-full h-full text-4xl text-white bg-indigo-500 rounded-full">
                OC
              </div>
            </div>
          </div>
          <div className="w-full h-full text-center flex flex-col gap-4 relative -top-10">
            <h1 className="text-xl  font-serif capitalize font-semibold text-gray-700 dark:text-gray-300">
              Omar Carrasco
            </h1>
            <h2 className="text-lg text-indigo-500 font-semibold dark:text-white">
              Product Leader
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Working with Nina in multiple products and projects was always a pleasure. Not only she is a very skilled Front-End Developer but she is also very passionate about the work she does. She is great at understanding the problem that is being solved and never stops thinking about best practices and User Experience. Nina is able to work with cross-functional teams very well. Any organization will be lucky to have Nina in her team.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Recommendation2;
