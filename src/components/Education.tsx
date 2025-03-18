import { FC } from 'react';
import fau from '../assets/images/fau.jpg';
import DLJT from '../assets/images/DLJT.jpg';
import YT from '../assets/images/YT.jpg';

interface EducationProps { }

const Education: FC<EducationProps> = () => (
  <div id="education" className="Education mt-16">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center text-2xl md:text-3xl font-bold mb-4 dark:text-white">
        Education Experience
      </div>
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
        <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">
          <a className="relative" href="/tool/writey-ai">
            <div className="relative w-full aspect-video">
              <img className="rounded w-full h-full object-cover"
                src={fau} alt="FAU" loading="lazy" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                <h2 className="text-xl font-semibold">Florida Atlantic University</h2>
                <p className="font-medium text-sm">Master of Computer Science</p>
              </div>
            </div>
          </a>
          <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
            <div>
              <strong>Thesis</strong>
              <p className="mb-2.5">Pattern Mining and Visualization for Molecular Dynamics Simulation</p>
              <strong>Publication</strong>
              <p>A Classifier Ensembling Approach for Imbalanced Social Link Prediction</p>
            </div>
            <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
              <li title="Year type"
                className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                <span>2012 - 2014</span>
              </li>
            </ul>
            <ul className="flex flex-wrap text-sm gap-2 my-1">
              <li className="flex items-center gap-2">
                <span>Computer Science,</span>
              </li>
              <li className="flex items-center gap-2">
                <span>GPA 4.0/4.0,</span>
              </li>
              <li className="flex items-center gap-2">
                <span>Data Mining,</span>
              </li>
              <li className="flex items-center gap-2">
                <span>Machine Learning</span>
              </li>
            </ul>
          </div>
        </li>
        <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">
          <a className="relative" href="/tool/writemeai">
            <div className="relative w-full aspect-video">
              <img className="rounded w-full h-full object-cover"
                src={DLJT} alt="DLJT" loading="lazy" />
              <div
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                <h2 className="text-xl font-semibold">Dalian Jiaotong University</h2>
                <p className="font-medium text-sm">Master of Enterprise Management</p>
              </div>
            </div>
          </a>
          <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
            <div className="text-left text-gray-600 two-lines">
              <strong>Thesis</strong>
              <p className="mb-2.5">Study on Evaluation System of Risk Investment in 2011</p>
              <strong>Courses</strong>
              <p>Strategic Management, Marketing, Accounting, Human Resources Management</p>
            </div>
            <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
              <li title="Year type"
                className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                <span>2008 - 2011</span>
              </li>
            </ul>
            <ul className="flex flex-wrap text-sm gap-2 my-1">
              <li className="flex items-center gap-2">
                <span>Enterprise Management,</span>
              </li>
              <li className="flex items-center gap-2">
                <span>GPA 3.5/4.0,</span>
              </li>
              <li className="flex items-center gap-2">
                <span>Financial Management,</span>
              </li>
              <li className="flex items-center gap-2">
                <span>Risk Investment</span>
              </li>
            </ul>
          </div>
        </li>

        <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">
          <a className="relative" href="/tool/publer">
            <div className="relative w-full aspect-video">
              <img className="rounded w-full h-full object-cover"
                src={YT} alt="YT" loading="lazy" />
              <div
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                <h2 className="text-xl font-semibold">Yantai University</h2>
                <p className="font-medium text-sm">Bachelor of Computer Science</p>
              </div>
            </div>
          </a>
          <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
            <div className="text-left text-gray-600 two-lines">
              <strong>Graduation Project</strong>
              <p className="mb-2.5">Design and Implementation of a Web-based Library Management System</p>
              <strong>Courses</strong>
              <p>Java, Artificial Intelligence, Operating Systems, Software Engineering</p>
            </div>
            <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
              <li title="Year type"
                className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                <span>2004 - 2008</span>
              </li>
            </ul>
            <ul className="flex flex-wrap text-sm gap-2 my-1">
              <li className="flex items-center gap-2">
                <span>Computer Science,</span>
              </li>
              <li className="flex items-center gap-2">
                <span>GPA 3.5/4.0,</span>
              </li>
              <li className="flex items-center gap-2">
                <span>Data Structures,</span>
              </li>
              <li className="flex items-center gap-2">
                <span>Algorithms</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default Education;
