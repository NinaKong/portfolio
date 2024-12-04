import { FC } from 'react';
import Cendyn from '../assets/images/Cendyn.jpg';

interface Work2Props { }

const Work2: FC<Work2Props> = () => (
  <div className="Work2 max-w-7xl m-auto">
    <section className="bg-gray-100">
      <div className="container mx-auto text-left py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="mt-12 md:mt-0">
            <img src={Cendyn} alt="Cendyn" className="object-cover rounded-lg shadow-md" />
          </div>
          <div className="max-w-xl">
            <h2 className="text-3xl mb-2.5 font-extrabold text-gray-900 title">Front End Software Engineer</h2>
            <p className="text-base text-xl font-semibold leading-6 text-indigo-500">
              Cendyn
            </p>
            <h4 className="mt-2 text-xl font-extrabold leading-8 text-gray-900">
              July 2014 - Jan 2018
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
                  Implement complex and custom-built web applications utilizing advanced HTML5, CSS3, JavaScript, jQuery, and AJAX.
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
                  Build responsive web applications integrating Bootstrap and SCSS/LESS for clients such as Google, Hilton and Marriott.
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
                  Build innovative mobile application UI using AngularJS and Ionic frameworks for Android and iOS.
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
                  Lead company-wide UIKit project with high-performance UI components to drive UI consistency and reusability.
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
                  Work closely with technical experts to build out reusable and modular web page semantic markups and designs.
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
                  Participate in design and lead quality code reviews with UX/UI designers to improve customer experience by understanding customer needs and innovate rapid solutions.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Work2;
