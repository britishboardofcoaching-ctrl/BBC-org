import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useLocation } from 'wouter';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Menu, X, GraduationCap, Search } from 'lucide-react';
import { BecomeACoachModal } from '@/components/BecomeACoachModal';
import { Sparkles } from 'lucide-react';

const pageLinks = [
  { name: 'CPD', href: '/cpd' },
  { name: 'Community', href: '/community' },
  { name: 'Resources', href: '/resources' },
  { name: 'Membership', href: '/academic-coaching' },
  { name: 'Get Coaching', href: '/get-coaching' },
  { name: 'Coach Educators', href: '/coach-educators' },
  { name: 'Institutional Accreditation', href: '/institutional-accreditation' },
  { name: 'Summit Tickets', href: '/summit-tickets' },
];

const allSearchable = [
  { name: 'Home', href: '/', type: 'Page' },
  { name: 'About', href: '/#about', type: 'Section' },
  { name: 'Programs', href: '/#programs', type: 'Section' },
  { name: 'Accreditation', href: '/#accreditation', type: 'Section' },
  { name: 'Verify Credential', href: '/#verify', type: 'Section' },
  { name: 'Contact', href: '/#contact', type: 'Section' },
  { name: 'Become a Coach', href: '/#contact', type: 'Action' },
  { name: 'Apply Now', href: '/#contact', type: 'Action' },
  ...pageLinks.map((l) => ({ ...l, type: 'Page' })),
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coachModalOpen, setCoachModalOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [location] = useLocation();
  const isHome = location === '/';
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) setSearchQuery('');
  }, [searchOpen]);

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return allSearchable.filter((item) => item.name.toLowerCase().includes(q)).slice(0, 8);
  }, [searchQuery]);

  const goToResult = (href: string) => {
    setSearchOpen(false);
    setSearchQuery('');
    setMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (isHome) {
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
      } else {
        window.location.href = href;
      }
    } else if (href === '/') {
      if (isHome) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.location.href = '/';
      }
    } else {
      window.location.href = href;
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      goToResult(searchResults[0].href);
    }
  };

  const sectionLinks = [
    { name: 'About', href: isHome ? '#about' : '/#about' },
    { name: 'Programs', href: isHome ? '#programs' : '/#programs' },
    { name: 'Accreditation', href: isHome ? '#accreditation' : '/#accreditation' },
    { name: 'Verify', href: isHome ? '#verify' : '/#verify' },
    { name: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const navText = isScrolled ? 'text-foreground/80 hover:text-secondary' : 'text-white/90 hover:text-white';
  const activePageText = 'text-secondary font-semibold';
  const iconColor = isScrolled ? 'text-primary' : 'text-white';

  const handleSectionClick = (href: string, e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      const id = href.replace('#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex-shrink-0">
          <Logo variant={isScrolled ? 'dark' : 'light'} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center relative">
          {sectionLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSectionClick(link.href, e)}
              className={`px-3 py-1.5 text-sm font-medium transition-colors rounded-md hover:bg-white/10 ${navText}`}
            >
              {link.name}
            </a>
          ))}

          <span className={`w-px h-4 mx-2 ${isScrolled ? 'bg-foreground/20' : 'bg-white/20'}`} />

          {pageLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-sm font-medium transition-colors rounded-md hover:bg-white/10 ${
                  isActive ? activePageText : navText
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA buttons + Search (desktop) */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setSearchOpen((v) => !v)}
            className={`p-2 rounded-md transition-colors hover:bg-white/10 ${navText}`}
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              const event = new CustomEvent('open-ai-chat');
              window.dispatchEvent(event);
            }}
            className={`p-2 rounded-md transition-colors hover:bg-white/10 ${navText} flex items-center gap-1.5`
            }
            aria-label="Ask AI"
          >
            <Sparkles className="w-5 h-5" />
          </button>
          <Button
            className={`font-semibold tracking-wide inline-flex items-center gap-1.5 ${
              isScrolled
                ? 'bg-secondary hover:bg-secondary/90 text-white'
                : 'bg-white/15 border border-white/30 text-white hover:bg-white/25 backdrop-blur-sm'
            }`}
            onClick={() => setCoachModalOpen(true)}
          >
            <GraduationCap className="w-4 h-4" />
            Become a Coach
          </Button>
          <Button
            className={`font-semibold tracking-wide ${
              isScrolled
                ? 'bg-primary hover:bg-primary/90 text-white'
                : 'bg-white text-primary hover:bg-white/90'
            }`}
            onClick={() => {
              if (isHome) {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#contact';
              }
            }}
          >
            Apply Now
          </Button>
        </div>

        {/* Search icon + Mobile toggle (top right) */}
        <div className="lg:hidden flex items-center gap-1 relative z-10">
          <button
            className={`p-2 ${iconColor} transition-colors`}
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search"
          >
            {searchOpen ? <X size={22} /> : <Search size={22} />}
          </button>
          <button
            onClick={() => {
              const event = new CustomEvent('open-ai-chat');
              window.dispatchEvent(event);
            }}
            className={`p-2 ${iconColor} transition-colors`
            }
            aria-label="Ask AI"
          >
            <Sparkles size={22} />
          </button>
          <button
            className={`p-2 ${iconColor} transition-colors`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Search dropdown (desktop) */}
      {searchOpen && (
        <>
          <div
            className="hidden lg:block fixed inset-0 z-40"
            onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
          />
          <div className="hidden lg:block absolute right-6 top-full mt-2 w-96 bg-white rounded-xl shadow-2xl border border-foreground/10 overflow-hidden z-50">
            <form onSubmit={handleSearchSubmit}>
              <div className="flex items-center gap-2 px-4 py-3 border-b border-foreground/10">
                <Search className="w-5 h-5 text-foreground/40 flex-shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search pages, sections, programs…"
                  className="flex-1 text-sm text-foreground placeholder:text-foreground/40 outline-none bg-transparent"
                />
                <button
                  type="button"
                  onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                  className="text-foreground/40 hover:text-foreground flex-shrink-0"
                  aria-label="Close search"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </form>
            {searchResults.length > 0 && (
              <ul className="py-2 max-h-72 overflow-auto">
                {searchResults.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => goToResult(item.href)}
                      className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-foreground hover:bg-primary/5 text-left transition-colors"
                    >
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs text-foreground/40">{item.type}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {searchQuery.trim() && searchResults.length === 0 && (
              <p className="px-4 py-6 text-sm text-foreground/40 text-center">No results found for "{searchQuery}"</p>
            )}
            {!searchQuery.trim() && (
              <p className="px-4 py-6 text-sm text-foreground/40 text-center">Start typing to search the site…</p>
            )}
          </div>
        </>
      )}

      {/* Search panel (mobile) */}
      {searchOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 z-40 bg-black/40"
            onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
          />
          <div className="lg:hidden fixed top-20 left-4 right-4 z-50 bg-white rounded-xl shadow-2xl border border-foreground/10 overflow-hidden">
            <form onSubmit={handleSearchSubmit}>
              <div className="flex items-center gap-2 px-4 py-3 border-b border-foreground/10">
                <Search className="w-5 h-5 text-foreground/40 flex-shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search pages, sections, programs…"
                  className="flex-1 text-sm text-foreground placeholder:text-foreground/40 outline-none bg-transparent"
                />
                <button
                  type="button"
                  onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                  className="text-foreground/40 hover:text-foreground flex-shrink-0"
                  aria-label="Close search"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </form>
            {searchResults.length > 0 && (
              <ul className="py-2 max-h-72 overflow-auto">
                {searchResults.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => goToResult(item.href)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm text-foreground hover:bg-primary/5 text-left transition-colors"
                    >
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs text-foreground/40">{item.type}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {searchQuery.trim() && searchResults.length === 0 && (
              <p className="px-4 py-6 text-sm text-foreground/40 text-center">No results found for "{searchQuery}"</p>
            )}
            {!searchQuery.trim() && (
              <p className="px-4 py-6 text-sm text-foreground/40 text-center">Start typing to search the site…</p>
            )}
          </div>
        </>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-primary/95 backdrop-blur-md z-30 transition-transform duration-300 ease-in-out lg:hidden flex flex-col items-center justify-center ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-center w-full max-w-sm px-6">
          {sectionLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleSectionClick(link.href, e)}
                className="text-xl font-serif text-white hover:text-secondary transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}

          <li><div className="w-12 h-px bg-white/20" /></li>

          {pageLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-serif text-white hover:text-secondary transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-4 mt-8">
          <button
            onClick={() => { setMobileMenuOpen(false); setCoachModalOpen(true); }}
            className="inline-flex items-center gap-2 text-xl font-serif text-secondary hover:text-white transition-colors"
          >
            <GraduationCap className="w-5 h-5" />
            Become a Coach
          </button>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => {
              setMobileMenuOpen(false);
              if (isHome) document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              else window.location.href = '/#contact';
            }}
          >
            Apply Now
          </Button>
        </div>
      </div>

      <BecomeACoachModal open={coachModalOpen} onClose={() => setCoachModalOpen(false)} />
    </header>
  );
}
