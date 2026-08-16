import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Search, BadgeCheck, Calendar, Building2, Award, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface CoachRecord {
  id: string;
  name: string;
  qualificationLevel: string;
  specialization: string;
  issueDate: string;
  expiryDate: string;
  accreditingBody: string;
  status: 'Active' | 'Expired';
  licenseStatement?: string;
}

const registry: Record<string, CoachRecord> = {
  'BBC-0117': {
    id: 'BBC-0117',
    name: 'Alaa Kamal',
    qualificationLevel: 'PCQ — Professional Certified Qualification',
    specialization: 'Academic Coaching',
    issueDate: 'July 2026',
    expiryDate: 'July 2029',
    accreditingBody: 'British Board of Coaching (BCC)',
    status: 'Active',
  },
  'BBC-1256': {
    id: 'BBC-1256',
    name: 'Certified Member',
    qualificationLevel: 'Professional Life Coach',
    specialization: 'Life Coaching',
    issueDate: 'July 2026',
    expiryDate: 'July 2029',
    accreditingBody: 'British Board of Coaching (BCC)',
    status: 'Active',
    licenseStatement:
      'The holder of this card is a duly certified member of the British Board of Coaches and is fully authorized and licensed by the Board to practice and provide services as a Professional Life Coach in accordance with the Board\'s standards and regulations.',
  },
};

type LookupState = 'idle' | 'searching' | 'found' | 'not_found';

export function VerifyCredential() {
  const [query, setQuery] = useState('');
  const [state, setState] = useState<LookupState>('idle');
  const [result, setResult] = useState<CoachRecord | null>(null);

  const normalize = (s: string) => s.trim().toUpperCase().replace(/\s+/g, '');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setState('searching');
    setResult(null);

    setTimeout(() => {
      const key = normalize(query);
      // Allow "0117", "BBC-0117", "BBC0117", "00117" etc.
      let record = registry[key];
      if (!record) {
        const digits = key.replace(/\D/g, '');
        const matchKey = Object.keys(registry).find((k) => k.replace(/\D/g, '').endsWith(digits) || digits.endsWith(k.replace(/\D/g, '')));
        if (matchKey) record = registry[matchKey];
      }
      if (record) {
        setResult(record);
        setState('found');
      } else {
        setState('not_found');
      }
    }, 900);
  };

  const reset = () => {
    setState('idle');
    setResult(null);
    setQuery('');
  };

  return (
    <section id="verify" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #0B2E59 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
            <span className="w-8 h-[2px] bg-secondary inline-block" />
            Credential Verification
            <span className="w-8 h-[2px] bg-secondary inline-block" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4">
            Verify a Coach's <span className="text-secondary">Accreditation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Enter the Accreditation ID to verify a coach's credential standing in our global registry.
          </p>
        </div>

        {/* Search Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl border border-border p-8 md:p-10"
        >
          <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary/60" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Accreditation ID"
                className="pl-12 h-14 text-base border-border/50 focus:border-secondary"
                aria-label="Accreditation ID"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={state === 'searching' || !query.trim()}
              className="h-14 px-8 text-white text-base font-semibold rounded-md whitespace-nowrap"
              style={{ backgroundColor: '#1F6B4D' }}
            >
              {state === 'searching' ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Verifying…
                </>
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2" />
                  Verify Credential
                </>
              )}
            </Button>
          </form>

          {/* Results */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              {/* Found */}
              {state === 'found' && result && (
                <motion.div
                  key="found"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="rounded-xl border-2 border-secondary/20 overflow-hidden">
                    {/* Verified banner */}
                    <div className="flex items-center gap-3 px-6 py-4" style={{ backgroundColor: '#1F6B4D' }}>
                      <BadgeCheck className="w-7 h-7 text-white flex-shrink-0" />
                      <div>
                        <p className="text-white font-bold text-lg leading-tight">Officially Verified by BCC Registry</p>
                        <p className="text-white/80 text-sm">This credential is valid and in good standing.</p>
                      </div>
                    </div>

                    {/* Coach details */}
                    <div className="p-6 md:p-8 bg-white">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-border">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{result.name}</h3>
                          <p className="text-muted-foreground text-sm mt-1">ID: {result.id}</p>
                        </div>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white self-start" style={{ backgroundColor: '#1F6B4D' }}>
                          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                          {result.status} Status
                        </span>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <DetailRow icon={<Award className="w-5 h-5" />} label="Qualification Level" value={result.qualificationLevel} />
                        <DetailRow icon={<ShieldCheck className="w-5 h-5" />} label="Specialization" value={result.specialization} />
                        <DetailRow icon={<Calendar className="w-5 h-5" />} label="Credential Issue Date" value={result.issueDate} />
                        <DetailRow icon={<Calendar className="w-5 h-5" />} label="Expiry Date" value={result.expiryDate} />
                        <DetailRow icon={<Building2 className="w-5 h-5" />} label="Accrediting Body" value={result.accreditingBody} />
                      </div>

                      {result.licenseStatement && (
                        <div className="mt-6 p-5 rounded-xl bg-muted/40 border border-border">
                          <p className="text-foreground/80 text-sm leading-relaxed italic">
                            {result.licenseStatement}
                          </p>
                        </div>
                      )}

                      <div className="mt-6 pt-6 border-t border-border flex items-center gap-2 text-sm font-semibold" style={{ color: '#1F6B4D' }}>
                        <BadgeCheck className="w-5 h-5" />
                        Officially Verified by BCC Registry
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <button onClick={reset} className="text-sm text-muted-foreground hover:text-secondary transition-colors underline">
                      Verify another credential
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Not found */}
              {state === 'not_found' && (
                <motion.div
                  key="not_found"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-xl border-2 border-red-200 bg-red-50 p-8 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Credential Not Found</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    No matching accreditation record was found for "{query}". Please check the ID and try again, or contact us for assistance.
                  </p>
                  <button onClick={reset} className="text-sm text-secondary hover:text-secondary/80 transition-colors underline font-semibold">
                    Try another ID
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DetailRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#1F6B4D15', color: '#1F6B4D' }}>
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{label}</p>
        <p className="text-foreground font-semibold text-sm leading-snug">{value}</p>
      </div>
    </div>
  );
}
