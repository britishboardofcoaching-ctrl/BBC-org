import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { ChevronRight, BookOpen, Users, Microscope, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay },
});

const diplomaCards = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Relationship Coaching & Emotional Recovery',
    description:
      'Master advanced cognitive and behavioural strategies designed to guide individuals and couples through relationship dynamics, emotional recovery, boundary setting, and healthy conflict resolution.',
    cta: 'View Diploma Curriculum & Modules',
  },
  {
    icon: <Microscope className="w-6 h-6" />,
    title: 'Adolescent Guidance & Family Dynamics',
    description:
      'Equip yourself with specialised tools to bridge communication gaps within modern families, support youth through psychological transitions, and empower parents with effective guidance frameworks.',
    cta: 'Learn More & Apply for Next Cohort',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Executive Leadership & Organisational Culture',
    description:
      'Elevate your executive presence, master strategic decision-making frameworks, and learn how to coach high-performing leaders, corporate teams, and organisational cultures.',
    cta: 'Download Complete Programme Syllabus',
    pdf: '/pdfs/cpd-programme-syllabus.pdf',
  },
];

export default function CPDPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20" style={{ backgroundColor: '#0B2E59', backgroundImage: `linear-gradient(135deg, rgba(11,46,89,0.92) 0%, rgba(11,46,89,0.75) 50%, rgba(31,107,77,0.7) 100%), url('https://images.pexels.com/photos/8761327/pexels-photo-8761327.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 pattern-dots-light opacity-10" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 60% 40%, rgba(31,107,77,0.2) 0%, transparent 70%)' }} />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-6">
                Educational & Professional Development
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-[1.1] mb-6">
                Advance Your Mastery Through<br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #1F6B4D, #4ade80)' }}>
                  Continuous Learning.
                </span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl">
                Earning your initial credential is only the first step. Our CPD programmes, post-graduate diplomas, and clinical-style supervision frameworks empower you to expand your toolkit, deepen your clinical insights, and maintain the highest international standards of ethical practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#diplomas" onClick={(e) => { e.preventDefault(); document.getElementById('diplomas')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 h-14 px-8 rounded-sm font-semibold text-white text-base transition-opacity hover:opacity-90" style={{ backgroundColor: '#1F6B4D' }}>
                  Explore Advanced Diplomas <ChevronRight className="w-5 h-5" />
                </a>
                <Link href="/community" className="inline-flex items-center gap-2 h-14 px-8 rounded-sm font-semibold text-white text-base border border-white/30 bg-white/10 hover:bg-white/20 transition-colors">
                  Browse Upcoming CPD Workshops
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Advanced Specialisation Diplomas ── */}
      <section id="diplomas" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeUp()} className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> Post-Graduate Programmes
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Post-Graduate Specialisation Diplomas & Advanced Clinical Tools</h2>
            <p className="text-muted-foreground leading-relaxed">
              Transform your foundational coaching skills into specialised expertise. Our advanced diploma programmes are meticulously crafted for certified practitioners who want to master niche focus areas, handle complex client cases, and deliver profound emotional and cognitive breakthroughs using evidence-based tools.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-8">
            {diplomaCards.map((card, i) => (
              <motion.div key={i} {...fadeUp(i * 0.15)} className="bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group">
                <div className="p-8 border-b border-border" style={{ backgroundColor: '#0B2E59' }}>
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 text-white" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">{card.title}</h3>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-muted-foreground leading-relaxed flex-1 mb-6">{card.description}</p>
                  {card.pdf ? (
                    <a href={card.pdf} download className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all">
                      {card.cta} <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link href="/#contact" className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all">
                      {card.cta} <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Professional Supervision ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp()}>
              <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
                <span className="w-8 h-[2px] bg-secondary" /> Supervision & Mentoring
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Professional Supervision, Case Reviews & Reflective Practice</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Exceptional coaching requires continuous self-reflection and professional oversight. Our structured supervision sessions offer a safe, confidential space where you can bring active client cases, evaluate complex ethical dilemmas, prevent practitioner burnout, and receive direct, constructive feedback from Master Certified Coaches (MCQ).
              </p>
              <Link href="/#contact" className="inline-flex items-center gap-2 h-12 px-7 rounded-md font-semibold text-white text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: '#1F6B4D' }}>
                Book a 1-on-1 Supervision Session <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div {...fadeUp(0.2)}>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/7433825/pexels-photo-7433825.jpeg?auto=compress&cs=tinysrgb&w=940&h=700"
                  alt="Professional supervision and case review"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
