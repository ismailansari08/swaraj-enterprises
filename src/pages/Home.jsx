import { useEffect } from 'react';
import useSEO from '../hooks/useSEO';
import SchemaMarkup from '../components/Common/SchemaMarkup';
import Hero from '../components/Home/Hero';
import ServicesRow from '../components/Home/ServicesRow';
import Stats from '../components/Home/Stats';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import Testimonials from '../components/Home/Testimonials';

const Home = () => {
  useSEO({
    title: 'Swaraj Enterprises | #1 Online Government Services & Legal Consultancy in Bhiwandi',
    description: 'Swaraj Enterprises is Bhiwandi\'s trusted consultancy for PAN Card, Passport, GST Registration, ITR Filing, Food Licence, and Shop Act. Expert assistance for all government services in Thane & Maharashtra.',
    keywords: 'Swaraj Enterprises Bhiwandi, PAN Card Consultant Bhiwandi, Passport Agent Bhiwandi, GST Registration Thane, Online Form Filling Bhiwandi, Shop Act Licence Bhiwandi, ITR Filing Bhiwandi, Digital Signature Bhiwandi, Food Licence Consultant Maharashtra',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <SchemaMarkup />
      <Hero />
      <ServicesRow />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
