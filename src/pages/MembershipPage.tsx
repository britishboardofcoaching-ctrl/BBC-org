import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import {
  User, Eye, Target, GraduationCap, Users, BookOpen, Building2,
  Shield, Heart, Lightbulb, Compass, Award, Brain, TrendingUp,
  HeartHandshake, Sparkles, CheckCircle2, ArrowRight, Mail,
} from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay },
});

const services = [
  { icon: <User className="w-6 h-6" />, title: 'One-to-One Academic Coaching', description: 'Personalised coaching partnerships that help learners identify goals, overcome obstacles, and develop sustainable study strategies through reflective dialogue and deep listening.' },
  { icon: <GraduationCap className="w-6 h-6" />, title: 'Coaching for Researchers', description: 'Dedicated support for researchers navigating the complexities of academic inquiry, project management, writing productivity, and maintaining motivation throughout the research journey.' },
  { icon: <Users className="w-6 h-6" />, title: 'Academic Coaching Workshops', description: 'Interactive group workshops introducing academic coaching principles, reflective practice techniques, and collaborative learning strategies tailored to institutional needs.' },
  { icon: <BookOpen className="w-6 h-6" />, title: 'Professional Development Workshops', description: 'Equip educators and academic staff with coaching skills that transform teaching relationships, enhance student engagement, and foster reflective professional growth.' },
  { icon: <Building2 className="w-6 h-6" />, title: 'Coaching for Educational Institutions', description: 'Partner with schools, universities, and academic departments to embed coaching culture across programmes, supporting both staff development and student success initiatives.' },
];

const whoWeSupport = [
  { label: 'Secondary Students' },
  { label: 'University Students' },
  { label: "Master's Students" },
  { label: 'PhD Students' },
  { label: 'Researchers' },
  { label: 'Early-Career Academics' },
  { label: 'Teachers' },
  { label: 'Educational Institutions' },
];

const impacts = [
  { icon: <Award className="w-5 h-5" />, title: 'Confidence', description: 'Learners develop self-belief and trust in their abilities, approaching academic challenges with assurance and clarity.' },
  { icon: <Shield className="w-5 h-5" />, title: 'Resilience', description: 'Students build the capacity to navigate setbacks, adapt to change, and persist through difficulty with renewed determination.' },
  { icon: <Brain className="w-5 h-5" />, title: 'Independent Learning', description: 'Coaching cultivates self-directed learners who take ownership of their study processes and make informed decisions about their education.' },
  { icon: <TrendingUp className="w-5 h-5" />, title: 'Growth Mindset', description: 'Learners embrace challenges as opportunities for development, replacing fixed thinking with curiosity and a desire to improve.' },
  { icon: <Sparkles className="w-5 h-5" />, title: 'Lifelong Learning', description: 'Coaching instils habits of reflection and continuous growth that extend far beyond the classroom into every stage of life.' },
  { icon: <HeartHandshake className="w-5 h-5" />, title: 'Coaching Mindset in Educators', description: 'Educators who experience coaching naturally adopt its principles, transforming their teaching relationships and classroom culture.' },
];

const coreValues = [
  { icon: <Heart className="w-6 h-6" />, title: 'Respect', description: 'Every learner is valued as a whole person with unique experiences, perspectives, and potential.' },
  { icon: <Compass className="w-6 h-6" />, title: 'Learner Autonomy', description: 'The learner is the expert on their own life. Coaching honours their capacity to make meaningful choices.' },
  { icon: <HeartHandshake className="w-6 h-6" />, title: 'Empathy', description: 'Deep understanding and genuine care form the foundation of every coaching conversation.' },
  { icon: <Lightbulb className="w-6 h-6" />, title: 'Curiosity', description: 'Open-ended questions and genuine inquiry unlock insights that advice-giving can never reach.' },
  { icon: <Shield className="w-6 h-6" />, title: 'Integrity', description: 'Honesty, confidentiality, and ethical practice guide every interaction and professional relationship.' },
  { icon: <Award className="w-6 h-6" />, title: 'Professionalism', description: 'Coaching is conducted with the highest standards of competence, accountability, and continuous self-development.' },
  { icon: <BookOpen className="w-6 h-6" />, title: 'Evidence-Informed Practice', description: 'Our approach draws on established coaching psychology research and proven educational frameworks.' },
];

export default function MembershipPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20" style={{ backgroundColor: '#0B2E59', backgroundImage: `linear-gradient(135deg, rgba(11,46,89,0.92) 0%, rgba(11,46,89,0.75) 50%, rgba(31,107,77,0.7) 100%), url('https://images.pexels.com/photos/33175650/pexels-photo-33175650.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 pattern-dots-light opacity-10" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 60% 40%, rgba(31,107,77,0.2) 0%, transparent 70%)' }} />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-6">
                Membership
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-[1.1] mb-6">
                Join the British Board of Coaching<br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #1F6B4D, #4ade80)' }}>
                  Membership Community
                </span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl">
                Become part of a global network of professional coaches. Membership with the British Board of Coaching connects you to internationally recognised accreditation, professional development, and a community committed to coaching excellence.
              </p>
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 h-14 px-8 rounded-sm font-semibold text-white text-base transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#1F6B4D' }}
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> About <span className="w-8 h-[2px] bg-secondary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-8">About Membership</h2>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Membership with the British Board of Coaching offers professional coaches, educators, and aspiring coaches a pathway to internationally recognised accreditation, continuous professional development, and a supportive community of peers. Members gain access to exclusive resources, events, and recognition that elevate their coaching practice and career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div {...fadeUp()} className="bg-white rounded-2xl border border-border shadow-sm p-10 md:p-12">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white" style={{ backgroundColor: '#1F6B4D' }}>
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To cultivate an educational culture where learners are valued for personal growth, resilience, confidence, and independent learning. Academic coaching complements teaching by fostering self-awareness, reflective practice, and lifelong learning.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.15)} className="bg-white rounded-2xl border border-border shadow-sm p-10 md:p-12">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white" style={{ backgroundColor: '#0B2E59' }}>
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To facilitate meaningful coaching conversations that inspire learners to understand themselves, recognize their strengths, overcome challenges, and develop skills for successful learning journeys while promoting a coaching mindset within educational communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Membership */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> Understanding <span className="w-8 h-[2px] bg-secondary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-8">What is Membership?</h2>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Membership with the British Board of Coaching is a professional commitment to coaching excellence. It connects coaches to an internationally recognised framework of accreditation, ethics, and continuous development that supports their practice at every career stage.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Members join a global community of coaches who share knowledge, uphold the highest professional standards, and champion the transformative power of coaching. Membership provides structured pathways for growth, from early-career coaches seeking accreditation to seasoned practitioners pursuing advanced credentials.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond credentials, membership is an invitation to belong to a network that values reflective practice, ethical integrity, and lifelong learning. It is a foundation for credibility, connection, and contribution to the coaching profession.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeUp()} className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> What We Offer
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              A comprehensive range of academic coaching services designed to meet learners at every stage of their educational journey.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div key={i} {...fadeUp(i * 0.12)} className="bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group">
                <div className="p-8 border-b border-border" style={{ backgroundColor: '#0B2E59' }}>
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 text-white" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">{service.title}</h3>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-muted-foreground leading-relaxed flex-1">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Support */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> Our Community <span className="w-8 h-[2px] bg-secondary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Who We Support</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Academic coaching is for everyone engaged in learning and education at any level.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {whoWeSupport.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.06)} className="flex items-center gap-3 p-5 rounded-xl bg-gray-50 border border-border hover:border-secondary/40 hover:bg-secondary/5 transition-all duration-300">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#1F6B4D20' }}>
                  <CheckCircle2 className="w-4 h-4" style={{ color: '#1F6B4D' }} />
                </div>
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Impact */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0B2E59' }}>
        <div className="absolute inset-0 pattern-dots-light opacity-10" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> Outcomes <span className="w-8 h-[2px] bg-secondary" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Expected Impact</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Academic coaching transforms not only how learners perform but how they think about learning and themselves.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impacts.map((impact, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors backdrop-blur-sm">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-white" style={{ backgroundColor: 'rgba(31,107,77,0.3)' }}>
                  {impact.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{impact.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary" /> Principles <span className="w-8 h-[2px] bg-secondary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every coaching relationship and educational partnership.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)} className="bg-white rounded-2xl border border-border shadow-sm p-8 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white transition-colors" style={{ backgroundColor: '#0B2E59' }}>
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div {...fadeUp()}>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Connect With Us
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              To learn more about academic coaching services or to explore a partnership, reach out to us directly.
            </p>
            <a
              href="mailto:britishboardofcoaching@gmail.com"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-md font-semibold text-white text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#1F6B4D' }}
            >
              <Mail className="w-5 h-5" />
              britishboardofcoaching@gmail.com
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
