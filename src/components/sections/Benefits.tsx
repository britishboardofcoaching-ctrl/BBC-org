import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function Benefits() {
  const benefits = [
    "International credibility",
    "Professional certification",
    "Career advancement",
    "Practical coaching experience",
    "Ethical coaching standards",
    "Global networking opportunities",
    "Expert mentorship",
    "Lifetime professional growth",
    "Modern learning methodology",
    "Continuous support",
    "Increased client confidence",
    "Competitive professional advantage"
  ];

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots-light opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      {/* Photo strip */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'https://images.pexels.com/photos/5306434/pexels-photo-5306434.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
            'https://images.pexels.com/photos/9034213/pexels-photo-9034213.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
            'https://images.pexels.com/photos/8550848/pexels-photo-8550848.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
            'https://images.pexels.com/photos/8837166/pexels-photo-8837166.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-lg overflow-hidden h-32 md:h-40 shadow-lg"
            >
              <img src={src} alt="BBC advantage" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-serif mb-6 leading-tight">
            The BBC Advantage
          </h2>
          <p className="text-white/70 text-base">
            Joining the British Board of Coaching means aligning yourself with excellence. We provide the tools, network, and recognition needed to elevate your practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex items-center gap-4 p-4 rounded-lg bg-white border border-white/20 hover:shadow-lg transition-shadow"
            >
              <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="font-medium tracking-wide text-sm text-secondary">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
