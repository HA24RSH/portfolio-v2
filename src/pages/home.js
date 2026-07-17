import { Hero } from '../components/Hero';
import { Experience } from '../components/Experience';
import { Blog } from '../components/Blog';
import { Categories } from '../components/Categories';
import { Quote } from '../components/Quote';
import './Home.css';

export const Home = () => {
  return (
    <div className="home content-col">
      <Hero />
      <Experience />
      <Blog />
      <Categories />
      <Quote />
    </div>
  );
};
