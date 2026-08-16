import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Eye } from 'lucide-react';
import bgImage from '@assets/generated_images/hero-coaching.jpg';

const mvImages = [
  'https://images.pexels.com/photos/5336987/pexels-photo-5336987.jpeg?auto=compress&cs=tinysrgb&w=940&h=600',
  'https://images.pexels.com/photos/7491556/pexels-photo-7491556.jpeg?auto=compress&cs=tinysrgb&w=940&h=600',
];

export function MissionVision() {
  return (
    <section className="py-24 relative overflow-hidden flex items-center min-h-[80vh]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Abstract coaching environment" 
          className="w-full h-full object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-primary/95 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-dark p-10 md:p-14 rounded-2xl relative overflow-hidden group hover:border-secondary/50 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-secondary/20 transition-colors" />
            <div className="rounded-xl overflow-hidden mb-8 h-40 shadow-lg">
              <img src={mvImages[0]} alt="Coaching mission" className="w-full h-full object-cover" />
            </div>
            <Compass className="w-12 h-12 text-secondary mb-8" />
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-6">Our Mission</h3>
            <p className="text-white/80 text-base leading-relaxed font-light">
              "To empower coaches worldwide by delivering exceptional education, internationally respected accreditation, ethical coaching standards, and transformational professional development."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="glass-dark p-10 md:p-14 rounded-2xl relative overflow-hidden group hover:border-secondary/50 transition-colors duration-500"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 group-hover:bg-secondary/20 transition-colors" />
            <div className="rounded-xl overflow-hidden mb-8 h-40 shadow-lg">
              <img src={mvImages[1]} alt="Coaching vision" className="w-full h-full object-cover" />
            </div>
            <Eye className="w-12 h-12 text-secondary mb-8" />
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-6">Our Vision</h3>
            <p className="text-white/80 text-base leading-relaxed font-light">
              "To become one of the world's leading coaching accreditation organizations recognized for excellence, innovation, integrity, and transformational leadership."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
