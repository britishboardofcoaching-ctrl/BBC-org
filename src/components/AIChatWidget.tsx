import { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, MessageCircle } from 'lucide-react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type KBEntry = {
  keywords: string[];
  answer: string;
};

const KNOWLEDGE_BASE: KBEntry[] = [
  {
    keywords: ['what is bbc', 'about bbc', 'who is bbc', 'british board of coaching', 'what does bbc do'],
    answer: "The British Board of Coaching (BBC) is a premier international coaching accreditation organization. We set the highest international standards in professional coaching by providing globally recognized certifications, expert-led training, ethical excellence, and continuous professional development. Our mission is to empower coaches worldwide — 'Empowering Coaches. Transforming Lives. Creating Global Leaders.'",
  },
  {
    keywords: ['acq', 'associate certified', 'level 1', 'beginner', 'entry level', 'start coaching', 'no experience'],
    answer: "The ACQ (Associate Certified Qualification) is BBC's entry-level coaching certification. It's perfect for beginners, managers, HR professionals, and social workers — no prior coaching experience is required. Over approximately 6 weeks of online interactive training, you'll learn core coaching competencies, the GROW model, active listening, powerful questioning, goal setting, and professional ethics. Upon completion, you can conduct structured, ethically sound coaching conversations with confidence.",
  },
  {
    keywords: ['pcq', 'professional certified', 'level 2', 'intermediate', 'full time coach', 'independent practice'],
    answer: "The PCQ (Professional Certified Qualification) is BBC's intermediate professional certification, ideal for aspiring full-time coaches and practitioners ready to build an independent practice. This 12-week program covers advanced coaching tools, behavioral modification, managing complex client challenges, handling resistance, and customized client journey design. You'll need to accumulate professional logged coaching hours. Upon completion, you'll have mastery over complex client transformations and be ready for independent practice.",
  },
  {
    keywords: ['mcq', 'master certified', 'level 3', 'senior', 'supervisor', 'thought leadership', 'master coach'],
    answer: "The MCQ (Master Certified Qualification) is BBC's senior-level mastery diploma, designed for experienced coaches, supervisors, and founders creating proprietary methodologies. This master track includes portfolio and supervision review, covering master-level coaching presence, supervision techniques, systemic coaching, methodological design, and thought leadership. Upon completion, you'll be recognized as an industry authority capable of training, supervising, and mentoring other coaches.",
  },
  {
    keywords: ['progress', 'pathway', 'progression', 'next level', 'upgrade', 'renewal', 're-certify', 'recertify'],
    answer: "BBC coaching credentials follow a progressive pathway: ACQ (Associate) → PCQ (Professional) → MCQ (Master). You can apply for the next level or complete annual re-certification. Credential renewal requires 15–30 hours of annual continuing education (CPD), maintaining a verified log of coaching hours, and reflective practice documentation.",
  },
  {
    keywords: ['cpd', 'continuing professional development', 'professional development', 'ceus', 'continuing education'],
    answer: "BBC's CPD (Continuing Professional Development) program is built on 4 pillars: (1) Advanced Specialized Diplomas in Relationship & Family Dynamics, Adolescent & Youth Support, and Executive & Leadership Coaching; (2) Continuing Education Units (CEUs) — short courses and masterclasses; (3) Professional Supervision & Reflective Practice with Master Coaches; (4) Curriculum & Tool Access with proprietary frameworks and research. Coaches need 15–30 hours of annual CPD for credential renewal.",
  },
  {
    keywords: ['life coaching', 'personal transformation', 'personal coaching', 'self-mastery', 'work life balance'],
    answer: "BBC's Life & Personal Transformation Coaching empowers individuals to achieve work-life balance, overcome personal roadblocks, set actionable goals, and foster deep self-awareness. It's one of our specialized coaching programs designed for individual growth and self-mastery.",
  },
  {
    keywords: ['healing coaching', 'emotional recovery', 'trauma', 'inner peace', 'emotional'],
    answer: "BBC's Healing Coaching focuses on emotional recovery and inner peace. Our framework is centered on process-driven trauma recovery, helping clients navigate personal pain toward inner balance. We also offer an Emotional Recovery & Growth Roadmap as a free downloadable PDF resource.",
  },
  {
    keywords: ['relationship coaching', 'family', 'couples', 'interpersonal', 'communication', 'boundaries'],
    answer: "BBC's Relationship Coaching concentrates on interpersonal dynamics, healthy boundary setting, attachment styles, effective communication, and resolving relationship conflicts. It's designed to help individuals and couples transform their communication patterns and build stronger connections.",
  },
  {
    keywords: ['enneagram', 'personality type', 'personality profiling', '9 types'],
    answer: "BBC's Enneagram Coaching Program integrates the 9 Enneagram personality types to help clients discover their core motivations, unconscious drivers, and tailored growth pathways. It's a powerful tool for deep self-understanding and personal development.",
  },
  {
    keywords: ['positive psychology', 'strengths', 'resilience', 'mindset', 'flourishing'],
    answer: "BBC's Positive Psychology Coaching applies evidence-based psychological theories, strength-finding exercises, resilience building, and mindset shifting for personal flourishing. It's ideal for clients looking to build on their strengths and develop a growth-oriented mindset.",
  },
  {
    keywords: ['academic coaching', 'student', 'study', 'university', 'education', 'youth'],
    answer: "BBC's Academic Coaching assists students, educators, and young adults with study strategies, time management, goal setting, and academic stress reduction. Our membership services also include one-to-one academic coaching, coaching for researchers, and workshops for educational institutions.",
  },
  {
    keywords: ['career coaching', 'job', 'interview', 'resume', 'career transition', 'professional development'],
    answer: "BBC's Career Coaching guides professionals through career transitions, resume positioning, interview preparation, workplace goal alignment, and long-term career planning. It's designed for individuals looking to accelerate their professional growth.",
  },
  {
    keywords: ['nutrition', 'wellness', 'health', 'holistic', 'lifestyle', 'habits'],
    answer: "BBC's Nutrition & Wellness Coaching combines lifestyle habits, behavioral psychology around health and nutrition, stress management, and sustainable holistic wellness routines. It's designed to help clients build lasting healthy habits.",
  },
  {
    keywords: ['business coaching', 'entrepreneur', 'small business', 'startup', 'strategy'],
    answer: "BBC's Business Coaching is for entrepreneurs, small business owners, and consultants. It optimizes business strategy, operational performance, marketing focus, and sustainable growth to help you build and scale a successful business.",
  },
  {
    keywords: ['executive coaching', 'leadership', 'corporate', 'manager', 'department head', 'organizational'],
    answer: "BBC's Executive & Leadership Coaching is high-level corporate coaching for executives, department heads, and managers. It refines leadership presence, team dynamics, and strategic execution to help leaders drive organizational growth.",
  },
  {
    keywords: ['sumo', 'mindset mastery', 'performance transformation'],
    answer: "The SUMO Coaching Methodology is BBC's proprietary framework focused on mindset mastery, resilience under pressure, proactive problem-solving, and sustainable performance and life balance.",
  },
  {
    keywords: ['become a coach', 'how to become', 'trainer', 'educator', 'faculty', 'instructor', 'teach'],
    answer: "To become a Certified BBC Trainer, follow these 4 steps: (1) Prerequisite Verification — hold an active PCQ or MCQ credential with verified coaching hours; (2) Train-the-Trainer Facilitation Program — intensive educator training in instructional design, assessment rubrics, and adult learning methodology; (3) Supervised Practicum Evaluation — deliver a supervised pilot training session assessed by senior MCQ evaluators; (4) Faculty Onboarding & Licensing — receive official BBC Faculty accreditation and teaching materials. You can start by clicking 'Become a Coach' in the navigation bar.",
  },
  {
    keywords: ['institutional accreditation', 'school accreditation', 'academy', 'certify school', 'certify curriculum', 'institution'],
    answer: "BBC offers 3 institutional accreditation pathways: (1) Become a Certified BBC Trainer — for experienced coaches and facilitators who want to instruct and assess students; (2) Certify Your School/Academy — full institutional recognition to operate as an official BBC Accredited Center (requires 50% of staff holding BBC credentials, quality assurance protocols, and annual audits); (3) Certify Your Curriculum — formally accredit custom training modules, diplomas, or workshops. Visit the Institutional Accreditation page for detailed requirements and application forms.",
  },
  {
    keywords: ['membership', 'member', 'join', 'community', 'network'],
    answer: "BBC Membership connects professional coaches, educators, and aspiring coaches to internationally recognized accreditation, continuous professional development, a supportive community of peers, and exclusive resources and events. Membership services include one-to-one academic coaching, coaching for researchers, academic coaching workshops, professional development workshops, and partnerships with educational institutions. Visit the Membership page to learn more.",
  },
  {
    keywords: ['get coaching', '1-on-1', 'one on one', 'client', 'book coaching', 'discovery call', 'find a coach'],
    answer: "BBC offers personal 1-on-1 coaching in 4 pathways: Life & Personal Transformation, Relationship & Family Dynamics, Emotional Recovery & Mindset Resilience, and Executive Leadership & Career Growth. The journey starts with a free 20-minute Discovery Call, followed by a tailored coaching roadmap, active bi-weekly sessions, and measurable growth. Visit the Get Coaching page and fill out the intake form to book your free discovery call — you'll receive a response within 24 hours.",
  },
  {
    keywords: ['summit', 'ticket', 'conference', 'event', 'london', 'november'],
    answer: "The Global Human Development & Coaching Innovation Summit takes place on 15 November 2025 in London, UK, from 9 AM to 5 PM GMT, with 300+ delegates expected. Three ticket tiers are available: Virtual Pass (£49 — live-streamed keynotes, digital pack, 30-day recordings), Standard Pass (£149 — full in-person access, catered lunch, workshop & graduation ceremony), and VIP Pass (£299 — priority seating, VIP networking dinner, 1-on-1 speaker introductions, 12 months member vault access). Visit the Summit Tickets page to register.",
  },
  {
    keywords: ['price', 'cost', 'how much', 'fee', 'pricing', 'payment'],
    answer: "The only published pricing is for the Annual Summit: Virtual Pass £49, Standard Pass £149, and VIP Pass £299. For coaching programs (ACQ, PCQ, MCQ), specialized programs, CPD workshops, and membership, pricing varies based on your needs. Please use the contact form on the website or email info@britishboardofcoaching.com for a personalized quote.",
  },
  {
    keywords: ['verify', 'credential', 'certificate', 'check credential', 'verification'],
    answer: "You can verify a BBC coaching credential directly on our website using the Verify Credential tool on the homepage. Enter the credential details and the system will confirm whether the certification is valid, including the holder's name, credential type, and issue date.",
  },
  {
    keywords: ['resources', 'download', 'pdf', 'guide', 'worksheet', 'free'],
    answer: "BBC offers several free downloadable resources: The Foundational Coaching Guide (core coaching boundaries and ethical guidelines), the Emotional Recovery & Growth Roadmap (step-by-step guide for life transitions), the Client Onboarding & Intake Package (discovery questionnaires and service agreements), and the Action Planning & Session Tracker (GROW model templates). Certified credential holders also get exclusive access to the Member-Only Vault with proprietary curriculum modules and assessment tools. Visit the Resources page to download.",
  },
  {
    keywords: ['community', 'event', 'masterclass', 'peer practice', 'network'],
    answer: "BBC's community ecosystem includes monthly expert masterclasses (live sessions by master coaches), peer practice circles for skill sharpening and hours verification, and community impact initiatives. Live events include interactive masterclasses, supervision group circles, and the annual leadership summit. Visit the Community page to learn more and join upcoming events.",
  },
  {
    keywords: ['contact', 'email', 'phone', 'reach', 'talk to', 'whatsapp', 'call'],
    answer: "You can reach BBC by phone or WhatsApp at 01032902091, or by email at info@britishboardofcoaching.com. You can also use the contact form on the homepage — scroll to the Contact section at the bottom of the page. We're also on Facebook, Instagram, LinkedIn, and YouTube.",
  },
  {
    keywords: ['icf', 'international coach federation', 'alignment', 'equivalence', 'actp', 'acsth'],
    answer: "BBC credentials are aligned with ICF (International Coach Federation) standards but are independent qualifications. ICF ACTP graduates with 125+ verified coaching hours and 10+ hours of mentor coaching may apply directly for the PCQ pathway. ACSTH graduates may need to complete additional BBC-specific modules. BBC provides guidance and support for parallel ICF applications through our accreditation office.",
  },
  {
    keywords: ['practical hours', 'client hours', 'coaching hours', 'log', 'practice'],
    answer: "Practical client hours are fulfilled through peer coaching, supervised practice sessions, and guided real-world application during the program. You'll need to maintain a verified log of coaching hours including client name (or initials), dates, number of hours, client context, and a brief description. Logs must be signed or verified by the client or a supervising coach. These hours count toward credential advancement.",
  },
  {
    keywords: ['international', 'practice abroad', 'globally recognized', 'countries'],
    answer: "Yes, BBC certifications are designed to meet international standards of practice and ethics, so your credentials are recognized globally. Our frameworks support coaches practicing across different countries and cultures.",
  },
  {
    keywords: ['benefits', 'why join', 'advantage', 'value', 'why bbc', 'why choose'],
    answer: "Joining BBC gives you international credibility, professional certification, career advancement, practical coaching experience, ethical coaching standards, global networking, expert mentorship, lifetime professional growth, modern learning methodology, continuous support, increased client confidence, and a competitive professional advantage. We offer internationally recognized accreditation, expert trainers, practical hands-on learning, and a global community of professional coaches.",
  },
  {
    keywords: ['mission', 'vision', 'goal', 'purpose'],
    answer: "BBC's mission is to empower coaches worldwide by delivering exceptional education, internationally respected accreditation, ethical coaching standards, and transformational professional development. Our vision is to become one of the world's leading coaching accreditation organizations, recognized for excellence, innovation, integrity, and transformational leadership.",
  },
];

const SUGGESTED_QUESTIONS = [
  "What coaching programs do you offer?",
  "How do I become a certified coach?",
  "What is the difference between ACQ, PCQ, and MCQ?",
  "How much does the summit cost?",
  "How can I get 1-on-1 coaching?",
  "How do I verify a credential?",
];

function findAnswer(query: string): string {
  const q = query.toLowerCase();

  let bestMatch: KBEntry | null = null;
  let bestScore = 0;

  for (const entry of KNOWLEDGE_BASE) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (q.includes(keyword)) {
        score += keyword.length > 4 ? 3 : 2;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch && bestScore >= 2) {
    return bestMatch.answer;
  }

  return "I'd love to help with that! I have knowledge about BBC's coaching programs (ACQ, PCQ, MCQ), specialized coaching tracks, CPD, membership, institutional accreditation, the annual summit, and how to get coaching. Could you rephrase your question, or try one of the suggested questions below? You can also reach us directly at info@britishboardofcoaching.com or 01032902091.";
}

export function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener('open-ai-chat', onOpen);
    return () => window.removeEventListener('open-ai-chat', onOpen);
  }, []);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          role: 'assistant',
          content: "Hi! I'm the BBC virtual assistant. I can answer questions about our coaching programs, accreditation, CPD, membership, the annual summit, and more. How can I help you today?",
        },
      ]);
    }
  }, [open]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  const handleSend = (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || isTyping) return;

    setShowSuggestions(false);
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content }]);
    setIsTyping(true);

    const answer = findAnswer(content);
    const delay = Math.min(800 + answer.length * 4, 2200);

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'assistant', content: answer }]);
      setIsTyping(false);
    }, delay);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.4, type: 'spring' }}
        onClick={() => setOpen(true)}
        className="fixed bottom-20 right-6 z-40 flex items-center gap-2 h-14 pl-4 pr-5 rounded-full text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all group"
        style={{ backgroundColor: '#0B2E59' }}
        aria-label="Ask AI"
      >
        <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">Ask AI</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="fixed bottom-20 right-6 left-6 sm:left-auto sm:w-[420px] z-50 bg-white rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col max-h-[80vh]"
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-5 py-4 text-white flex-shrink-0"
                style={{ backgroundColor: '#0B2E59' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base leading-tight">BBC Assistant</h3>
                    <p className="text-xs text-white/60 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                      Online
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50/50">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.role === 'assistant' && (
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5" style={{ backgroundColor: '#0B2E59' }}>
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-secondary text-white rounded-br-sm'
                          : 'bg-white text-foreground border border-border rounded-bl-sm shadow-sm'
                      }`}
                      style={msg.role === 'user' ? { backgroundColor: '#1F6B4D' } : {}}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5" style={{ backgroundColor: '#0B2E59' }}>
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white border border-border rounded-2xl rounded-bl-sm shadow-sm px-4 py-3.5">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}

                {showSuggestions && !isTyping && messages.length <= 1 && (
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground/70 mb-2 px-1">Suggested questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {SUGGESTED_QUESTIONS.map((q) => (
                        <button
                          key={q}
                          onClick={() => handleSend(q)}
                          className="text-xs px-3 py-2 rounded-full border border-border bg-white text-foreground hover:border-primary/30 hover:bg-primary/5 transition-colors text-left leading-snug"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="px-4 py-3 bg-white border-t border-border flex-shrink-0">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything…"
                    className="flex-1 px-4 py-2.5 text-sm rounded-full border border-border bg-gray-50 text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-primary focus:bg-white transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isTyping}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all flex-shrink-0 disabled:opacity-40"
                    style={{ backgroundColor: '#0B2E59' }}
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
