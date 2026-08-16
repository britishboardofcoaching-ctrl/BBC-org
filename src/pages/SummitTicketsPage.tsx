import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { ChevronRight, Calendar, MapPin, Clock, Users, CheckCircle2, ArrowRight, Ticket } from 'lucide-react';
import { Link } from 'wouter';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay },
});

const agenda = [
  { time: '09:00 – 10:00', title: 'Registration & Welcome Coffee', desc: 'Check in, collect your badge, and network with fellow delegates.' },
  { time: '10:00 – 11:00', title: 'Opening Keynote: The Future of Human Development', desc: 'A visionary address on where coaching is heading next.' },
  { time: '11:15 – 12:30', title: 'Panel: Evidence-Based Coaching in Practice', desc: 'Leading researchers share what actually works.' },
  { time: '12:30 – 13:30', title: 'Lunch & Networking', desc: 'A catered lunch with dedicated networking tables.' },
  { time: '13:30 – 14:30', title: 'Workshop: Advanced Emotional Recovery Tools', desc: 'Hands-on practice with cutting-edge recovery frameworks.' },
  { time: '14:45 – 15:45', title: 'Credential Graduation Ceremony', desc: 'Celebrating the newest ACQ, PCQ, and MCQ graduates.' },
  { time: '16:00 – 17:00', title: 'Closing Remarks & Summit Reception', desc: 'Final reflections followed by a drinks reception.' },
];

const tiers = [
  {
    name: 'Virtual Pass',
    price: '£49',
    color: '#0B2E59',
    features: [
      'Live-streamed access to all keynote & panel sessions',
      'Digital summit programme & resource pack',
      'Post-event recording access (30 days)',
      'Digital networking lounge',
    ],
    cta: 'Reserve Virtual Pass',
  },
  {
    name: 'Standard Pass',
    price: '£149',
    color: '#1F6B4D',
    featured: true,
    features: [
      'Full in-person access to all sessions',
      'Catered lunch & refreshments',
      'Summit welcome pack',
      'Access to workshop & graduation ceremony',
      'Post-event recording access (30 days)',
    ],
    cta: 'Reserve Standard Pass',
  },
  {
    name: 'VIP Pass',
    price: '£299',
    color: '#8B6914',
    features: [
      'Everything in the Standard Pass',
      'Priority front-row seating',
      'Exclusive VIP networking dinner',
      '1-on-1 introductions with keynote speakers',
      '12 months of BBC member vault access',
      'Personalised certificate of attendance',
    ],
    cta: 'Reserve VIP Pass',
  },
];

export default function SummitTicketsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [form, setForm] = useState({ name: '', email: '', phone: '', tier: 'Standard Pass', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSending(true);
    try {
      await fetch('https://formsubmit.co/ajax/britishboardofcoaching@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `BBC Summit Ticket Request – ${form.name}`,
          Name: form.name,
          Email: form.email,
          Phone: form.phone || 'Not provided',
          'Ticket Tier': form.tier,
          Message: form.message || 'Not provided',
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

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20" style={{ backgroundColor: '#0B2E59', backgroundImage: `linear-gradient(135deg, rgba(11,46,89,0.92) 0%, rgba(11,46,89,0.75) 50%, rgba(31,107,77,0.7) 100%), url('https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 pattern-dots-light opacity-10" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 60% 40%, rgba(31,107,77,0.2) 0%, transparent 70%)' }} />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-6">
                Annual Summit
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-[1.1] mb-6">
                The Global Human Development &<br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #1F6B4D, #4ade80)' }}>
                  Coaching Innovation Summit
                </span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">
                Join hundreds of coaches, educators, and human development pioneers for a full day of keynotes, research presentations, hands-on workshops, and our credential graduation ceremony.
              </p>
              <div className="flex flex-wrap gap-6 text-white/80 text-sm mb-10">
                <span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4 text-secondary" /> 15 November 2025</span>
                <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-secondary" /> London, United Kingdom</span>
                <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4 text-secondary" /> 9:00 AM – 5:00 PM GMT</span>
                <span className="inline-flex items-center gap-2"><Users className="w-4 h-4 text-secondary" /> 300+ Delegates</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#tickets" onClick={(e) => { e.preventDefault(); document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 h-14 px-8 rounded-sm font-semibold text-white text-base transition-opacity hover:opacity-90" style={{ backgroundColor: '#1F6B4D' }}>
                  Get Your Tickets <ChevronRight className="w-5 h-5" />
                </a>
                <a href="#agenda" onClick={(e) => { e.preventDefault(); document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 h-14 px-8 rounded-sm font-semibold text-white text-base border border-white/30 bg-white/10 hover:bg-white/20 transition-colors">
                  View Full Agenda
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ticket Tiers */}
      <section id="tickets" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeUp()} className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> Ticket Options
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Choose Your Summit Experience</h2>
            <p className="text-muted-foreground leading-relaxed">
              Three ticket tiers designed to suit every level of involvement — whether you're joining us virtually or in person in London.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <motion.div key={i} {...fadeUp(i * 0.15)}
                className={`rounded-2xl border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col bg-white ${tier.featured ? 'ring-2 ring-secondary' : 'border-border'}`}>
                <div className="p-8 border-b border-border text-center" style={{ backgroundColor: tier.color }}>
                  <Ticket className="w-8 h-8 mx-auto mb-3 text-white" />
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  <p className="text-3xl font-bold text-white mt-2">{tier.price}</p>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1 mb-8">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: tier.color }} />
                        <span className="text-muted-foreground text-sm leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#register" onClick={(e) => { e.preventDefault(); document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md font-semibold text-white text-sm transition-opacity hover:opacity-90"
                    style={{ backgroundColor: tier.color }}>
                    {tier.cta} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section id="agenda" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> Full Agenda <span className="w-8 h-[2px] bg-secondary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Summit Day Schedule</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">A carefully curated day of keynotes, panels, workshops, and celebration.</p>
          </motion.div>
          <div className="space-y-4">
            {agenda.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.06)} className="flex gap-6 bg-gray-50 rounded-xl border border-border p-6 hover:border-secondary/40 transition-colors">
                <div className="flex-shrink-0 w-32">
                  <span className="text-sm font-bold text-secondary">{item.time}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> Reserve Your Spot <span className="w-8 h-[2px] bg-secondary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Request Your Summit Ticket</h2>
            <p className="text-muted-foreground">Fill in your details below and select your preferred ticket tier. We'll confirm your reservation within 24 hours.</p>
          </motion.div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 rounded-2xl border border-border bg-white">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#1F6B4D20' }}>
                <CheckCircle2 className="w-8 h-8" style={{ color: '#1F6B4D' }} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Ticket Request Received</h3>
              <p className="text-muted-foreground max-w-md mx-auto">Thank you, {form.name}. Our team will confirm your {form.tier} reservation and send payment details within 24 hours.</p>
            </motion.div>
          ) : (
            <motion.form {...fadeUp(0.1)} onSubmit={handleSubmit} className="space-y-5 bg-white rounded-2xl border border-border p-8 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Full Name *</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full h-11 px-4 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition"
                    placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Email Address *</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full h-11 px-4 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition"
                    placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Phone Number</label>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full h-11 px-4 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition"
                  placeholder="+44 ..." />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Ticket Tier</label>
                <select value={form.tier} onChange={(e) => setForm({ ...form, tier: e.target.value })}
                  className="w-full h-11 px-4 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition">
                  <option>Virtual Pass</option>
                  <option>Standard Pass</option>
                  <option>VIP Pass</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Special Requirements or Questions</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition resize-none"
                  placeholder="Any dietary, accessibility, or other requirements..." />
              </div>
              <button type="submit" disabled={sending}
                className="w-full h-12 rounded-lg font-semibold text-white text-sm transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: '#1F6B4D' }}>
                {sending ? 'Sending…' : 'Submit Ticket Request'}
              </button>
            </motion.form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
