import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import WhatsAppButton from './components/Common/WhatsAppButton';
import ScrollToTop from './components/Common/ScrollToTop';
import SpiderNetworkBackground from './components/Common/SpiderNetworkBackground';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Documents from './pages/Documents';
import Fees from './pages/Fees';
import Appointment from './pages/Appointment';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ServiceLandingPage from './pages/ServiceLandingPage';

function App() {
  return (
    <Router>
      {/* Global background and chrome */}
      <SpiderNetworkBackground />
      <Navbar />

      <main className="relative min-h-screen">
        <Routes>
          <Route path="/"            element={<Home />} />
          <Route path="/services"    element={<Services />} />
          <Route path="/documents"   element={<Documents />} />
          <Route path="/fees"        element={<Fees />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/faq"         element={<FAQ />} />
          <Route path="/blog"        element={<Blog />} />
          <Route path="/contact"     element={<Contact />} />
          
          {/* SEO Landing Pages */}
          <Route path="/pan-card-service-bhiwandi" element={<ServiceLandingPage />} />
          <Route path="/passport-service-bhiwandi" element={<ServiceLandingPage />} />
          <Route path="/gst-registration-bhiwandi" element={<ServiceLandingPage />} />
          <Route path="/food-licence-bhiwandi"     element={<ServiceLandingPage />} />
          <Route path="/company-registration-bhiwandi" element={<ServiceLandingPage />} />
          <Route path="/online-services-bhiwandi"  element={<ServiceLandingPage />} />
          <Route path="/:slug" element={<ServiceLandingPage />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </Router>
  );
}

export default App;
