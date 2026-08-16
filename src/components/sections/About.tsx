import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/AnimatedCounter';

export function About() {
  const stats = [
    { value: 5000, suffix: '+', label: 'Certified Coaches' },
    { value: 50, suffix: '+', label: 'Countries' },
    { value: 20, suffix: '+', label: 'Years Excellence' },
    { value: 15, suffix: '+', label: 'Specialized Programs' },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pattern-dots opacity-50 z-0" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary inline-block"></span>
              About BBC
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
              A Legacy of Excellence in <span className="text-secondary">Global Coaching</span>
            </h2>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              Whether you are beginning your coaching journey or advancing your professional career, BBC provides the education, accreditation, credibility, and support needed to succeed on an international level.
            </p>
            <p className="text-base text-muted-foreground mb-10 leading-relaxed">
              We are dedicated to internationally aligned education, professional ethics, practical experience, and lifelong learning, ensuring our certified coaches stand out in a competitive global landscape.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="border-l-2 border-secondary/30 pl-4">
                  <div className="text-3xl font-serif font-bold text-foreground mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
              <img 
                src="https://images.pexels.com/photos/8560027/pexels-photo-8560027.jpeg?auto=compress&cs=tinysrgb&w=940&h=1200" 
                alt="Professional coaching session" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl rounded-lg max-w-xs hidden md:block">
              <div className="text-secondary mb-2">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L22 7L12 12L2 7L12 2Z" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Global Authority</h3>
              <p className="text-sm text-muted-foreground">Setting the standard for professional coaching worldwide.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
