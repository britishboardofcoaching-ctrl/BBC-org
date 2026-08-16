import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { ChevronRight, Calendar, Users, Globe, ArrowRight, Mic, MessageCircle, HeartHandshake } from 'lucide-react';
import { Link } from 'wouter';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay },
});

const pillars = [
  {
    icon: <Mic className="w-6 h-6" />,
    title: 'Monthly Expert Masterclasses',
    description: 'Gain exclusive access to monthly live sessions led by master coaches and industry specialists exploring cutting-edge tools, emotional recovery techniques, and business growth strategies.',
    cta: 'View Masterclass Schedule & Speakers',
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Peer Practice Circles & Hours Verification',
    description: 'Sharpen your active listening, questioning, and session flow in safe, structured peer environments while logging verified practical hours required for advanced credentialing.',
    cta: 'Reserve Your Seat in Peer Practice',
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: 'Community Impact & Educational Initiatives',
    description: 'Participate in social impact projects, youth support initiatives, and community workshops that bring evidence-based guidance to families and individuals who need it most.',
    cta: 'Get Involved in Community Outreach',
  },
];

const events = [
  {
    type: 'Live Masterclass',
    color: '#1F6B4D',
    title: 'Advanced Cognitive Tools in Emotional Recovery and Relationship Coaching',
    description: 'A deep dive into guiding clients through internal resistance.',
    cta: 'Register for Live Session (Free Access)',
  },
  {
    type: 'Supervision Group',
    color: '#0B2E59',
    title: 'Monthly Peer Case Review & Ethical Practice Workshop',
    description: 'Interactive case discussions and live peer feedback.',
    cta: 'Claim Your Supervision Seat',
  },
  {
    type: 'Annual Summit',
    color: '#8B6914',
    title: 'The Global Human Development & Coaching Innovation Summit',
    description: 'Featuring keynotes, research presentations, and our credential graduation ceremony.',
    cta: 'View Full Summit Agenda & Tickets',
  },
];

export default function CommunityPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20" style={{ backgroundColor: '#0B2E59', backgroundImage: `linear-gradient(135deg, rgba(11,46,89,0.92) 0%, rgba(11,46,89,0.75) 50%, rgba(31,107,77,0.7) 100%), url('https://images.pexels.com/photos/8761555/pexels-photo-8761555.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 pattern-dots-light opacity-10" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 60% 40%, rgba(31,107,77,0.2) 0%, transparent 70%)' }} />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-6">
                Community & Events
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-[1.1] mb-6">
                Belong to an Empowering<br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #1F6B4D, #4ade80)' }}>
                  Global Network.
                </span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl">
                Step into a vibrant, supportive ecosystem of passionate professionals, educators, and human development pioneers. Collaborate on impactful initiatives, refine your practical skills in peer circles, and build lifelong professional relationships that elevate your practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="inline-flex items-center gap-2 h-14 px-8 rounded-sm font-semibold text-white text-base transition-opacity hover:opacity-90" style={{ backgroundColor: '#1F6B4D' }}>
                  Become a Certified Community Member <ChevronRight className="w-5 h-5" />
                </Link>
                <a href="#events" onClick={(e) => { e.preventDefault(); document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 h-14 px-8 rounded-sm font-semibold text-white text-base border border-white/30 bg-white/10 hover:bg-white/20 transition-colors">
                  Explore Full Events Calendar
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Community Pillars ── */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeUp()} className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> Our Ecosystem
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">A Multi-Dimensional Platform Designed for Lifelong Growth</h2>
            <p className="text-muted-foreground leading-relaxed">
              Being part of our network means you never practise in isolation. We provide continuous touchpoints for professional collaboration, skill refinement, and social impact so you can grow your confidence alongside a dedicated global peer group.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div key={i} {...fadeUp(i * 0.15)} className="bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden">
                <div className="p-8 border-b border-border" style={{ backgroundColor: '#0B2E59' }}>
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 text-white" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">{pillar.title}</h3>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-muted-foreground leading-relaxed flex-1 mb-6">{pillar.description}</p>
                  <Link href="/#contact" className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all">
                    {pillar.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Live Events ── */}
      <section id="events" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeUp()} className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> Upcoming Events
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Upcoming Live Masterclasses, Workshops & Conferences</h2>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <motion.div key={i} {...fadeUp(i * 0.15)} className="rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
                <div className="px-6 py-3 text-white text-xs font-bold uppercase tracking-widest" style={{ backgroundColor: event.color }}>
                  {event.type}
                </div>
                <div className="p-7 flex-1 flex flex-col bg-white">
                  <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">"{event.title}"</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">{event.description}</p>
                  {event.cta.includes('Tickets') ? (
                    <Link href="/summit-tickets" className="inline-flex items-center gap-2 font-semibold text-sm text-white px-5 py-2.5 rounded-md transition-opacity hover:opacity-90" style={{ backgroundColor: event.color }}>
                      {event.cta} <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <Link href="/#contact" className="inline-flex items-center gap-2 font-semibold text-sm text-white px-5 py-2.5 rounded-md transition-opacity hover:opacity-90" style={{ backgroundColor: event.color }}>
                      {event.cta} <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
