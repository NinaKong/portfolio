import { FC } from 'react';
import LandingVideo from '../assets/images/landing.mp4'
import Icon from './Icon';
import { RandomReveal } from 'react-random-reveal'

interface LandingProps { }
const Landing: FC<LandingProps> = () => (

  <div className="Landing">
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video className="min-w-full min-h-full absolute object-cover" autoPlay muted loop>
          <source src={LandingVideo} type="video/mp4"></source>
        </video>
      </div>
      <div className="video-content space-y-2 z-10">
        <h1 className="font-light text-6xl">
          <RandomReveal isPlaying onComplete={() => ({ shouldRepeat: true, delay: 4 })} duration={2} characters="Nina Kong" />
        </h1>
        <h3 className="font-light text-3xl">Senior/Lead Front End Software Engineer</h3>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="relative inline-flex">
          <div className="w-8 h-8 bg-indigo-500 rounded-full"><Icon icon="arrow-down" size={20} /></div>
          <div className="w-8 h-8 bg-indigo-500 rounded-full absolute top-0 left-0 animate-ping"></div>
          <div className="w-8 h-8 bg-indigo-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
        </div>
      </div>
    </section>
  </div>
);

export default Landing;
