import { FC } from 'react';
import Logo from '../assets/images/Logo.png';
import { Link } from 'react-scroll';
import ScrollToTop from "react-scroll-to-top";

interface FooterProps { }
const Footer: FC<FooterProps> = () => (
  <div className="Footer">
    <footer className="bg-white dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="pb-11 mx-auto max-w-4xl">
          <a className="block md:mx-auto mb-5 max-w-max" href="#">
            <img className="rounded w-96 h-auto object-cover"
              src={Logo} alt="Logo" loading="lazy" />
          </a>
          <div className="flex flex-wrap justify-center -mx-3 lg:-mx-6">
            <div className="w-full md:w-auto p-3 md:px-6">
              <Link to="about" activeClass="active" smooth spy offset={-100} duration={500} className="relative group py-1.5 px-2.5 text-lg text-gray-500 font-medium">
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all"></span>
                About
              </Link>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6">
              <Link to="work" activeClass="active" smooth spy offset={-100} duration={500} className="relative group py-1.5 px-2.5 text-lg text-gray-500 font-medium">
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all"></span>
                Work
              </Link>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6">
              <Link to="testimonials" activeClass="active" smooth spy offset={-100} duration={500} className="relative group py-1.5 px-2.5 text-lg text-gray-500 font-medium">
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all"></span>
                Testimonials
              </Link>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6">
              <Link to="education" activeClass="active" smooth spy offset={-100} duration={500} className="relative group py-1.5 px-2.5 text-lg text-gray-500 font-medium">
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all"></span>
                Education
              </Link>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6">
              <Link to="contact" activeClass="active" smooth spy duration={500} className="relative group py-1.5 px-2.5 text-lg text-gray-500 font-medium">
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all"></span>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-100"></div>
      <div className="container px-4 mx-auto">
        <p className="py-10 md:pb-20 text-md text-gray-400 font-medium text-center">
          © {(new Date().getFullYear())} ninaxuekong.com.
          All rights reserved.
        </p>
      </div>
      <ScrollToTop smooth color="#fff" style={{ marginBottom: "50px", marginRight: "-30px" }} viewBox="0 0 24 24"
        svgPath="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
    </footer>
  </div>
);

export default Footer;
