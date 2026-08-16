import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Award, Users, BookOpen, Network, TrendingUp } from 'lucide-react';

export function WhyChoose() {
  const reasons = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'International Recognition',
      description: 'Build credibility with internationally aligned certifications recognized across global markets.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Professional Accreditation',
      description: 'Strengthen your professional profile with credentials that demonstrate exceptional standards.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Trainers',
      description: 'Learn directly from highly experienced coaches and industry professionals at the top of their fields.'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Practical Learning',
      description: 'Engage in hands-on coaching practice, real-world case studies, and interactive workshops.'
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Global Community',
      description: 'Become part of an elite international network of professional coaches and mentors.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Career Growth',
      description: 'Unlock lucrative new opportunities in coaching, leadership, consulting, and OD.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
            <span className="w-8 h-[2px] bg-secondary inline-block"></span>
            Why Choose BBC
            <span className="w-8 h-[2px] bg-secondary inline-block"></span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
            The Benchmark for <br/>Professional Coaching
          </h2>
          <p className="text-base text-muted-foreground">
            We don't just teach coaching; we build careers. Our methodology combines rigorous academic standards with practical mastery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            'https://images.pexels.com/photos/7490819/pexels-photo-7490819.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
            'https://images.pexels.com/photos/5756649/pexels-photo-5756649.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
            'https://images.pexels.com/photos/8424890/pexels-photo-8424890.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl overflow-hidden shadow-md h-48"
            >
              <img src={src} alt="BBC community" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-sm border border-border/50 hover-lift relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-teal-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-primary mb-6 group-hover:bg-secondary/10 group-hover:text-secondary transition-colors duration-300">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold font-serif mb-3 text-foreground group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
