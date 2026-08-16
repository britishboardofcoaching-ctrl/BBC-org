import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { Programs } from '@/components/sections/Programs';
import { Accreditation } from '@/components/sections/Accreditation';
import { VerifyCredential } from '@/components/sections/VerifyCredential';
import { Benefits } from '@/components/sections/Benefits';
import { MissionVision } from '@/components/sections/MissionVision';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-secondary selection:text-white">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Hero />
        <About />
        <WhyChoose />
        <Programs />
        <Accreditation />
        <VerifyCredential />
        <Benefits />
        <MissionVision />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
