import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { ChevronRight, Download, FileText, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay },
});

const guides = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'The Foundational Coaching Guide',
    description: 'A complete handbook covering core coaching boundaries, ethical guidelines, and essential conversation frameworks.',
    cta: 'Download Free PDF Starter Guide',
    tag: 'Free Resource',
    color: '#1F6B4D',
    pdf: '/pdfs/foundational-coaching-guide.pdf',
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: 'Emotional Recovery & Growth Roadmap',
    description: 'A step-by-step practical guide for assisting clients through major life transitions, self-worth rebuild, and emotional balance.',
    cta: 'Get Your Free Copy',
    tag: 'Free Resource',
    color: '#1F6B4D',
    pdf: '/pdfs/emotional-recovery-roadmap.pdf',
  },
];

const worksheets = [
  {
    title: 'Client Onboarding & Intake Package',
    description: 'Professional discovery questionnaires, service agreements, and goal-setting forms.',
    cta: 'Download Full Intake Package',
    pdf: '/pdfs/client-intake-package.pdf',
  },
  {
    title: 'Action Planning & Session Tracker',
    description: 'Structured GROW model templates and reflective exercise sheets to keep clients accountable between sessions.',
    cta: 'Download Session Action Planner',
    pdf: '/pdfs/session-action-planner.pdf',
  },
];

export default function ResourcesPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20" style={{ backgroundColor: '#0B2E59', backgroundImage: `linear-gradient(135deg, rgba(11,46,89,0.92) 0%, rgba(11,46,89,0.75) 50%, rgba(31,107,77,0.7) 100%), url('https://images.pexels.com/photos/5124874/pexels-photo-5124874.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 pattern-dots-light opacity-10" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 60% 40%, rgba(31,107,77,0.2) 0%, transparent 70%)' }} />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-6">
                Resources & Knowledge Centre
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-[1.1] mb-6">
                Access Essential Tools,<br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #1F6B4D, #4ade80)' }}>
                  Frameworks & Research.
                </span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl">
                Elevate every aspect of your coaching practice with our curated knowledge repository. Discover free downloadable session guides, client worksheets, research whitepapers, and comprehensive toolkits designed to streamline your client intake and enhance session outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#guides" onClick={(e) => { e.preventDefault(); document.getElementById('guides')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 h-14 px-8 rounded-sm font-semibold text-white text-base transition-opacity hover:opacity-90" style={{ backgroundColor: '#1F6B4D' }}>
                  Browse Free Resource Library <ChevronRight className="w-5 h-5" />
                </a>
                <a href="#vault" onClick={(e) => { e.preventDefault(); document.getElementById('vault')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 h-14 px-8 rounded-sm font-semibold text-white text-base border border-white/30 bg-white/10 hover:bg-white/20 transition-colors">
                  Access Member Vault
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Free Guides ── */}
      <section id="guides" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeUp()} className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> Free Downloads
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Downloadable Guides & Transformation Toolkits</h2>
            <p className="text-muted-foreground leading-relaxed">
              Start enhancing your practice today with our free, downloadable resources created by experienced practitioners to help you set clear boundaries, structure sessions, and guide client growth.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide, i) => (
              <motion.div key={i} {...fadeUp(i * 0.15)} className="bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
                <div className="p-8 border-b border-border" style={{ backgroundColor: '#0B2E59' }}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                      {guide.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: '#1F6B4D30', color: '#4ade80' }}>
                      {guide.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{guide.title}</h3>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-muted-foreground leading-relaxed flex-1 mb-6">{guide.description}</p>
                  <a href={guide.pdf} download className="inline-flex items-center gap-2 font-semibold text-sm text-white px-5 py-2.5 rounded-md transition-opacity hover:opacity-90 self-start" style={{ backgroundColor: guide.color }}>
                    <Download className="w-4 h-4" /> {guide.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Worksheets ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeUp()} className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> Ready-to-Use Templates
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Standardised Session Planners & Client Worksheets</h2>
            <p className="text-muted-foreground leading-relaxed">
              Save time and project absolute professionalism with customisable templates, client onboarding packs, and action planners ready to deploy directly in your private practice.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {worksheets.map((ws, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="flex items-start gap-5 bg-gray-50 rounded-xl border border-border p-7 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#0B2E5915', color: '#0B2E59' }}>
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-2">{ws.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{ws.description}</p>
                  <a href={ws.pdf} download className="inline-flex items-center gap-1.5 text-secondary font-semibold text-sm hover:gap-2.5 transition-all">
                    {ws.cta} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Member Vault ── */}
      <section id="vault" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0B2E59' }}>
        <div className="absolute inset-0 pattern-dots-light opacity-10" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <motion.div {...fadeUp()}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
              <Lock className="w-8 h-8" />
            </div>
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> Members Only <span className="w-8 h-[2px] bg-secondary" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-6">The BBC Certified Member Resource Vault</h2>
            <p className="text-white/65 leading-relaxed max-w-2xl mx-auto mb-10">
              Certified credential holders (ACQ, PCQ, MCQ) receive exclusive access to our proprietary curriculum modules, specialised session scripts, assessment tools, and archived masterclass libraries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="inline-flex items-center gap-2 h-12 px-7 rounded-md font-semibold text-white text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: '#1F6B4D' }}>
                Log In to Certified Member Portal <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="/#contact" className="inline-flex items-center gap-2 h-12 px-7 rounded-md font-semibold text-white text-sm border border-white/30 bg-white/10 hover:bg-white/20 transition-colors">
                Get Certified to Unlock Access
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
