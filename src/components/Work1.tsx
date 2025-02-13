import { FC } from 'react';
import Amwins from '../assets/images/Amwins.jpg'


interface Work1Props { }

const About: FC<Work1Props> = () => (
  <div id="work" className="Work1 max-w-7xl mt-16 m-auto">
    <div className="flex justify-center mb-11 text-2xl md:text-3xl font-bold mb-4 dark:text-white">
      Work Experience
    </div>
    <section className="bg-gray-100">
      <div className="container mx-auto text-left py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl mb-2.5 font-extrabold text-gray-900 title">Senior Lead Software Engineer, Front End</h2>
            <p className="text-base text-xl font-semibold leading-6 text-indigo-500">
              eReinsure | AmWins
            </p>
            <h4 className="mt-2 text-xl font-extrabold leading-8 text-gray-900">
              Feb 2018 - Present
            </h4>
            <ul className="mt-8 space-y-3 font-medium">
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="ml-3 leading-5 text-gray-600">
                  Architect efficient, reusable front-end systems for Project Phoenix using Angular, Angular Material, NgRx, Monorepo, and SCSS.
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="ml-3 leading-5 text-gray-600">
                  Direct the development of scalable front-end systems for Project Console-UI, utilizing React and Material UI.
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="ml-3 leading-5 text-gray-600">
                  Collaborate with UX/UI designers and product managers to define new features, prioritize tasks, and ensure high-quality products.
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="ml-3 leading-5 text-gray-600">
                  Deliver high-quality architecture, providing technical guidance and mentorship to peers.
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="ml-3 leading-5 text-gray-600">
                  Lead Agile development teams and collaborating with remote/distributed teams to ensure efficient delivery of projects.
                </p>
              </li>
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <img src={Amwins} alt="Amwins" className="object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
