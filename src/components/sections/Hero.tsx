import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronRight, GraduationCap } from 'lucide-react';
import { BecomeACoachModal } from '@/components/BecomeACoachModal';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Hero() {
  const [coachModalOpen, setCoachModalOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundColor: '#0B2E59',
        backgroundImage: `linear-gradient(135deg, rgba(11,46,89,0.92) 0%, rgba(11,46,89,0.75) 50%, rgba(31,107,77,0.7) 100%), url('https://images.pexels.com/photos/8560024/pexels-photo-8560024.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 60% 40%, rgba(31,107,77,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
              Global Standard in Coaching
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.15] mb-6">
              Empowering Coaches.<br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #1F6B4D, #4ade80)',
                }}
              >
                Transforming Lives.
              </span>
              <br />
              Creating Global Leaders.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-base md:text-lg text-white/75 leading-relaxed mb-10 max-w-2xl font-light"
          >
            The British Board of Coaching (BBC) is committed to setting the highest
            international standards in professional coaching through globally recognized
            certifications, expert-led training, ethical excellence, and continuous
            professional development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 flex-wrap"
          >
            <Button
              size="lg"
              className="h-12 px-7 text-white text-base rounded-sm group font-semibold"
              style={{ backgroundColor: '#1F6B4D' }}
              onClick={() => scrollTo('contact')}
            >
              Get Certified
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="h-12 px-7 text-white text-base rounded-sm group font-semibold border-2 border-white/40 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
              onClick={() => setCoachModalOpen(true)}
            >
              <GraduationCap className="mr-2 w-4 h-4" />
              Become a Coach
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-7 border-white/30 text-white hover:bg-white/10 text-base rounded-sm bg-transparent"
              onClick={() => scrollTo('contact')}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>

      <BecomeACoachModal open={coachModalOpen} onClose={() => setCoachModalOpen(false)} />
    </section>
  );
}
