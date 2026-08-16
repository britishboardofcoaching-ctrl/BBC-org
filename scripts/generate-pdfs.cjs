const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '..', 'public', 'pdfs');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const NAVY = '#0B2E59';
const GREEN = '#1F6B4D';
const LIGHT_GRAY = '#F5F5F5';
const DARK_GRAY = '#444444';

function createPdf(filename, title, subtitle, sections) {
  const doc = new PDFDocument({ size: 'A4', margin: 60 });
  const filepath = path.join(outputDir, filename);
  doc.pipe(fs.createWriteStream(filepath));

  // Header band
  doc.rect(0, 0, doc.page.width, 120).fill(NAVY);
  doc.fillColor('#FFFFFF').fontSize(26).font('Helvetica-Bold').text('British Board of Coaching (BBC)', 60, 40);
  doc.fontSize(13).font('Helvetica').fillColor('#FFFFFFAA').text(subtitle, 60, 75);
  doc.fontSize(20).font('Helvetica-Bold').fillColor('#FFFFFF').text(title, 60, 95);

  let y = 150;

  sections.forEach((section) => {
    if (y > 680) { doc.addPage(); y = 60; }

    doc.fontSize(16).font('Helvetica-Bold').fillColor(GREEN).text(section.heading, 60, y);
    y += 28;

    doc.fontSize(11).font('Helvetica').fillColor(DARK_GRAY);
    const paras = Array.isArray(section.body) ? section.body : [section.body];
    paras.forEach((para) => {
      const lines = doc.fontSize(11).font('Helvetica').fillColor(DARK_GRAY).text(para, 60, y, { width: doc.page.width - 120, align: 'justify' });
      y = lines.y + 16;
      if (y > 720) { doc.addPage(); y = 60; }
    });

    if (section.bullets) {
      y += 6;
      section.bullets.forEach((b) => {
        doc.fontSize(11).font('Helvetica-Bold').fillColor(GREEN).text('•', 65, y);
        doc.font('Helvetica').fillColor(DARK_GRAY).text(b, 80, y, { width: doc.page.width - 140 });
        y += 20;
        if (y > 720) { doc.addPage(); y = 60; }
      });
    }

    y += 14;
  });

  // Footer
  doc.page.buffer = null;
  doc.fillColor('#AAAAAA').fontSize(9).font('Helvetica').text(
    'British Board of Coaching  |  www.britishboardofcoaching.org  |  britishboardofcoaching@gmail.com',
    60, doc.page.height - 50, { align: 'center', width: doc.page.width - 120 }
  );

  doc.end();
  console.log(`Created: ${filename}`);
}

// 1. Foundational Coaching Guide
createPdf('foundational-coaching-guide.pdf', 'The Foundational Coaching Guide', 'Free Resource – Starter Guide', [
  {
    heading: 'Introduction to Professional Coaching',
    body: 'Professional coaching is a transformative partnership between coach and client, built on trust, active listening, and powerful questioning. This guide introduces the core principles, ethical boundaries, and essential frameworks that every coach must master before working with clients.',
  },
  {
    heading: 'Core Coaching Competencies',
    body: 'The International Coach Federation (ICF) defines eleven core competencies grouped into four clusters: setting the foundation, co-creating the relationship, communicating effectively, and facilitating learning and results.',
    bullets: [
      'Active Listening: Fully concentrating on what the client is saying and not saying.',
      'Powerful Questioning: Asking open-ended questions that evoke discovery and insight.',
      'Direct Communication: Clear, articulate expression during coaching sessions.',
      'Creating Awareness: Helping the client identify patterns and gain fresh perspectives.',
      'Designing Actions: Co-creating opportunities for ongoing learning during the session.',
    ],
  },
  {
    heading: 'Ethical Guidelines & Boundaries',
    body: 'Coaches must maintain clear ethical boundaries at all times. This includes confidentiality, avoiding conflicts of interest, recognizing the limits of coaching versus therapy, and referring clients to other professionals when appropriate.',
    bullets: [
      'Maintain strict confidentiality of all client information.',
      'Clearly define the coaching relationship in a written agreement.',
      'Recognize when a client needs therapy or medical intervention and refer accordingly.',
      'Avoid dual relationships that could impair professional judgment.',
    ],
  },
  {
    heading: 'Essential Conversation Frameworks',
    body: 'The GROW model (Goal, Reality, Options, Will) is the most widely used coaching conversation framework. It provides a structured yet flexible approach for guiding clients from identifying their goals to committing to action.',
    bullets: [
      'Goal: What does the client want to achieve?',
      'Reality: What is the current situation?',
      'Options: What choices are available?',
      'Will: What will the client commit to doing?',
    ],
  },
  {
    heading: 'Structuring Your First Session',
    body: 'The first coaching session sets the tone for the entire engagement. Begin by establishing rapport, reviewing the coaching agreement, exploring the client\'s goals, and agreeing on the working relationship. End with clear action steps and a confirmed next session.',
  },
]);

// 2. Emotional Recovery & Growth Roadmap
createPdf('emotional-recovery-roadmap.pdf', 'Emotional Recovery & Growth Roadmap', 'Free Resource – Practical Guide', [
  {
    heading: 'Understanding Emotional Recovery',
    body: 'Emotional recovery is the process of navigating through difficult life transitions, rebuilding self-worth, and restoring emotional balance. As a coach, your role is to support clients through this journey using structured frameworks and compassionate presence.',
  },
  {
    heading: 'The Five Stages of Emotional Recovery',
    body: 'Clients typically move through five stages when recovering from emotional setbacks. Understanding these stages helps coaches meet clients where they are and provide appropriate support at each step.',
    bullets: [
      'Stage 1 – Acknowledgment: Recognizing and accepting the emotional impact.',
      'Stage 2 – Processing: Allowing emotions to be felt without judgment.',
      'Stage 3 – Understanding: Making meaning of the experience.',
      'Stage 4 – Rebuilding: Developing new strategies and self-beliefs.',
      'Stage 5 – Growth: Emerging stronger with renewed purpose.',
    ],
  },
  {
    heading: 'Supporting Clients Through Major Life Transitions',
    body: 'Life transitions such as career changes, relationship endings, loss, or relocation can trigger deep emotional responses. Coaches help clients navigate these transitions by providing a stable, non-judgmental space for exploration and by helping them identify their own inner resources.',
  },
  {
    heading: 'Rebuilding Self-Worth',
    body: 'Self-worth is the foundation of emotional resilience. Coaches can help clients identify and challenge limiting beliefs, reconnect with their core values, and develop self-compassion practices that sustain long-term emotional health.',
    bullets: [
      'Identify negative self-talk patterns and their origins.',
      'Develop personalized affirmations rooted in evidence.',
      'Practice daily self-compassion exercises.',
      'Set boundaries that protect emotional well-being.',
    ],
  },
  {
    heading: 'Tools for Emotional Balance',
    body: 'Practical tools for maintaining emotional balance include journaling, mindfulness practices, somatic awareness techniques, and structured reflection exercises. Coaches should help clients find the tools that resonate most with their personal style and circumstances.',
  },
]);

// 3. Client Onboarding & Intake Package
createPdf('client-intake-package.pdf', 'Client Onboarding & Intake Package', 'Professional Template', [
  {
    heading: 'Welcome to Your Coaching Journey',
    body: 'This intake package is designed to establish a professional foundation for our coaching relationship. Please complete all sections before our first session so we can make the most of our time together.',
  },
  {
    heading: 'Client Information Form',
    body: 'Please provide the following details:',
    bullets: [
      'Full Name:',
      'Date of Birth:',
      'Email Address:',
      'Phone Number:',
      'Occupation / Profession:',
      'How did you hear about us?:',
    ],
  },
  {
    heading: 'Discovery Questionnaire',
    body: 'These questions help me understand your goals and prepare for our work together. There are no right or wrong answers — please be as honest and detailed as you can.',
    bullets: [
      'What brings you to coaching at this point in your life?',
      'What would you like to achieve through coaching?',
      'What do you consider your greatest strengths?',
      'What obstacles or challenges are you currently facing?',
      'How will you know coaching has been successful for you?',
      'What patterns do you notice in your life that you would like to change?',
    ],
  },
  {
    heading: 'Coaching Agreement',
    body: 'This agreement outlines the terms of our coaching relationship. Please read and sign to confirm your understanding.',
    bullets: [
      'Coaching is a partnership focused on your growth and development.',
      'Sessions are confidential unless there is risk of harm to self or others.',
      'Sessions last 50 minutes and are held at agreed-upon times.',
      'Cancellations require 24 hours notice.',
      'Coaching is not therapy, counseling, or medical advice.',
      'Both parties commit to honesty, respect, and active participation.',
    ],
  },
  {
    heading: 'Goal-Setting Form',
    body: 'Use this form to articulate your primary coaching goals. We will refine these together during our first session.',
    bullets: [
      'Primary Goal (most important outcome):',
      'Secondary Goals:',
      'Timeline for achievement:',
      'How will you measure progress?:',
      'What support do you need from your coach?:',
    ],
  },
]);

// 4. Session Action Planner
createPdf('session-action-planner.pdf', 'Action Planning & Session Tracker', 'GROW Model Template', [
  {
    heading: 'How to Use This Planner',
    body: 'This planner is based on the GROW model and is designed to be used before, during, and after each coaching session. It helps structure conversations, track progress, and maintain accountability between sessions.',
  },
  {
    heading: 'Session Preparation (Before Session)',
    body: 'Complete this section before each coaching session to ensure productive use of time.',
    bullets: [
      'What has happened since our last session?',
      'What would you like to focus on today?',
      'What progress have you made on your action items?',
      'What challenges have come up?',
      'What is your desired outcome for this session?',
    ],
  },
  {
    heading: 'GROW Framework (During Session)',
    body: 'Use this framework to structure the coaching conversation:',
    bullets: [
      'GOAL: What do you want to achieve in this session?',
      'REALITY: What is the current situation? What have you tried so far?',
      'OPTIONS: What are the possible approaches? What else could you do?',
      'WILL: What will you commit to? By when? How will you know you have succeeded?',
    ],
  },
  {
    heading: 'Action Items (After Session)',
    body: 'Record the specific actions you have committed to and review them before the next session.',
    bullets: [
      'Action 1: ____________________  Deadline: ____________',
      'Action 2: ____________________  Deadline: ____________',
      'Action 3: ____________________  Deadline: ____________',
      'What resources do you need?',
      'What might get in the way?',
      'How will you hold yourself accountable?',
    ],
  },
  {
    heading: 'Reflection & Progress Tracker',
    body: 'Use this section to track your overall progress across sessions and identify patterns.',
    bullets: [
      'Date of Session:',
      'Key Insights:',
      'Wins Since Last Session:',
      'Challenges Encountered:',
      'Progress Rating (1-10):',
      'Notes for Next Session:',
    ],
  },
]);

// 5. CPD Programme Syllabus
createPdf('cpd-programme-syllabus.pdf', 'Complete CPD Programme Syllabus', 'Educational & Professional Development', [
  {
    heading: 'Overview of CPD Programmes',
    body: 'The British Board of Coaching offers a comprehensive suite of Continuing Professional Development (CPD) programmes designed for certified coaches who want to deepen their expertise, maintain professional standards, and expand into specialised practice areas.',
  },
  {
    heading: 'Post-Graduate Specialisation Diplomas',
    body: 'Our advanced diploma programmes are designed for certified practitioners who want to master niche focus areas and handle complex client cases. Each diploma includes 200+ hours of study, supervised practice, and a final assessment.',
    bullets: [
      'Relationship Coaching & Emotional Recovery',
      'Adolescent Guidance & Family Dynamics',
      'Executive Leadership & Organisational Culture',
    ],
  },
  {
    heading: 'Diploma 1: Relationship Coaching & Emotional Recovery',
    body: 'This diploma equips coaches with advanced cognitive and behavioural strategies for guiding individuals and couples through relationship dynamics, emotional recovery, boundary setting, and healthy conflict resolution.',
    bullets: [
      'Module 1: Foundations of Relationship Dynamics',
      'Module 2: Attachment Styles & Emotional Patterns',
      'Module 3: Conflict Resolution Frameworks',
      'Module 4: Boundary Setting & Communication',
      'Module 5: Emotional Recovery Techniques',
      'Module 6: Supervised Practice & Case Studies',
    ],
  },
  {
    heading: 'Diploma 2: Adolescent Guidance & Family Dynamics',
    body: 'This diploma provides specialised tools for bridging communication gaps within families, supporting youth through psychological transitions, and empowering parents with effective guidance frameworks.',
    bullets: [
      'Module 1: Adolescent Psychology & Development',
      'Module 2: Family Systems Theory',
      'Module 3: Communication Bridge Techniques',
      'Module 4: Supporting Youth Through Transitions',
      'Module 5: Parental Guidance Frameworks',
      'Module 6: Supervised Practice & Assessment',
    ],
  },
  {
    heading: 'Diploma 3: Executive Leadership & Organisational Culture',
    body: 'This diploma elevates executive presence, strategic decision-making, and the ability to coach high-performing leaders, corporate teams, and organisational cultures.',
    bullets: [
      'Module 1: Executive Presence & Leadership Identity',
      'Module 2: Strategic Decision-Making Frameworks',
      'Module 3: Team Dynamics & Performance Coaching',
      'Module 4: Organisational Culture Transformation',
      'Module 5: Systems Thinking & Change Management',
      'Module 6: Capstone Project & Assessment',
    ],
  },
  {
    heading: 'Professional Supervision & Reflective Practice',
    body: 'Our structured supervision sessions offer a safe, confidential space where coaches can bring active client cases, evaluate ethical dilemmas, prevent burnout, and receive feedback from Master Certified Coaches (MCQ).',
    bullets: [
      'Active client case reviews',
      'Ethical dilemma navigation',
      'Burnout prevention strategies',
      'Direct MCQ-level feedback',
      'Reflective practice frameworks',
    ],
  },
  {
    heading: 'Enrolment & Next Steps',
    body: 'To enrol in any CPD programme or diploma, contact us at britishboardofcoaching@gmail.com. Programmes run on a cohort basis with limited seats per intake. Early application is recommended.',
  },
]);

console.log('\nAll PDFs generated successfully.');
