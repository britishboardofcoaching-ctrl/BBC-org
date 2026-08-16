import React from 'react';
import { Link } from 'wouter';
import { Logo } from '@/components/Logo';
import { Mail } from 'lucide-react';

export function Footer() {
  const homeLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Programs', href: '/#programs' },
    { name: 'Accreditation', href: '/#accreditation' },
    { name: 'Contact', href: '/#contact' },
  ];

  const pageLinks = [
    { name: 'CPD', href: '/cpd' },
    { name: 'Community', href: '/community' },
    { name: 'Resources', href: '/resources' },
    { name: 'Membership', href: '/academic-coaching' },
    { name: 'Get Coaching', href: '/get-coaching' },
    { name: 'Coach Educators', href: '/coach-educators' },
  ];

  return (
    <footer className="bg-primary text-white pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots-light opacity-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Logo variant="light" className="mb-6" />
            <p className="text-white/70 max-w-md leading-relaxed mt-6">
              Setting the highest international standards in professional coaching through globally recognized certifications, expert-led training, and continuous professional development.
            </p>
            <a
              href="mailto:britishboardofcoaching@gmail.com"
              className="inline-flex items-center gap-2 text-white/70 hover:text-secondary transition-colors text-sm mt-6"
            >
              <Mail className="w-4 h-4" />
              britishboardofcoaching@gmail.com
            </a>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-serif tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {homeLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 hover:text-secondary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-serif tracking-wide">Explore</h4>
            <ul className="space-y-4">
              {pageLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-secondary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} British Board of Coaching. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/#contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/#contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
