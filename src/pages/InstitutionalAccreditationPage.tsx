import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import {
  ChevronRight,
  GraduationCap,
  Building2,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  ClipboardCheck,
  FileCheck,
  Award,
  Users,
  ShieldCheck,
} from 'lucide-react';
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
    title: 'Become a Certified BBC Trainer',
    idealFor: 'Experienced coaches, university lecturers, corporate facilitators',
    objective: 'Authorized to instruct, assess, and mentor students across ACQ and PCQ levels',
    requirement: 'PCQ/MCQ Credential + Verified Teaching/Coaching Experience',
    cta: 'Apply as Certified Trainer',
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    color: '#0B2E59',
    title: 'Certify Your School / Academy',
    idealFor: 'Coaching institutes, university departments, private academies',
    objective: 'Full institutional recognition to operate as an official BBC Accredited Center',
    requirement: 'Verified administrative facility, faculty credentials, quality assurance protocols',
    cta: 'Apply for School Accreditation',
    featured: true,
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    color: '#8B6914',
    title: 'Certify Your Curriculum',
    idealFor: 'Authors, curriculum creators, training providers',
    objective: 'Formally accredit your custom training modules, diplomas, or workshops',
    requirement: 'Evidence-based curriculum alignment with BBC core competency standards',
    cta: 'Submit Curriculum for Review',
  },
];

const trainerSteps = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'Prerequisite Verification',
    description:
      'Hold an active Professional Certified Qualification (PCQ) or Master Certified Qualification (MCQ) credential with verified coaching hours.',
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: 'Train-the-Trainer Facilitation Program',
    description:
      'Complete our intensive educator training module covering instructional design, assessment rubrics, and adult learning methodology.',
  },
  {
    icon: <ClipboardCheck className="w-5 h-5" />,
    title: 'Supervised Practicum Evaluation',
    description:
      'Deliver a supervised pilot training session and complete a live assessment review evaluated by senior MCQ evaluators.',
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: 'Faculty Onboarding & Licensing',
    description:
      'Receive official BBC Faculty accreditation, instructor branding assets, and access to turnkey teaching materials.',
  },
];

const schoolSteps = [
  { label: 'Application', detail: 'Submit Docs' },
  { label: 'Quality Audit', detail: 'Facility & System' },
  { label: 'Faculty Verification', detail: 'Certified Instructors' },
  { label: 'Status', detail: 'Accredited' },
];

const schoolRequirements = [
  {
    aspect: 'Faculty Qualification',
    details:
      'At least 50% of instructional staff must hold active BBC PCQ/MCQ or Certified Trainer credentials.',
  },
  {
    aspect: 'Quality Assurance',
    details:
      'Standardized student feedback systems, complaint handling protocols, and ethical oversight boards.',
  },
  {
    aspect: 'Administrative Capability',
    details:
      'Verified student record-keeping systems and secure credential verification procedures.',
  },
  {
    aspect: 'Annual Audit & Renewal',
    details:
      'Annual review of student outcomes, graduation metrics, and instructional quality.',
  },
];

const curriculumSteps = [
  {
    icon: <FileCheck className="w-5 h-5" />,
    title: 'Competency Alignment Mapping',
    description:
      'Align your course learning outcomes, lecture hours, and practical exercises with BBC core competency standards.',
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Educational Content Audit',
    description:
      'Submit full course syllabus, lesson plans, student workbooks, and evaluation rubrics for peer review by the BBC Academic Board.',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Pilot Cohort & Assessment Evaluation',
    description:
      'Conduct a reviewed pilot program or submit historical student outcome data for quality verification.',
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: 'Formal Approval & Credit Allocation',
    description:
      'Receive official “BBC Accredited Program” designation and assigned CPD/training hours status.',
  },
];

const programTypes = [
  {
    type: 'Comprehensive Diploma',
    duration: '60–120+ Hours',
    credit: 'Full Credential Track (ACQ/PCQ)',
    cta: 'Submit Diploma Curriculum',
  },
  {
    type: 'Specialized Niche Workshop',
    duration: '15–30 Hours',
    credit: 'Continuing Development Units (CPD)',
    cta: 'Submit Workshop Curriculum',
  },
  {
    type: 'Short Masterclasses',
    duration: '3–10 Hours',
    credit: 'CEU / Event Credits',
    cta: 'Submit Short Course',
  },
];

export default function InstitutionalAccreditationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [pathway, setPathway] = useState('trainer');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    credential: '',
    experience: '',
    programName: '',
    programType: '',
    programDuration: '',
    studentCount: '',
    facultyCount: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const pathwayLabels: Record<string, string> = {
    trainer: 'Certified BBC Trainer',
    school: 'School / Academy Accreditation',
    curriculum: 'Curriculum Certification',
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (pathway === 'trainer' && !form.credential.trim()) e.credential = 'Please specify your current credential';
    if (pathway === 'trainer' && !form.experience.trim()) e.experience = 'Please describe your teaching/coaching experience';
    if (pathway === 'school' && !form.organization.trim()) e.organization = 'Organization name is required';
    if (pathway === 'school' && !form.facultyCount.trim()) e.facultyCount = 'Please specify number of faculty';
    if (pathway === 'curriculum' && !form.programName.trim()) e.programName = 'Program name is required';
    if (pathway === 'curriculum' && !form.programType.trim()) e.programType = 'Please select a program type';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);
    try {
      await fetch('https://formsubmit.co/ajax/britishboardofcoaching@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `BBC Institutional Application – ${pathwayLabels[pathway]} – ${form.name}`,
          'Accreditation Pathway': pathwayLabels[pathway],
          Name: form.name,
          Email: form.email,
          Phone: form.phone || 'Not provided',
          Organization: form.organization || 'Not provided',
          Role: form.role || 'Not provided',
          'Current Credential': form.credential || 'Not provided',
          'Teaching/Coaching Experience': form.experience || 'Not provided',
          'Program Name': form.programName || 'Not provided',
          'Program Type': form.programType || 'Not provided',
          'Program Duration': form.programDuration || 'Not provided',
          'Student Count': form.studentCount || 'Not provided',
          'Faculty Count': form.facultyCount || 'Not provided',
          Message: form.message || 'Not provided',
          _template: 'table',
        }),
      });
    } catch (_) {
      /* still show success */
    }
    setSending(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* ── Hero ── */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundColor: '#0B2E59',
          backgroundImage: `linear-gradient(135deg, rgba(11,46,89,0.92) 0%, rgba(11,46,89,0.75) 50%, rgba(31,107,77,0.7) 100%), url('https://images.pexels.com/photos/5212343/pexels-photo-5212343.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 pattern-dots-light opacity-10" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 60% 40%, rgba(31,107,77,0.2) 0%, transparent 70%)',
          }}
        />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-6">
                Institutional & Educator Accreditation Hub
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-[1.1] mb-6">
                Expand Your Educational Impact with Official{' '}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #1F6B4D, #4ade80)',
                  }}
                >
                  BBC Credentials
                </span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl">
                Join an elite global network of certified master instructors, accredited training
                academies, and recognized educational programs. Validate your expertise, license
                turnkey teaching frameworks, and issue internationally recognized BBC credentials to
                your students and faculty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#pathways"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('pathways')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 h-14 px-8 rounded-sm font-semibold text-white text-base transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#1F6B4D' }}
                >
                  Apply for Institutional Accreditation <ChevronRight className="w-5 h-5" />
                </a>
                <a
                  href="#trainer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('trainer')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 h-14 px-8 rounded-sm font-semibold text-white text-base border border-white/30 bg-white/10 hover:bg-white/20 transition-colors"
                >
                  Become a Certified BBC Trainer
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Pathways Overview ── */}
      <section id="pathways" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeUp()} className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> Three Pathways to Accreditation
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Institutional Accreditation Pathways Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Choose the accreditation pathway that aligns with your role and institutional goals.
              Each route provides formal recognition, standardized frameworks, and the authority to
              deliver BBC-certified education.
            </p>
          </motion.div>

          {/* Desktop table */}
          <motion.div {...fadeUp(0.1)} className="hidden lg:block overflow-x-auto rounded-2xl border border-border bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-white" style={{ backgroundColor: '#0B2E59' }}>
                  <th className="px-6 py-4 font-semibold">Pathway</th>
                  <th className="px-6 py-4 font-semibold">Ideal For</th>
                  <th className="px-6 py-4 font-semibold">Core Objective</th>
                  <th className="px-6 py-4 font-semibold">Primary Requirement</th>
                  <th className="px-6 py-4 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {pathways.map((pw, i) => (
                  <tr key={i} className="border-t border-border hover:bg-gray-50/80 transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <span
                          className="w-9 h-9 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                          style={{ backgroundColor: pw.color }}
                        >
                          {pw.icon}
                        </span>
                        <span className="font-semibold text-foreground">{pw.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-muted-foreground">{pw.idealFor}</td>
                    <td className="px-6 py-5 text-muted-foreground">{pw.objective}</td>
                    <td className="px-6 py-5 text-muted-foreground">{pw.requirement}</td>
                    <td className="px-6 py-5 text-right">
                      <a
                        href="#contact-cta"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('contact-cta')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-1.5 font-semibold text-sm hover:gap-2.5 transition-all"
                        style={{ color: pw.color }}
                      >
                        {pw.cta} <ArrowRight className="w-4 h-4" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Mobile cards */}
          <div className="lg:hidden grid gap-6">
            {pathways.map((pw, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden"
              >
                <div className="p-6 flex items-center gap-3" style={{ backgroundColor: pw.color }}>
                  <span className="w-10 h-10 rounded-lg flex items-center justify-center text-white bg-white/15">
                    {pw.icon}
                  </span>
                  <h3 className="text-lg font-bold text-white">{pw.title}</h3>
                </div>
                <div className="p-6 space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/70 mb-1">Ideal For</p>
                    <p className="text-sm text-foreground/80">{pw.idealFor}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/70 mb-1">Core Objective</p>
                    <p className="text-sm text-foreground/80">{pw.objective}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/70 mb-1">Primary Requirement</p>
                    <p className="text-sm text-foreground/80">{pw.requirement}</p>
                  </div>
                  <a
                    href="#contact-cta"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact-cta')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 font-semibold text-sm hover:gap-2.5 transition-all pt-2"
                    style={{ color: pw.color }}
                  >
                    {pw.cta} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certified BBC Trainer ── */}
      <section id="trainer" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeUp()} className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> Step-by-Step Guide
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              How to Become a Certified BBC Trainer
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Becoming an accredited BBC Trainer authorizes you to facilitate official BBC
              certification programs, evaluate live coaching assessments, and mentor prospective
              coaches.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {trainerSteps.map((step, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="flex gap-4 bg-gray-50 rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: '#1F6B4D' }}
                  >
                    {i + 1}
                  </span>
                  {i < trainerSteps.length - 1 && (
                    <span className="w-px flex-1 bg-border mt-2" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-secondary">{step.icon}</span>
                    <h3 className="font-bold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row gap-4 mt-12">
            <a
              href="#contact-cta"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact-cta')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md font-semibold text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#1F6B4D' }}
            >
              Start Trainer Application <ChevronRight className="w-4 h-4" />
            </a>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md font-semibold text-foreground text-sm border border-border bg-white hover:bg-gray-50 transition-colors"
            >
              <BookOpen className="w-4 h-4" /> Download Educator Standards Guide
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Certify Your School / Academy ── */}
      <section id="school" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeUp()} className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> Institutional Accreditation
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              How to Certify Your School or Academy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Transform your training institute into an officially recognized BBC Accredited Center of
              Excellence. Institutional accreditation grants your school the authority to deliver
              certified programs and issue co-branded BBC credentials.
            </p>
          </motion.div>

          {/* Process flow */}
          <motion.div {...fadeUp(0.1)} className="mb-14">
            <div className="flex flex-col md:flex-row items-stretch gap-3">
              {schoolSteps.map((step, i) => (
                <React.Fragment key={i}>
                  <div className="flex-1 rounded-xl border border-border bg-white p-6 text-center shadow-sm">
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-3"
                      style={{ backgroundColor: '#0B2E59' }}
                    >
                      {i + 1}
                    </span>
                    <p className="font-bold text-foreground text-sm">{step.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{step.detail}</p>
                  </div>
                  {i < schoolSteps.length - 1 && (
                    <div className="hidden md:flex items-center justify-center px-1">
                      <ArrowRight className="w-5 h-5 text-muted-foreground/40" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* Requirements table */}
          <motion.div {...fadeUp(0.15)} className="overflow-x-auto rounded-2xl border border-border bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-white" style={{ backgroundColor: '#0B2E59' }}>
                  <th className="px-6 py-4 font-semibold w-1/3">Accreditation Aspect</th>
                  <th className="px-6 py-4 font-semibold">Requirement Details</th>
                </tr>
              </thead>
              <tbody>
                {schoolRequirements.map((req, i) => (
                  <tr key={i} className="border-t border-border hover:bg-gray-50/80 transition-colors">
                    <td className="px-6 py-5 font-semibold text-foreground align-top">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                        {req.aspect}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-muted-foreground">{req.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div {...fadeUp(0.25)} className="flex flex-col sm:flex-row gap-4 mt-12">
            <a
              href="#contact-cta"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact-cta')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md font-semibold text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#0B2E59' }}
            >
              Submit School Accreditation Application <ChevronRight className="w-4 h-4" />
            </a>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md font-semibold text-foreground text-sm border border-border bg-white hover:bg-gray-50 transition-colors"
            >
              <ClipboardCheck className="w-4 h-4" /> Download Institutional Audit Checklist
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── BBC Accredited Schools ── */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> Accredited Institutions{' '}
              <span className="w-8 h-[2px] bg-secondary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Schools &amp; Academies Certified by the BBC
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              These institutions have met the rigorous standards of BBC institutional accreditation,
              demonstrating excellence in faculty qualifications, quality assurance, and educational
              outcomes.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'AfricaAscendia Coaching Institute', location: 'Africa' },
              { name: 'Texas.gs', location: 'Middle East' },
              { name: 'Horizon Life Coaching Academy', location: 'United Kingdom' },
              { name: 'Nexus Leadership & Coaching School', location: 'Europe' },
              { name: 'Evergreen Coaching College', location: 'North America' },
            ].map((school, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="bg-white rounded-2xl border border-border p-8 text-center shadow-sm hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: '#1F6B4D15' }}
                >
                  <ShieldCheck className="w-7 h-7" style={{ color: '#1F6B4D' }} />
                </div>
                <h3 className="font-bold text-foreground text-base leading-snug mb-2">
                  {school.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-4">{school.location}</p>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full"
                  style={{ color: '#1F6B4D', backgroundColor: '#1F6B4D10' }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" /> BBC Accredited
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certify Your Curriculum ── */}
      <section id="curriculum" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeUp()} className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> Programmatic Accreditation
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              How to Certify Your Curriculum or Program
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have developed a unique coaching methodology, specialized diploma, or continuous
              professional development (CPD) workshop, BBC Curriculum Certification formally validates
              your program against international educational standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {curriculumSteps.map((step, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="flex gap-4 bg-gray-50 rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: '#8B6914' }}
                  >
                    {i + 1}
                  </span>
                  {i < curriculumSteps.length - 1 && (
                    <span className="w-px flex-1 bg-border mt-2" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span style={{ color: '#8B6914' }}>{step.icon}</span>
                    <h3 className="font-bold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.2)} className="mb-6">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Program Types Eligible for Accreditation
            </h3>
          </motion.div>

          {/* Desktop table */}
          <motion.div {...fadeUp(0.25)} className="hidden md:block overflow-x-auto rounded-2xl border border-border bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-white" style={{ backgroundColor: '#8B6914' }}>
                  <th className="px-6 py-4 font-semibold">Program Type</th>
                  <th className="px-6 py-4 font-semibold">Target Duration</th>
                  <th className="px-6 py-4 font-semibold">Assigned Credit Category</th>
                  <th className="px-6 py-4 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {programTypes.map((pt, i) => (
                  <tr key={i} className="border-t border-border hover:bg-gray-50/80 transition-colors">
                    <td className="px-6 py-5 font-semibold text-foreground">{pt.type}</td>
                    <td className="px-6 py-5 text-muted-foreground">{pt.duration}</td>
                    <td className="px-6 py-5 text-muted-foreground">{pt.credit}</td>
                    <td className="px-6 py-5 text-right">
                      <a
                        href="#contact-cta"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('contact-cta')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-1.5 font-semibold text-sm hover:gap-2.5 transition-all"
                        style={{ color: '#8B6914' }}
                      >
                        {pt.cta} <ArrowRight className="w-4 h-4" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Mobile cards */}
          <div className="md:hidden grid gap-4">
            {programTypes.map((pt, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="rounded-xl border border-border bg-white p-5 shadow-sm"
              >
                <h4 className="font-bold text-foreground mb-2">{pt.type}</h4>
                <p className="text-sm text-muted-foreground mb-1">
                  <span className="font-semibold text-foreground/70">Duration:</span> {pt.duration}
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="font-semibold text-foreground/70">Credit:</span> {pt.credit}
                </p>
                <a
                  href="#contact-cta"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact-cta')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 font-semibold text-sm hover:gap-2.5 transition-all"
                  style={{ color: '#8B6914' }}
                >
                  {pt.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section id="contact-cta" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> Apply Now{' '}
              <span className="w-8 h-[2px] bg-secondary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Elevate Your Educational Standards?
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Partner with the British Board of Coaching to empower your faculty, accredit your
              programs, and deliver world-class coaching education. Complete the form below to begin
              your institutional application.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 rounded-2xl border border-border bg-white shadow-sm"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: '#1F6B4D20' }}
              >
                <CheckCircle2 className="w-8 h-8" style={{ color: '#1F6B4D' }} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Application Submitted</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Thank you, {form.name}. Our accreditation team will review your application for{' '}
                {pathwayLabels[pathway]} and be in touch within 3–5 business days.
              </p>
            </motion.div>
          ) : (
            <motion.form
              {...fadeUp(0.1)}
              onSubmit={handleSubmit}
              className="space-y-5 bg-white rounded-2xl border border-border p-8 shadow-sm"
            >
              {/* Pathway selector */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Accreditation Pathway *
                </label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { key: 'trainer', label: 'Certified Trainer', icon: <GraduationCap className="w-4 h-4" /> },
                    { key: 'school', label: 'School / Academy', icon: <Building2 className="w-4 h-4" /> },
                    { key: 'curriculum', label: 'Curriculum', icon: <BookOpen className="w-4 h-4" /> },
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => setPathway(opt.key)}
                      className={`flex items-center justify-center gap-2 h-11 rounded-lg border text-sm font-medium transition-all bg-white hover:bg-gray-50 ${
                        pathway === opt.key
                          ? 'text-secondary border-secondary shadow-sm'
                          : 'text-foreground border-border'
                      }`}
                    >
                      {opt.icon} {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Common fields */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Full Name *</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: '' }); }}
                    className={`w-full h-11 px-4 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition ${errors.name ? 'border-red-400' : 'border-border'}`}
                    placeholder="Dr. Jane Smith"
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Email Address *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: '' }); }}
                    className={`w-full h-11 px-4 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition ${errors.email ? 'border-red-400' : 'border-border'}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Phone Number</label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full h-11 px-4 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition"
                    placeholder="+44 ..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Organization / Institution</label>
                  <input
                    value={form.organization}
                    onChange={(e) => setForm({ ...form, organization: e.target.value })}
                    className={`w-full h-11 px-4 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition ${errors.organization ? 'border-red-400' : 'border-border'}`}
                    placeholder="e.g. London Coaching Academy"
                  />
                  {errors.organization && <p className="text-xs text-red-500 mt-1">{errors.organization}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Your Role / Title</label>
                <input
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full h-11 px-4 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition"
                  placeholder="e.g. Programme Director, Senior Lecturer"
                />
              </div>

              {/* Conditional: Trainer fields */}
              {pathway === 'trainer' && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Current BBC Credential (PCQ / MCQ) *</label>
                    <input
                      required
                      value={form.credential}
                      onChange={(e) => { setForm({ ...form, credential: e.target.value }); setErrors({ ...errors, credential: '' }); }}
                      className={`w-full h-11 px-4 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition ${errors.credential ? 'border-red-400' : 'border-border'}`}
                      placeholder="e.g. PCQ – 2023, MCQ – 2021"
                    />
                    {errors.credential && <p className="text-xs text-red-500 mt-1">{errors.credential}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Teaching / Coaching Experience *</label>
                    <textarea
                      required
                      value={form.experience}
                      onChange={(e) => { setForm({ ...form, experience: e.target.value }); setErrors({ ...errors, experience: '' }); }}
                      rows={3}
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition resize-none ${errors.experience ? 'border-red-400' : 'border-border'}`}
                      placeholder="Describe your teaching and coaching hours, institutions, and specializations..."
                    />
                    {errors.experience && <p className="text-xs text-red-500 mt-1">{errors.experience}</p>}
                  </div>
                </>
              )}

              {/* Conditional: School fields */}
              {pathway === 'school' && (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">Number of Faculty / Instructors *</label>
                      <input
                        required
                        value={form.facultyCount}
                        onChange={(e) => { setForm({ ...form, facultyCount: e.target.value }); setErrors({ ...errors, facultyCount: '' }); }}
                        className={`w-full h-11 px-4 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition ${errors.facultyCount ? 'border-red-400' : 'border-border'}`}
                        placeholder="e.g. 12"
                      />
                      {errors.facultyCount && <p className="text-xs text-red-500 mt-1">{errors.facultyCount}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">Number of Current Students</label>
                      <input
                        value={form.studentCount}
                        onChange={(e) => setForm({ ...form, studentCount: e.target.value })}
                        className="w-full h-11 px-4 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition"
                        placeholder="e.g. 150"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Quality Assurance & Facilities Summary</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition resize-none"
                      placeholder="Describe your student feedback systems, complaint protocols, record-keeping, and facility details..."
                    />
                  </div>
                </>
              )}

              {/* Conditional: Curriculum fields */}
              {pathway === 'curriculum' && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Program / Course Name *</label>
                    <input
                      required
                      value={form.programName}
                      onChange={(e) => { setForm({ ...form, programName: e.target.value }); setErrors({ ...errors, programName: '' }); }}
                      className={`w-full h-11 px-4 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition ${errors.programName ? 'border-red-400' : 'border-border'}`}
                      placeholder="e.g. Advanced Relationship Coaching Diploma"
                    />
                    {errors.programName && <p className="text-xs text-red-500 mt-1">{errors.programName}</p>}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">Program Type *</label>
                      <select
                        required
                        value={form.programType}
                        onChange={(e) => { setForm({ ...form, programType: e.target.value }); setErrors({ ...errors, programType: '' }); }}
                        className={`w-full h-11 px-4 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition ${errors.programType ? 'border-red-400' : 'border-border'}`}
                      >
                        <option value="">Select program type...</option>
                        <option value="Comprehensive Diploma (60–120+ Hours)">Comprehensive Diploma (60–120+ Hours)</option>
                        <option value="Specialized Workshop (15–30 Hours)">Specialized Workshop (15–30 Hours)</option>
                        <option value="Short Masterclass (3–10 Hours)">Short Masterclass (3–10 Hours)</option>
                      </select>
                      {errors.programType && <p className="text-xs text-red-500 mt-1">{errors.programType}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">Program Duration (hours)</label>
                      <input
                        value={form.programDuration}
                        onChange={(e) => setForm({ ...form, programDuration: e.target.value })}
                        className="w-full h-11 px-4 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition"
                        placeholder="e.g. 80"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Curriculum Summary & Learning Outcomes</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition resize-none"
                      placeholder="Describe your course learning outcomes, lecture hours, practical exercises, and alignment with BBC core competencies..."
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full h-12 rounded-lg font-semibold text-white text-sm transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: '#1F6B4D' }}
              >
                {sending ? 'Submitting…' : `Submit ${pathwayLabels[pathway]} Application`}
              </button>
            </motion.form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
