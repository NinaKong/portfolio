import { FC } from 'react';
import Landing from './Landing';
import About from './About'
import Work1 from './Work1';
import Work2 from './Work2';
import Recommendation1 from './Recommendation1';
import Recommendation2 from './Recommendation2';
import Education from './Education';
import Contact from './Contact';
import ScrollAnimation from 'react-animate-on-scroll';

const components = [
  { component: About, animateIn: 'fadeIn' },
  { component: Work1, animateIn: 'fadeIn' },
  { component: Work2, animateIn: 'fadeIn' },
  { component: Recommendation1, animateIn: 'fadeIn' },
  { component: Recommendation2, animateIn: 'fadeIn' },
  { component: Education, animateIn: 'fadeIn' },
  { component: Contact, animateIn: 'fadeIn' },
];

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className="Home dark:bg-gray-800">
    <Landing />
    {components.map(({ component: Component, animateIn }) => (
      <ScrollAnimation key={Component.name} animateIn={animateIn}>
        <Component />
      </ScrollAnimation>
    ))}
  </div>
);

export default Home;
