import { Hero } from '../components/landing/Hero';
import { Experience } from '../components/landing/Experience';
import { Blog } from '../components/landing/Blog';
import { Quote } from '../components/common/Quote';
import './Home.css';

export const Home = () => {
  return (
    <div className="home content-col">
      <Hero />
      <Experience />
      <Blog />
      <Quote />
    </div>
  );
};
