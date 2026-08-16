import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Crown } from 'lucide-react';

const credentials = [
  {
    code: 'ACQ',
    title: 'Associate Certified Qualification',
    level: 'Level 1',
    icon: <Award className="w-7 h-7" />,
    color: '#2E7D5E',
    lightColor: '#2E7D5E18',
    tagline: 'Begin Your Coaching Journey',
    description:
      'The entry point into BBC-accredited professional coaching. ACQ equips emerging coaches with core competencies, ethical grounding, and structured session skills.',
    highlights: [
      '30–60 training hours',
      '20–50 client coaching hours',
      'Core coaching competencies',
      'Active listening & powerful questioning',
      'Ethical standards & session structuring',
    ],
  },
  {
    code: 'PCQ',
    title: 'Professional Certified Qualification',
    level: 'Level 2',
    icon: <Star className="w-7 h-7" />,
    color: '#0B2E59',
    lightColor: '#0B2E5918',
    tagline: 'Elevate Your Practice',
    description:
      'Built for active practitioners ready to deepen their impact. PCQ advances your toolkit with behavioural change frameworks, complex client management, and logged professional hours.',
    highlights: [
      '100+ training hours',
      '100–200+ client coaching hours',
      'Advanced coaching tools & frameworks',
      'Behavioural modification techniques',
      'Complex client challenge management',
    ],
    featured: true,
  },
  {
    code: 'MCQ',
    title: 'Master Certified Qualification',
    level: 'Level 3',
    icon: <Crown className="w-7 h-7" />,
    color: '#8B6914',
    lightColor: '#8B691418',
    tagline: 'Achieve Mastery & Lead',
    description:
      'The pinnacle of BBC accreditation. MCQ is reserved for veteran coaches and supervisors who shape methodology, lead with systemic thinking, and build transformational programmes.',
    highlights: [
      'Advanced master-level study',
      '500+ client coaching hours',
      'Supervision techniques & systemic coaching',
      'Methodology design & thought leadership',
      'High-impact transformational frameworks',
    ],
  },
];

const comparisonRows = [
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
];

export function Accreditation() {
  return (
    <section id="accreditation" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #0B2E59 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
            <span className="w-8 h-[2px] bg-secondary inline-block" />
            Core Credential Diplomas
            <span className="w-8 h-[2px] bg-secondary inline-block" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4">
            The Foundational Pillars of{' '}
            <span className="text-secondary">International Accreditation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            BBC's three-tier credential pathway is designed to take coaches from first foundations through to global mastery — each level building on the last.
          </p>
        </div>

        {/* Credential Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {credentials.map((cred, idx) => (
            <motion.div
              key={cred.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative rounded-2xl border overflow-hidden flex flex-col transition-all duration-500 hover:shadow-xl ${
                cred.featured
                  ? 'shadow-2xl ring-2 ring-offset-2'
                  : 'shadow-md border-border'
              }`}
              style={
                cred.featured
                  ? ({ borderColor: cred.color, '--tw-ring-color': cred.color } as React.CSSProperties)
                  : {}
              }
            >
              {cred.featured && (
                <div
                  className="absolute top-0 left-0 right-0 text-center text-xs font-bold uppercase tracking-widest py-1.5 text-white"
                  style={{ backgroundColor: cred.color }}
                >
                  Most Popular
                </div>
              )}

              {/* Card top */}
              <div
                className={`p-8 ${cred.featured ? 'pt-10' : ''}`}
                style={{ backgroundColor: cred.color }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                    style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                  >
                    {cred.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/60 bg-white/10 px-3 py-1 rounded-full">
                    {cred.level}
                  </span>
                </div>
                <div className="text-3xl font-black text-white mb-1">{cred.code}</div>
                <div className="text-white/80 font-semibold text-sm mb-3">{cred.title}</div>
                <div className="text-white/50 text-xs font-semibold uppercase tracking-widest">{cred.tagline}</div>
              </div>

              {/* Card body */}
              <div className="p-8 flex-1 flex flex-col bg-white">
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {cred.description}
                </p>
                <ul className="space-y-2.5 flex-1">
                  {cred.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: cred.lightColor }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: cred.color }}
                        />
                      </div>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-8 pb-8 bg-white">
                <a
                  href="#contact"
                  className="block w-full text-center py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: cred.color, color: '#fff' }}
                >
                  Apply for {cred.code}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">At a Glance</h3>
            <p className="text-muted-foreground text-sm">Compare credentials side by side</p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
            {/* Table header */}
            <div className="grid grid-cols-4 text-sm font-bold">
              <div className="px-6 py-4 bg-gray-50 border-r border-border text-muted-foreground uppercase tracking-wider text-xs">
                Metric
              </div>
              {[
                { code: 'ACQ', label: 'Associate', color: '#2E7D5E' },
                { code: 'PCQ', label: 'Professional', color: '#0B2E59' },
                { code: 'MCQ', label: 'Master', color: '#8B6914' },
              ].map((col) => (
                <div
                  key={col.code}
                  className="px-6 py-4 text-white text-center border-r last:border-r-0 border-border"
                  style={{ backgroundColor: col.color }}
                >
                  <div className="font-black text-lg leading-none">{col.code}</div>
                  <div className="text-white/70 text-xs font-semibold mt-0.5">{col.label}</div>
                </div>
              ))}
            </div>

            {/* Table rows */}
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-4 text-sm border-t border-border ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'
                }`}
              >
                <div className="px-6 py-4 font-semibold text-foreground border-r border-border">
                  {row.metric}
                </div>
                <div className="px-6 py-4 text-muted-foreground border-r border-border text-center">
                  {row.acq}
                </div>
                <div className="px-6 py-4 text-muted-foreground border-r border-border text-center">
                  {row.pcq}
                </div>
                <div className="px-6 py-4 text-muted-foreground text-center">
                  {row.mcq}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
