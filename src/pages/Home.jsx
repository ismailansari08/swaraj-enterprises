import { useEffect } from 'react';
import Hero from '../components/Home/Hero';
import ServicesRow from '../components/Home/ServicesRow';
import Stats from '../components/Home/Stats';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import Testimonials from '../components/Home/Testimonials';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <ServicesRow />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
