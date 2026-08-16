import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { ChevronRight, GraduationCap, Shield, Building2, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay },
});

const pathways = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    color: '#1F6B4D',
    title: 'Certified Faculty Instructor',
    description:
      'Authorised to deliver, facilitate, and assess candidates taking the Associate (ACQ) and Professional (PCQ) credential pathways using our standardised, evidence-based curriculum.',
    cta: 'View Instructor Qualification Requirements',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    color: '#0B2E59',
    title: 'Clinical Supervision & Mentor Coach',
    description:
      'Specialised qualification for senior practitioners focused on evaluating live coaching sessions, providing structured reflective feedback, and mentoring coaches through credential renewal and level advancement.',
    cta: 'Explore Mentor Coach Certification',
    featured: true,
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    color: '#8B6914',
    title: 'Institutional & Academy Accreditation',
    description:
      'For training centres, universities, and coaching institutes seeking to have their proprietary curriculum, workshops, or post-graduate diplomas formally accredited by the British Board of Coaching.',
    cta: 'Apply for Institutional Accreditation',
  },
];

const resources = [
  'White-labelled presentation slides & lecture decks',
  'Student workbooks & practical exercise packs',
  'Real-world case study banks',
  'Rubric-based assessment & grading tools',
  'Competency-aligned curriculum maps',
  'Archived masterclass & training libraries',
];

export default function CoachEducatorsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [form, setForm] = useState({ name: '', email: '', phone: '', expertise: '', bio: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.expertise.trim()) e.expertise = 'Please describe your area of expertise';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSending(true);
    try {
      await fetch('https://formsubmit.co/ajax/britishboardofcoaching@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `BBC Faculty Application – ${form.name}`,
          Name: form.name,
          Email: form.email,
          Phone: form.phone || 'Not provided',
          'Area of Expertise': form.expertise,
          'Professional Bio': form.bio || 'Not provided',
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
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20" style={{ backgroundColor: '#0B2E59', backgroundImage: `linear-gradient(135deg, rgba(11,46,89,0.92) 0%, rgba(11,46,89,0.75) 50%, rgba(31,107,77,0.7) 100%), url('https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 pattern-dots-light opacity-10" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 60% 40%, rgba(31,107,77,0.2) 0%, transparent 70%)' }} />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-6">
                Coach Educators & Instructors
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-[1.1] mb-6">
                Empower the Next Generation of<br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #1F6B4D, #4ade80)' }}>
                  Transformative Practitioners.
                </span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl">
                Join an elite faculty of master trainers, curriculum designers, and thought leaders. Gain institutional recognition, access standardised international teaching frameworks, and deliver British Board of Coaching (BBC) accredited programmes to aspiring coaches worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#apply" onClick={(e) => { e.preventDefault(); document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-sm font-semibold text-white text-base transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#1F6B4D' }}>
                  Apply to Become an Accredited Educator <ChevronRight className="w-5 h-5" />
                </a>
                <a href="#pathways" onClick={(e) => { e.preventDefault(); document.getElementById('pathways')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="inline-flex items-center gap-2 h-14 px-8 rounded-sm font-semibold text-white text-base border border-white/30 bg-white/10 hover:bg-white/20 transition-colors">
                  Explore Institutional Accreditation Options
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Educator Pathways ── */}
      <section id="pathways" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeUp()} className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> Educator Framework
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Structured Standards for Training, Supervision, and Programme Facilitation</h2>
            <p className="text-muted-foreground leading-relaxed">
              Whether you are an experienced Master Certified Coach (MCQ), an academic lecturer, or an institutional programme developer, our Educator Framework equips you with the tools, authority, and standardised materials needed to deliver high-impact coaching education.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-8">
            {pathways.map((pw, i) => (
              <motion.div key={i} {...fadeUp(i * 0.15)}
                className={`rounded-2xl border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${pw.featured ? 'ring-2' : 'border-border'}`}
                style={pw.featured ? { borderColor: pw.color } as React.CSSProperties : {}}>
                <div className="p-8 border-b border-border" style={{ backgroundColor: pw.color }}>
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 text-white" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                    {pw.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">{pw.title}</h3>
                </div>
                <div className="p-8 flex-1 flex flex-col bg-white">
                  <p className="text-muted-foreground leading-relaxed flex-1 mb-6">{pw.description}</p>
                  <a href="#apply" onClick={(e) => { e.preventDefault(); document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 font-semibold text-sm hover:gap-3 transition-all" style={{ color: pw.color }}>
                    {pw.cta} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Educator Resources ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp()}>
              <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
                <span className="w-8 h-[2px] bg-secondary" /> Curriculum Support
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Comprehensive Educational Toolkits & Turnkey Teaching Materials</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Focus on teaching and mentoring while we handle the instructional design. Accredited educators gain complete access to white-labelled presentation slides, student workbooks, case study banks, and rubric-based assessment tools aligned with international competency standards.
              </p>
              <a href="#apply" onClick={(e) => { e.preventDefault(); document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 h-12 px-7 rounded-md font-semibold text-white text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: '#1F6B4D' }}>
                <BookOpen className="w-4 h-4" /> Access Educator Resource Hub
              </a>
            </motion.div>
            <motion.div {...fadeUp(0.2)}>
              <ul className="space-y-3">
                {resources.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl border border-border px-5 py-4">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#1F6B4D' }} />
                    <span className="text-foreground/80 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Faculty Application Form ── */}
      <section id="apply" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> Join Our Faculty <span className="w-8 h-[2px] bg-secondary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Join Our International Faculty Network</h2>
            <p className="text-muted-foreground">
              We are continuously seeking distinguished educators, authors, and industry pioneers passionate about raising the standards of human development and professional coaching globally.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 rounded-2xl border border-border bg-white">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#1F6B4D20' }}>
                <CheckCircle2 className="w-8 h-8" style={{ color: '#1F6B4D' }} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Application Submitted</h3>
              <p className="text-muted-foreground max-w-md mx-auto">Thank you, {form.name}. Our faculty team will review your application and be in touch within 3–5 business days.</p>
            </motion.div>
          ) : (
            <motion.form {...fadeUp(0.1)} onSubmit={handleSubmit} className="space-y-5 bg-white rounded-2xl border border-border p-8 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Full Name *</label>
                  <input required value={form.name} onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: '' }); }}
                    className={`w-full h-11 px-4 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition ${errors.name ? 'border-red-400' : 'border-border'}`}
                    placeholder="Dr. Jane Smith" />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Email Address *</label>
                  <input required type="email" value={form.email} onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: '' }); }}
                    className={`w-full h-11 px-4 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition ${errors.email ? 'border-red-400' : 'border-border'}`}
                    placeholder="your@email.com" />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Phone Number</label>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full h-11 px-4 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition"
                  placeholder="+44 ..." />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Area of Expertise *</label>
                <input required value={form.expertise} onChange={(e) => { setForm({ ...form, expertise: e.target.value }); setErrors({ ...errors, expertise: '' }); }}
                  className={`w-full h-11 px-4 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition ${errors.expertise ? 'border-red-400' : 'border-border'}`}
                  placeholder="e.g. Executive Coaching, Emotional Recovery, Leadership..." />
                {errors.expertise && <p className="text-xs text-red-500 mt-1">{errors.expertise}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Professional Bio / Background</label>
                <textarea value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })}
                  rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition resize-none"
                  placeholder="Briefly describe your qualifications, credentials, and teaching experience..." />
              </div>
              <button type="submit" disabled={sending}
                className="w-full h-12 rounded-lg font-semibold text-white text-sm transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: '#1F6B4D' }}>
                {sending ? 'Submitting…' : 'Submit Faculty Application'}
              </button>
            </motion.form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
