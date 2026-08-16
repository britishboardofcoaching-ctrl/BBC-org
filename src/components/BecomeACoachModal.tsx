import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Globe,
  Lightbulb,
  Layers,
  BookOpen,
  Users,
  Award,
  Star,
  Crown,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';

interface Props {
  open: boolean;
  onClose: () => void;
}

const paths = [
  {
    code: 'ACQ',
    level: 'Level 1',
    title: 'Associate Certified Qualification',
    color: '#2E7D5E',
    lightColor: '#2E7D5E15',
    icon: <Award className="w-5 h-5" />,
    bestFor: 'Beginners, managers, HR professionals, and social workers looking to integrate core coaching skills into their career.',
    learn: 'Essential coaching frameworks (e.g., GROW model), active listening, goal setting, and professional ethics.',
    outcome: 'Ability to conduct structured, ethically sound coaching conversations with confidence.',
    format: '6 Weeks | Online & Interactive',
  },
  {
    code: 'PCQ',
    level: 'Level 2',
    title: 'Professional Certified Qualification',
    color: '#0B2E59',
    lightColor: '#0B2E5915',
    icon: <Star className="w-5 h-5" />,
    bestFor: 'Aspiring full-time coaches, specialised consultants, and practitioners ready to build an independent practice.',
    learn: 'Advanced cognitive and behavioural strategies, mindset transformation, handling resistance, and customised client journey design.',
    outcome: 'Mastery over complex client transformations, deep-level interventions, and independent practice readiness.',
    format: '12 Weeks | Advanced Modules & Supervised Hours',
    featured: true,
  },
  {
    code: 'MCQ',
    level: 'Level 3',
    title: 'Master Certified Qualification',
    color: '#8B6914',
    lightColor: '#8B691415',
    icon: <Crown className="w-5 h-5" />,
    bestFor: 'Experienced coaches, supervisors, authors, and founders creating proprietary methodologies or leading organisations.',
    learn: 'Methodological design, clinical-style supervision, intuitive presence, and thought leadership.',
    outcome: 'Recognition as an industry authority capable of training, supervising, and mentoring other coaches.',
    format: 'Master Track | Portfolio & Supervision Review',
  },
];

const whyPoints = [
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: 'Drive Meaningful Change',
    body: 'Empower individuals and leaders to overcome obstacles, unlock potential, and reach their goals.',
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Global Recognition',
    body: 'Stand out in a booming industry with structured, standards-backed credentials recognised worldwide.',
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: 'Flexible & Scalable',
    body: 'Build a private practice, consult with organisations, or integrate coaching into your executive leadership role.',
  },
];

const standards = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'Accredited Curriculum',
    body: 'Rigorous training aligned with British Board of Coaching (BBC) global standards.',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Practical Mentorship',
    body: 'Learn through live practice, supervised sessions, and direct expert feedback — not just theory.',
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Methodology-Driven',
    body: 'Gain practical tools, frameworks, and methodologies you can implement with clients immediately.',
  },
];

const faqs = [
  {
    q: 'Do I need prior experience in coaching to enrol in ACQ?',
    a: 'No. The ACQ path is designed to take you from foundational principles to practical application with no prior experience required.',
  },
  {
    q: 'How are the practical client hours fulfilled?',
    a: 'You will have opportunities for peer coaching, supervised practice sessions, and guided real-world application during the programme.',
  },
  {
    q: 'Will these credentials help me practise internationally?',
    a: 'Yes. BBC frameworks are designed to meet international standards of practice and ethics, giving you global credibility.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-foreground text-sm pr-4">{q}</span>
        <ChevronDown
          className={`w-4 h-4 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-4 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function BecomeACoachModal({ open, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">

        {/* ── Hero Banner ── */}
        <div className="relative p-10 overflow-hidden" style={{ backgroundColor: '#0B2E59' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(31,107,77,0.25) 0%, transparent 70%)',
            }}
          />
          <DialogHeader className="relative z-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-white/50 mb-3">
              British Board of Coaching
            </span>
            <DialogTitle className="text-3xl font-bold text-white text-left leading-tight mb-3">
              Transform Lives.<br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(90deg, #1F6B4D, #4ade80)' }}
              >
                Build a High-Impact Coaching Career.
              </span>
            </DialogTitle>
            <p className="text-white/65 text-sm leading-relaxed max-w-lg">
              Gain internationally recognised credentials with the BBC and master the art and science of human transformation.
            </p>
          </DialogHeader>
        </div>

        <div className="p-8 space-y-12 bg-gray-50">

          {/* ── Why Coaching? ── */}
          <section>
            <SectionLabel>Why Choose a Career in Professional Coaching?</SectionLabel>
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              {whyPoints.map((pt, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-xl border border-border p-5 shadow-sm"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: '#1F6B4D18', color: '#1F6B4D' }}
                  >
                    {pt.icon}
                  </div>
                  <h4 className="font-bold text-foreground text-sm mb-1">{pt.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{pt.body}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── Certification Paths ── */}
          <section>
            <SectionLabel>BBC Accreditation Pathways</SectionLabel>
            <p className="text-muted-foreground text-sm mb-5">
              Choose the level that matches your experience and ambition.
            </p>
            <div className="space-y-4">
              {paths.map((path, i) => (
                <motion.div
                  key={path.code}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-white rounded-xl border overflow-hidden shadow-sm ${path.featured ? 'ring-2' : 'border-border'}`}
                  style={path.featured ? { borderColor: path.color, '--tw-ring-color': path.color } as React.CSSProperties : {}}
                >
                  {path.featured && (
                    <div className="text-center text-xs font-bold uppercase tracking-widest py-1.5 text-white" style={{ backgroundColor: path.color }}>
                      Most Popular
                    </div>
                  )}
                  <div className="flex items-start gap-0">
                    {/* Left colour strip */}
                    <div
                      className="w-1.5 self-stretch flex-shrink-0 rounded-l-xl"
                      style={{ backgroundColor: path.color }}
                    />
                    <div className="p-5 flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                          style={{ backgroundColor: path.color }}
                        >
                          {path.icon}
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: path.color }}>{path.level}</span>
                          <h4 className="font-bold text-foreground text-sm leading-tight">{path.code} – {path.title}</h4>
                        </div>
                        <span className="ml-auto text-xs text-muted-foreground bg-gray-100 px-2.5 py-1 rounded-full hidden sm:block">
                          {path.format}
                        </span>
                      </div>
                      <div className="grid sm:grid-cols-3 gap-3 text-xs">
                        <Detail label="Best For" value={path.bestFor} color={path.color} />
                        <Detail label="What You'll Learn" value={path.learn} color={path.color} />
                        <Detail label="Key Outcome" value={path.outcome} color={path.color} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── Why Train With Us ── */}
          <section>
            <SectionLabel>The Standards That Set You Apart</SectionLabel>
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              {standards.map((s, i) => (
                <div key={i} className="bg-white rounded-xl border border-border p-5 shadow-sm flex gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: '#0B2E5912', color: '#0B2E59' }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm mb-1">{s.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section>
            <SectionLabel>Frequently Asked Questions</SectionLabel>
            <div className="space-y-3 mt-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </section>
        </div>

        {/* ── Closing CTA ── */}
        <div className="px-8 py-8 border-t border-border bg-white">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-foreground mb-2">Ready to Start Your Journey?</h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Take the first step toward becoming a certified professional coach. Apply today to secure your place in our next cohort.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => {
                onClose();
                setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 200);
              }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md font-semibold text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#1F6B4D' }}
            >
              Start Your Application
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                onClose();
                setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 200);
              }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md font-semibold text-sm border border-border hover:bg-gray-50 transition-colors"
              style={{ color: '#0B2E59' }}
            >
              Book a Consultation Call
            </button>
          </div>
        </div>

      </DialogContent>
    </Dialog>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-1">
      <span className="w-6 h-[2px] bg-secondary inline-block flex-shrink-0" />
      <h3 className="text-base font-bold text-foreground uppercase tracking-wider">{children}</h3>
    </div>
  );
}

function Detail({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="space-y-1">
      <p className="font-bold uppercase tracking-wider text-[10px]" style={{ color }}>
        {label}
      </p>
      <p className="text-muted-foreground leading-relaxed">{value}</p>
    </div>
  );
}
