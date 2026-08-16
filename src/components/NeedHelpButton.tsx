import { useState } from 'react';
import { LifeBuoy, X, ChevronRight, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Article = {
  title: string;
  body: string;
};

const SUGGESTED_ARTICLES: Article[] = [
  {
    title: 'What is coaching and how can it help me?',
    body: "Coaching is a partnership that helps you unlock your potential, set clear goals, and take action. Whether you're growing your career, improving relationships, or navigating life transitions, a coach provides structure, accountability, and fresh perspective. Coaching is forward-focused and action-oriented, unlike therapy which often explores the past.",
  },
  {
    title: 'How do I get started with a coach?',
    body: "Getting started is simple. Visit our Get Coaching page, browse our directory of accredited coaches, and reach out to one that fits your goals. Most coaches offer a free introductory call to see if you're a good match. From there, you'll agree on a schedule, goals, and session format that works for you.",
  },
  {
    title: 'What are the different coaching programmes available?',
    body: "We offer coaching across several areas: career coaching, leadership development, emotional recovery, life transitions, and relationship coaching. Each programme is tailored to your specific needs and goals. Visit our Programs page to explore the full range of options and find the one that's right for you.",
  },
  {
    title: 'How long does a coaching programme last?',
    body: "Programme length varies depending on your goals. A single-session consultation is a great starting point, while a 6 to 12-session programme over a few months is common for deeper work. Some clients continue with ongoing monthly sessions for long-term support. Your coach will recommend a plan during your introductory call.",
  },
  {
    title: 'Are the coaches qualified and accredited?',
    body: "Yes. Every coach in our network holds a recognised coaching qualification accredited by the British Board of Coaching. Our accreditation levels are Associate, Professional, and Master, each requiring rigorous training, logged coaching hours, and ongoing supervision. You can verify any coach's credentials using our Verify Credential tool on the home page.",
  },
];

export function NeedHelpButton() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Article | null>(null);
  const [search, setSearch] = useState('');

  const filteredArticles = SUGGESTED_ARTICLES.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Floating button — sits above the Ask AI button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4, type: 'spring' }}
        onClick={() => {
          setOpen(true);
          setSelected(null);
          setSearch('');
        }}
        className="fixed bottom-36 right-6 z-40 flex items-center gap-2 h-14 pl-4 pr-5 rounded-full text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all group"
        style={{ backgroundColor: '#1F6B4D' }}
        aria-label="Need Help"
      >
        <LifeBuoy className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">Need Help</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="fixed bottom-36 right-6 left-6 sm:left-auto sm:w-[440px] z-[60] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col max-h-[75vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-5 py-4 text-white flex-shrink-0"
                style={{ backgroundColor: '#1F6B4D' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                    <LifeBuoy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base leading-tight">
                      {selected ? selected.title : 'Got questions?'}
                    </h3>
                    {!selected && <p className="text-xs text-white/60">Suggested articles</p>}
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

              {/* Body */}
              {selected ? (
                <div className="flex-1 overflow-y-auto p-5">
                  <button
                    onClick={() => setSelected(null)}
                    className="text-xs font-medium text-secondary hover:underline mb-3 flex items-center gap-1"
                  >
                    ← Back to articles
                  </button>
                  <p className="text-sm text-foreground/80 leading-relaxed">{selected.body}</p>
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto p-5 space-y-3">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search articles…"
                      className="w-full pl-9 pr-4 py-2.5 text-sm rounded-lg border border-border bg-gray-50 text-foreground placeholder:text-foreground/40 outline-none focus:border-secondary focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Article list */}
                  <div className="space-y-1">
                    {filteredArticles.length === 0 ? (
                      <p className="text-sm text-foreground/50 text-center py-6">
                        No articles found. Try a different search.
                      </p>
                    ) : (
                      filteredArticles.map((article) => (
                        <button
                          key={article.title}
                          onClick={() => setSelected(article)}
                          className="w-full flex items-center justify-between gap-3 p-3 rounded-xl border border-foreground/10 hover:border-secondary/40 hover:bg-secondary/5 transition-colors text-left group"
                        >
                          <span className="text-sm font-medium text-foreground leading-snug">
                            {article.title}
                          </span>
                          <ChevronRight className="w-4 h-4 text-foreground/30 group-hover:text-secondary flex-shrink-0 transition-colors" />
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
