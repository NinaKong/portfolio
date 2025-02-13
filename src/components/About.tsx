import { FC } from 'react';
import Profile from '../assets/images/Profile.jpg'

interface AboutProps { }
const openLinkedin = (url: string) => {
  const newTab = window.open(url, '_blank', 'noopener,noreferrer');
  if (newTab) newTab.opener = null;
}
const About: FC<AboutProps> = () => (
  <div id="about" className="About">
    <div className="relative bg-white dark:bg-gray-800 overflow-hidden mt-16">
      <div className="bg-white dark:bg-gray-800 mx-auto p-3 max-w-4xl w-full transition-all duration-300 animate-fade-in">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 text-center mb-8 md:mb-0">
            <img src={Profile} alt="Profile Picture" className="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-indigo-800 dark:border-blue-900 transition-transform duration-300 hover:scale-105" />
            <h1 className="text-2xl font-bold text-indigo-800 dark:text-white mb-2">Nina Kong</h1>
            <p className="text-gray-600 mb-5 dark:text-gray-300">Senior Lead Software Engineer</p>
            <button onClick={() => openLinkedin('https://www.linkedin.com/in/ninaxuekong')} 
              className="btn relative inline-flex items-center justify-start overflow-hidden px-4 py-2 font-medium transition-all bg-indigo-800 text-white rounded-lg hover:bg-white group">
              <span className="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left transition-colors duration-300 ease-in-out group-hover:text-white">Linkedin</span>
            </button>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-left text-indigo-800 dark:text-white mb-4">About Me</h2>
            <p className="text-left text-gray-700 dark:text-gray-300 mb-6">
              I’m Nina, a Senior Lead Front End Software Engineer based in sunny Utah.
              My journey has led me to the web, where I blend creativity with logic to create stunning websites and applications.
            </p>
            <h2 className="text-xl font-semibold text-left text-indigo-800 dark:text-white mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Redux</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Tailwind</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Material UI</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">SASS</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">MonoRepo</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Angular</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">NgRx</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Angular Material</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">HTML5</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">CSS3</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Java</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Responsive Design</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Accessibility</span>
            </div>
            <h2 className="text-xl font-semibold text-left text-indigo-800 dark:text-white mb-4">Contact Information</h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                ninaxuekong@gmail.com
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Salt Lake City, UT
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default About;

