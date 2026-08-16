import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Briefcase, BookOpen, Target, BarChart3 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Program {
  name: string;
  focus: string;
  details: string;
}

interface Category {
  title: string;
  icon: React.ReactNode;
  description: string;
  programs: Program[];
}

const categoryImages = [
  'https://images.pexels.com/photos/7693692/pexels-photo-7693692.jpeg?auto=compress&cs=tinysrgb&w=940&h=600',
  'https://images.pexels.com/photos/3958461/pexels-photo-3958461.jpeg?auto=compress&cs=tinysrgb&w=940&h=600',
  'https://images.pexels.com/photos/7433930/pexels-photo-7433930.jpeg?auto=compress&cs=tinysrgb&w=940&h=600',
];

const categories: Category[] = [
  {
    title: 'Core Credential Programs',
    icon: <ShieldCheck className="w-6 h-6" />,
    description: 'The foundational pillars of international coaching accreditation.',
    programs: [
      {
        name: 'ACQ – Associate Certified Qualification',
        focus: 'Foundational entry-level certification',
        details:
          'Designed for beginner coaches. Covers core coaching competencies, active listening, powerful questioning, ethical standards, and basic session structuring.',
      },
      {
        name: 'PCQ – Professional Certified Qualification',
        focus: 'Intermediate professional certification',
        details:
          'Built for active practitioners. Focuses on advanced coaching tools, behavioral modification, managing complex client challenges, and accumulating professional logged coaching hours.',
      },
      {
        name: 'MCQ – Master Certified Qualification',
        focus: 'Senior-level mastery program',
        details:
          'Tailored for veteran coaches and supervisors. Emphasizes master-level coaching presence, supervision techniques, systemic coaching, and high-impact transformational methodologies.',
      },
    ],
  },
  {
    title: 'Specialized Coaching Programs',
    icon: <HeartPulse className="w-6 h-6" />,
    description: 'Deep expertise in specific coaching modalities and human development.',
    programs: [
      {
        name: 'Life & Personal Transformation Coaching',
        focus: 'Individual growth and self-mastery',
        details:
          'Focuses on empowering individuals to achieve work-life balance, overcome personal roadblocks, set actionable goals, and foster deep self-awareness.',
      },
      {
        name: 'Healing Coaching',
        focus: 'Emotional recovery and inner peace',
        details:
          'A specialized framework centered on emotional recovery, process-driven trauma recovery, and helping clients navigate personal pain toward inner balance.',
      },
      {
        name: 'Relationship Coaching',
        focus: 'Interpersonal dynamics and connection',
        details:
          'Concentrates on interpersonal dynamics, healthy boundary setting, attachment styles, effective communication, and resolving relationship conflicts.',
      },
      {
        name: 'Enneagram Coaching Program',
        focus: 'Personality profiling and deep self-understanding',
        details:
          'Integrates the 9 Enneagram personality types to help clients discover core motivations, unconscious drivers, and tailored pathways for personal growth.',
      },
      {
        name: 'Positive Psychology Coaching',
        focus: 'Strengths, resilience, and mindset',
        details:
          'Applies evidence-based psychological theories, strength-finding exercises, resilience building, and mindset shifting to foster personal flourishing.',
      },
      {
        name: 'Academic Coaching',
        focus: 'Educational success and youth development',
        details:
          'Assists students, educators, and young adults with effective study strategies, time management, goal setting, and academic stress reduction.',
      },
      {
        name: 'Career Coaching',
        focus: 'Professional development and transition',
        details:
          'Guides professionals through career transitions, resume positioning, interview preparation, workplace goal alignment, and long-term career planning.',
      },
      {
        name: 'Nutrition & Wellness Coaching',
        focus: 'Holistic health and habit building',
        details:
          'Combines lifestyle habits, behavioral psychology around health and nutrition, stress management, and sustainable holistic wellness routines.',
      },
    ],
  },
  {
    title: 'Business & Corporate Programs',
    icon: <Briefcase className="w-6 h-6" />,
    description: 'Driving organizational excellence and executive leadership.',
    programs: [
      {
        name: 'Business Coaching',
        focus: 'Entrepreneurship and strategy',
        details:
          'Tailored for entrepreneurs, small business owners, and consultants to optimize business strategy, operational performance, marketing focus, and sustainable growth.',
      },
      {
        name: 'Executive & Leadership Coaching',
        focus: 'Corporate leadership and organizational growth',
        details:
          'High-level corporate coaching program designed for executives, department heads, and managers to refine leadership presence, team dynamics, and strategic execution.',
      },
      {
        name: 'SUMO Coaching Methodology',
        focus: 'Mindset mastery and performance transformation',
        details:
          'Proprietary framework focused on mindset mastery, resilience under pressure, proactive problem-solving, and achieving sustainable performance and life balance.',
      },
    ],
  },
];

export function Programs() {
  const [openCategory, setOpenCategory] = useState<Category | null>(null);

  return (
    <section id="programs" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary inline-block" />
              Programs & Certifications
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
              Master the Art of <br />Transformational Coaching
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Our comprehensive curriculum equips you with the theoretical knowledge, practical skills, and ethical foundation required to practice globally.
          </p>
        </div>

        {/* Category Cards — navy blue */}
        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
              style={{ backgroundColor: '#0B2E59' }}
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={categoryImages[idx]}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E59] via-[#0B2E59]/40 to-transparent" />
                <div className="absolute bottom-4 left-8">
                  <div className="w-12 h-12 bg-white/10 text-white rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
                    {category.icon}
                  </div>
                </div>
              </div>

              {/* Card Header */}
              <div className="p-8 border-b border-white/10">
                <h3 className="text-2xl font-serif font-bold text-white mb-3">
                  {category.title}
                </h3>
                <p className="text-sm text-white/60">
                  {category.description}
                </p>
              </div>

              {/* Program List */}
              <div className="p-8 flex-1">
                <ul className="space-y-3">
                  {category.programs.map((program, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span className="text-white/80 font-medium leading-tight text-sm">
                        {program.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Explore Button */}
              <div className="p-6 border-t border-white/10 mt-auto">
                <button
                  onClick={() => setOpenCategory(category)}
                  className="text-white font-semibold text-sm hover:text-secondary transition-colors inline-flex items-center gap-2 group/btn"
                >
                  <BookOpen className="w-4 h-4" />
                  Explore Curriculum
                  <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Curriculum Detail Modal */}
      <Dialog open={!!openCategory} onOpenChange={(open) => !open && setOpenCategory(null)}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto p-0">
          {openCategory && (
            <>
              {/* Modal Header */}
              <div className="sticky top-0 z-10 p-8 pb-6 border-b" style={{ backgroundColor: '#0B2E59' }}>
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white">
                      {openCategory.icon}
                    </div>
                    <span className="text-white/60 text-sm font-semibold uppercase tracking-widest">BBC Curriculum</span>
                  </div>
                  <DialogTitle className="text-2xl font-serif font-bold text-white text-left">
                    {openCategory.title}
                  </DialogTitle>
                  <p className="text-white/60 text-sm mt-1">{openCategory.description}</p>
                </DialogHeader>
              </div>

              {/* Program Detail Cards */}
              <div className="p-8 space-y-6 bg-gray-50">
                {openCategory.programs.map((program, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.06 }}
                    className="bg-white rounded-xl border border-border shadow-sm overflow-hidden"
                  >
                    {/* Program name bar */}
                    <div className="px-6 py-4 border-b border-border" style={{ backgroundColor: '#0B2E59' }}>
                      <h4 className="font-serif font-bold text-white text-lg">{program.name}</h4>
                    </div>
                    {/* Focus + Details */}
                    <div className="px-6 py-5 space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#1F6B4D20' }}>
                          <Target className="w-4 h-4" style={{ color: '#1F6B4D' }} />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#1F6B4D' }}>Focus</p>
                          <p className="text-foreground font-semibold">{program.focus}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#0B2E5915' }}>
                          <BookOpen className="w-4 h-4" style={{ color: '#0B2E59' }} />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#0B2E59' }}>What You Will Learn</p>
                          <p className="text-muted-foreground leading-relaxed">{program.details}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Comparison Table — only for Core Credential Programs */}
              {openCategory.title === 'Core Credential Programs' && (
                <div className="px-8 pb-8 bg-gray-50 space-y-4">
                  <div className="flex items-center gap-2 pt-2">
                    <BarChart3 className="w-4 h-4" style={{ color: '#1F6B4D' }} />
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#1F6B4D' }}>
                      Credential Comparison
                    </p>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-border shadow-sm text-sm">
                    {/* Header */}
                    <div className="grid grid-cols-4 font-bold">
                      <div className="px-4 py-3 bg-gray-100 text-muted-foreground text-xs uppercase tracking-wider border-r border-border">
                        Metric
                      </div>
                      {[
                        { code: 'ACQ', label: 'Associate', bg: '#2E7D5E' },
                        { code: 'PCQ', label: 'Professional', bg: '#0B2E59' },
                        { code: 'MCQ', label: 'Master', bg: '#8B6914' },
                      ].map((col) => (
                        <div
                          key={col.code}
                          className="px-4 py-3 text-white text-center border-r last:border-r-0 border-border"
                          style={{ backgroundColor: col.bg }}
                        >
                          <div className="font-black text-base leading-none">{col.code}</div>
                          <div className="text-white/70 text-xs mt-0.5">{col.label}</div>
                        </div>
                      ))}
                    </div>
                    {/* Rows */}
                    {[
                      {
                        metric: 'Primary Focus',
                        acq: 'Core skills & basic structure',
                        pcq: 'Deep behavioural change & custom strategies',
                        mcq: 'Supervision, methodology design & mastery',
                      },
                      {
                        metric: 'Training Hours',
                        acq: '30–60 hours',
                        pcq: '100+ hours',
                        mcq: 'Advanced master-level study',
                      },
                      {
                        metric: 'Client Experience',
                        acq: '20–50 hours',
                        pcq: '100–200+ hours',
                        mcq: '500+ hours',
                      },
                      {
                        metric: 'Key Output',
                        acq: 'Structured coaching sessions',
                        pcq: 'Independent, specialised practice',
                        mcq: 'Thought leadership & programme design',
                      },
                    ].map((row, i) => (
                      <div
                        key={i}
                        className={`grid grid-cols-4 border-t border-border text-xs ${
                          i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                        }`}
                      >
                        <div className="px-4 py-3 font-semibold text-foreground border-r border-border">
                          {row.metric}
                        </div>
                        <div className="px-4 py-3 text-muted-foreground border-r border-border text-center">
                          {row.acq}
                        </div>
                        <div className="px-4 py-3 text-muted-foreground border-r border-border text-center">
                          {row.pcq}
                        </div>
                        <div className="px-4 py-3 text-muted-foreground text-center">
                          {row.mcq}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Footer */}
              <div className="px-8 py-6 border-t border-border bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-muted-foreground text-sm">Ready to start your journey?</p>
                <button
                  onClick={() => {
                    setOpenCategory(null);
                    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 200);
                  }}
                  className="px-6 py-2.5 rounded-md font-semibold text-white text-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#1F6B4D' }}
                >
                  Apply Now
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
