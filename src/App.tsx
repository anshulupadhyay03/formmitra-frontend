import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import FormPlayground from './components/FormPlayground';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';

export default function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const scrollToPlayground = () => {
    const el = document.getElementById('playground');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleJoinWaitlist = () => {
    setIsWaitlistOpen(true);
  };

  return (
    <div className="bg-background text-on-background font-sans selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
      {/* Navigation bar with callback to trigger scrolling and waitlist */}
      <Header onStartDemo={scrollToPlayground} onJoinWaitlist={handleJoinWaitlist} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Dynamic Hero with simulated chat feed and waitlist triggers */}
        <Hero onStartDemo={scrollToPlayground} onJoinWaitlist={handleJoinWaitlist} />

        {/* Section detailing pain points vs modern solutions */}
        <Features />

        {/* Dynamic Step-by-Step mobile simulation tour */}
        <HowItWorks />

        {/* Complete tabbed form use case directory */}
        <UseCases onJoinWaitlist={handleJoinWaitlist} />

        {/* Interactive filling engine with real-time PDF generation */}
        <FormPlayground />

        {/* Accordion FAQ with framer motion collapse rendering */}
        <FAQ />
      </main>

      {/* Structured Footer with terms, links and disclaimers */}
      <Footer onJoinWaitlist={handleJoinWaitlist} />

      {/* Modern Pop-up Waitlist Modal */}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
}
