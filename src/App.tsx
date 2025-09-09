import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import PricingSection from './components/PricingSection';
import HowItWorks from './components/HowItWorks';
import TestimonialsSection from './components/TestimonialsSection';
import ContactForm from './components/ContactForm';
import ClosingSection from './components/ClosingSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PricingSection />
      <HowItWorks />
      <TestimonialsSection />
      <ContactForm />
      <ClosingSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;