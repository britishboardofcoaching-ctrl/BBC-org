import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { ChevronRight, Heart, Users, Brain, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay },
});

const pathImages = [
  'https://images.pexels.com/photos/6551250/pexels-photo-6551250.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
  'https://images.pexels.com/photos/7176029/pexels-photo-7176029.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
  'https://images.pexels.com/photos/7433930/pexels-photo-7433930.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
  'https://images.pexels.com/photos/7693692/pexels-photo-7693692.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
];

const paths = [
  {
    icon: <Heart className="w-6 h-6" />,
    color: '#1F6B4D',
    title: 'Life & Personal Transformation',
    description: 'Overcome procrastination, eliminate self-doubt, align with your core values, and build sustainable daily momentum toward a clear future vision.',
    cta: 'Explore Life & Personal Coaching',
  },
  {
    icon: <Users className="w-6 h-6" />,
    color: '#0B2E59',
    title: 'Relationship & Family Dynamics',
    description: 'Transform communication patterns, resolve deep-seated conflict, establish healthy emotional boundaries, and rebuild trust in your key relationships.',
    cta: 'Explore Relationship & Family Coaching',
  },
  {
    icon: <Brain className="w-6 h-6" />,
    color: '#7B4F9E',
    title: 'Emotional Recovery & Mindset Resilience',
    description: 'Navigate life transitions, heal emotional strain, overcome inner turmoil, and rebuild self-worth using compassionate, structured cognitive tools.',
    cta: 'Explore Recovery & Mindset Coaching',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    color: '#8B6914',
    title: 'Executive Leadership & Career Growth',
    description: 'Sharpen strategic decision-making, enhance your executive presence, master difficult workplace conversations, and accelerate your career trajectory.',
    cta: 'Explore Executive Leadership Coaching',
  },
];

export default function GetCoachingPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', area: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSending(true);
    try {
      await fetch('https://formsubmit.co/ajax/britishboardofcoaching@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `BBC Coaching Request – ${formData.name}`,
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone || 'Not provided',
          'Coaching Area': formData.area || 'Not specified',
          Message: formData.message || 'Not provided',
          _template: 'table',
        }),
      });
    } catch (_) { /* still show success */ }
    setSending(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20" style={{ backgroundColor: '#0B2E59', backgroundImage: `linear-gradient(135deg, rgba(11,46,89,0.92) 0%, rgba(11,46,89,0.75) 50%, rgba(31,107,77,0.7) 100%), url('https://images.pexels.com/photos/3958461/pexels-photo-3958461.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 pattern-dots-light opacity-10" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 60% 40%, rgba(31,107,77,0.2) 0%, transparent 70%)' }} />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-6">
                1-on-1 Coaching Sessions
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-[1.1] mb-6">
                Partner with an Accredited Coach and<br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #1F6B4D, #4ade80)' }}>
                  Unlock Your True Potential.
                </span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl">
                Experience powerful, confidential, and evidence-based 1-on-1 coaching designed to help you break through limiting beliefs, achieve clarity, heal relationships, and build an actionable roadmap toward meaningful success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#booking" onClick={(e) => { e.preventDefault(); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-sm font-semibold text-white text-base transition-opacity hover:opacity-90" style={{ backgroundColor: '#1F6B4D' }}>
                  Book Your Free 20-Min Discovery Call <ChevronRight className="w-5 h-5" />
                </a>
                <a href="#paths" onClick={(e) => { e.preventDefault(); document.getElementById('paths')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="inline-flex items-center gap-2 h-14 px-8 rounded-sm font-semibold text-white text-base border border-white/30 bg-white/10 hover:bg-white/20 transition-colors">
                  Find the Right Coach for You
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Coaching Paths ── */}
      <section id="paths" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeUp()} className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> Coaching Pathways
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Tailored Coaching Pathways Built Around Your Unique Journey</h2>
            <p className="text-muted-foreground leading-relaxed">
              Whether you are navigating personal challenges, seeking relationship harmony, working through an emotional transition, or driving executive growth, our accredited coaches offer dedicated support tailored to your life goals.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {paths.map((path, i) => (
              <motion.div key={i} {...fadeUp(i * 0.12)} className="bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
                <div className="relative h-44 overflow-hidden">
                  <img src={pathImages[i]} alt={path.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="w-1.5 flex-shrink-0 self-stretch" style={{ backgroundColor: path.color }} />
                <div className="p-7 flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: path.color }}>
                      {path.icon}
                    </div>
                    <h3 className="font-bold text-foreground text-lg leading-snug">{path.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{path.description}</p>
                  <a href="#booking" onClick={(e) => { e.preventDefault(); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 font-semibold text-sm hover:gap-3 transition-all" style={{ color: path.color }}>
                    {path.cta} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking Form ── */}
      <section id="booking" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> Book Your Session <span className="w-8 h-[2px] bg-secondary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Take the First Step: Schedule Your Free Consultation</h2>
            <p className="text-muted-foreground">Fill in your details below and one of our accredited coaches will be in touch within 24 hours.</p>
          </motion.div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 rounded-2xl border border-border bg-gray-50">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#1F6B4D20' }}>
                <CheckCircle2 className="w-8 h-8" style={{ color: '#1F6B4D' }} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Request Received</h3>
              <p className="text-muted-foreground max-w-md mx-auto">Thank you — a member of our coaching team will contact you within 24 hours to confirm your free discovery call.</p>
            </motion.div>
          ) : (
            <motion.form {...fadeUp(0.1)} onSubmit={handleSubmit} className="space-y-5 bg-gray-50 rounded-2xl border border-border p-8">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Full Name *</label>
                  <input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-11 px-4 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition"
                    placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Email Address *</label>
                  <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 px-4 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition"
                    placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Phone Number</label>
                <input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-11 px-4 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition"
                  placeholder="+44 ..." />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Coaching Area</label>
                <select value={formData.area} onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full h-11 px-4 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition">
                  <option value="">Select an area of focus</option>
                  <option>Life & Personal Transformation</option>
                  <option>Relationship & Family Dynamics</option>
                  <option>Emotional Recovery & Mindset Resilience</option>
                  <option>Executive Leadership & Career Growth</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Tell Us About Your Goals</label>
                <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition resize-none"
                  placeholder="Briefly describe what you'd like to focus on..." />
              </div>
              <button type="submit" disabled={sending} className="w-full h-12 rounded-lg font-semibold text-white text-sm transition-opacity hover:opacity-90 disabled:opacity-60" style={{ backgroundColor: '#1F6B4D' }}>
                {sending ? 'Sending…' : 'Submit Request for Free Call'}
              </button>
            </motion.form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
