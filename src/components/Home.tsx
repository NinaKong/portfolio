import { FC } from 'react';
import Landing from './Landing'
import About from './About'
import Work1 from './Work1';
import Work2 from './Work2';
import Recommendation1 from './Recommendation1';
import Recommendation2 from './Recommendation2';
import Education from './Education';
import Contact from './Contact';
import ScrollAnimation from 'react-animate-on-scroll';

interface HomeProps { }
const Home: FC<HomeProps> = () => (
  <div className="Home dark:bg-gray-800">
    <Landing></Landing>
    <ScrollAnimation animateIn="fadeIn">
      <About></About>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn">
      <Work1></Work1>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn">
      <Work2></Work2>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn">
      <Recommendation1></Recommendation1>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn">
      <Recommendation2></Recommendation2>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn">
      <Education></Education>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn">
      <Contact></Contact>
    </ScrollAnimation>
  </div>
);

export default Home;
