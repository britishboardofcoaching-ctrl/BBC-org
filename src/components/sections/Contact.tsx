import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ALL_COURSES = [
  // Core Credentials
  { group: 'Core Credential Diplomas', label: 'ACQ – Associate Certified Qualification' },
  { group: 'Core Credential Diplomas', label: 'PCQ – Professional Certified Qualification' },
  { group: 'Core Credential Diplomas', label: 'MCQ – Master Certified Qualification' },
  // Specialized
  { group: 'Specialized Coaching Programs', label: 'Life & Personal Transformation Coaching' },
  { group: 'Specialized Coaching Programs', label: 'Healing Coaching' },
  { group: 'Specialized Coaching Programs', label: 'Relationship Coaching' },
  { group: 'Specialized Coaching Programs', label: 'Enneagram Coaching Program' },
  { group: 'Specialized Coaching Programs', label: 'Positive Psychology Coaching' },
  { group: 'Specialized Coaching Programs', label: 'Academic Coaching' },
  { group: 'Specialized Coaching Programs', label: 'Career Coaching' },
  { group: 'Specialized Coaching Programs', label: 'Nutrition Coaching' },
  // Business
  { group: 'Business & Corporate Programs', label: 'Business Coaching' },
  { group: 'Business & Corporate Programs', label: 'Executive & Leadership Coaching' },
  { group: 'Business & Corporate Programs', label: 'SUMO Coaching Methodology' },
];

const GROUPS = Array.from(new Set(ALL_COURSES.map((c) => c.group)));

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.course) e.course = 'Please select a course';
    return e;
  };

  const [sending, setSending] = useState(false);

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
          _subject: `BBC Application – ${form.course} (${form.name})`,
          Name: form.name,
          Email: form.email,
          Phone: form.phone || 'Not provided',
          Course: form.course,
          Message: form.message || 'No message',
          _template: 'table',
        }),
      });
    } catch (_) { /* still show success */ }
    setSending(false);
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left – contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary inline-block"></span>
              Get in Touch
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-6 leading-tight">
              Begin Your Coaching <br />Journey Today
            </h2>
            <p className="text-base text-muted-foreground mb-12 max-w-md">
              Whether you're looking to start a new career or advance your existing practice, our admissions team is here to guide you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Phone / WhatsApp</h4>
                  <a href="tel:+201001375862" className="text-muted-foreground hover:text-secondary transition-colors">
                    +20 100 137 5862
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Email</h4>
                  <a href="mailto:britishboardofcoaching@gmail.com" className="text-muted-foreground hover:text-secondary transition-colors">
                    britishboardofcoaching@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Website</h4>
                  <a href="https://biritshboardofcoaching.bolt.host" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
                    biritshboardofcoaching.bolt.host
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right – form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-muted/30 p-8 md:p-10 rounded-2xl border border-border"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-6">
                <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-foreground">Application Received!</h3>
                <p className="text-muted-foreground max-w-sm">
                  Thank you, <span className="font-semibold text-foreground">{form.name}</span>. Our admissions team will contact you shortly regarding{' '}
                  <span className="font-semibold text-secondary">{form.course}</span>.
                </p>
                <Button
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', course: '', message: '' }); }}
                >
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-foreground mb-6">Apply Now</h3>
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name <span className="text-red-500">*</span></label>
                      <Input
                        id="name"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="John Doe"
                        className={`bg-white border-border/50 focus:border-secondary h-12 ${errors.name ? 'border-red-400' : ''}`}
                      />
                      {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address <span className="text-red-500">*</span></label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="john@example.com"
                        className={`bg-white border-border/50 focus:border-secondary h-12 ${errors.email ? 'border-red-400' : ''}`}
                      />
                      {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="bg-white border-border/50 focus:border-secondary h-12"
                    />
                  </div>

                  {/* Course selection */}
                  <div className="space-y-1.5">
                    <label htmlFor="course" className="text-sm font-medium text-foreground">
                      Course of Interest <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="course"
                      value={form.course}
                      onChange={(e) => handleChange('course', e.target.value)}
                      className={`w-full h-12 px-3 rounded-md border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary transition-colors ${
                        errors.course ? 'border-red-400' : 'border-border/50'
                      } ${form.course === '' ? 'text-muted-foreground' : 'text-foreground'}`}
                    >
                      <option value="" disabled>Select a course...</option>
                      {GROUPS.map((group) => (
                        <optgroup key={group} label={group}>
                          {ALL_COURSES.filter((c) => c.group === group).map((c) => (
                            <option key={c.label} value={c.label}>{c.label}</option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                    {errors.course && <p className="text-xs text-red-500">{errors.course}</p>}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about yourself or ask any questions..."
                      className="bg-white border-border/50 focus:border-secondary min-h-[110px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={sending}
                    className="w-full bg-secondary hover:bg-secondary/90 text-white h-12 text-lg disabled:opacity-60"
                  >
                    {sending ? 'Submitting…' : 'Submit Application'}
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
