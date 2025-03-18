import Footer from './components/Footer';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import Logo from './assets/images/Logo.png';
import { Link } from 'react-scroll';
import Loader from './components/Loader';

function App() {
  const [isHidden, setIsHidden] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      <div>
        <header className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10 transition-colors duration-300">
          <nav className="container mx-auto">
            <div className="flex justify-between items-center">
              <a href="#" className="w-16">
                <img className="rounded w-full h-full object-cover"
                  src={Logo} alt="Logo" loading="lazy" />
              </a>
              <div className="hidden md:flex space-x-6">
                <Link key="about" to="about" activeClass="active" smooth spy offset={-100} duration={500} className="relative group py-1.5 px-2.5 text-indigo-600">
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all"></span>
                  About
                </Link>
                <Link key="work" to="work" activeClass="active" smooth spy offset={-100} duration={500} className="relative group py-1.5 px-2.5 text-indigo-600">
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all"></span>
                  Work
                </Link>
                <Link key="testimonials" to="testimonials" activeClass="active" smooth spy offset={-100} duration={500} className="relative group py-1.5 px-2.5 text-indigo-600">
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all"></span>
                  Testimonials
                </Link>
                <Link key="education" to="education" activeClass="active" smooth spy offset={-100} duration={500} className="relative group py-1.5 px-2.5 text-indigo-600">
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all"></span>
                  Education
                </Link>
                <Link key="contact" to="contact" activeClass="active" smooth spy offset={-100} duration={500} className="relative group py-1.5 px-2.5 text-indigo-600">
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all"></span>
                  Contact
                </Link>
              </div>
              <div className="flex items-center">
                <button onClick={() => document.body.classList.toggle('dark')}
                  className="h-12 w-12 rounded-lg p-2 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <svg className="fill-violet-700 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                  <svg className="fill-yellow-500 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </button>
                <button id="mobileMenuToggle" onClick={() => setIsHidden(!isHidden)} className="md:hidden dark:bg-gray-800 dark:text-yellow-500 focus:outline-none" aria-label="Toggle mobile menu">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </nav>
          <div id="mobileMenu" className={`${isHidden ? 'hidden' : ''} md:hidden  bg-white dark:bg-gray-800 transition-colors duration-300`}>
            <Link onClick={() => setIsHidden(true)} to="about" activeClass="active" smooth spy offset={-100} duration={500} className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">About</Link>
            <Link onClick={() => setIsHidden(true)} to="work" activeClass="active" smooth spy offset={-100} duration={500} className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">Work</Link>
            <Link onClick={() => setIsHidden(true)} to="testimonials" activeClass="active" smooth spy offset={-100} duration={500} className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">Testimonials</Link>
            <Link onClick={() => setIsHidden(true)} to="education" activeClass="active" smooth spy offset={-100} duration={500} className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">Education</Link>
            <Link onClick={() => setIsHidden(true)} to="contact" activeClass="active" smooth spy offset={-100} duration={500} className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">Contact</Link>
          </div>
        </header>
        <div>
          {isLoading ? (
            <Loader />
          ) : (
            <div>
              <Home></Home>
              <Footer></Footer>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App

