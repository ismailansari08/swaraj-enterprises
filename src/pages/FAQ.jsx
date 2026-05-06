import { useEffect, useState } from 'react';
import { Plus, Minus, Search } from 'lucide-react';
import { FAQS } from '../utils/data';

const CATS = ['All', 'property', 'gst', 'itr', 'legal', 'documents', 'digital'];
const CAT_LABELS = { All: 'All', property: 'Property', gst: 'GST', itr: 'Income Tax', legal: 'Legal', documents: 'Documents', digital: 'Digital' };

const FAQItem = ({ question, answer, idx }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${open ? 'border-brandPrimary/30 bg-white/[0.06]' : 'border-white/8 bg-white/[0.03] hover:bg-white/[0.05]'}`}>
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none group"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className={`flex items-center gap-3 text-base font-medium leading-snug transition-colors ${open ? 'text-brandPrimary' : 'text-slate-900 group-hover:text-slate-700'}`}>
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold" style={{ background: open ? 'rgba(255,94,108,0.15)' : 'rgba(255,255,255,0.06)', color: open ? '#ff5e6c' : '#94a3b8' }}>
            {idx + 1}
          </span>
          {question}
        </span>
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${open ? 'border-brandPrimary/40 bg-brandPrimary/15 text-brandPrimary rotate-0' : 'border-white/10 bg-white/5 text-slate-400'}`}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-400 ${open ? 'max-h-64' : 'max-h-0'}`}>
        <p className="px-6 pb-6 text-slate-600 leading-relaxed text-sm">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [cat, setCat] = useState('All');
  const [query, setQuery] = useState('');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered = FAQS.filter(f =>
    (cat === 'All' || f.cat === cat) &&
    (f.q.toLowerCase().includes(query.toLowerCase()) || f.a.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-brandAccent/7 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl relative z-10">
        <div className="text-center mb-14">
          <span className="section-label mb-5 inline-flex">FAQs</span>
          <h1 className="mt-5 text-5xl md:text-6xl font-heading font-extrabold text-slate-950">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="mt-4 text-slate-600 text-lg">Answers to the most common legal and compliance questions.</p>
        </div>

        {/* Search */}
        <div className="relative mb-6 group">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none group-focus-within:text-brandPrimary transition-colors" />
          <input
            type="text" value={query} onChange={e => setQuery(e.target.value)}
            placeholder="Search questions..."
            className="w-full rounded-2xl border border-white/10 bg-white/5 py-3.5 pl-10 pr-4 text-white placeholder-slate-500 backdrop-blur-sm focus:outline-none focus:border-brandPrimary transition-all"
          />
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {CATS.map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium border transition-all duration-300 ${c === cat ? 'bg-brandPrimary/15 border-brandPrimary/40 text-brandPrimary' : 'bg-white/[0.04] border-white/8 text-slate-400 hover:bg-white/[0.08] hover:text-white'}`}
            >
              {CAT_LABELS[c]}
            </button>
          ))}
        </div>

        {/* List */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-slate-500">
            <p className="text-lg font-medium">No questions match your search.</p>
            <button onClick={() => { setCat('All'); setQuery(''); }} className="mt-4 text-brandPrimary hover:underline text-sm">Clear filters</button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {filtered.map((faq, i) => <FAQItem key={i} question={faq.q} answer={faq.a} idx={i} />)}
          </div>
        )}

        <p className="text-center text-slate-500 text-sm mt-12">
          Still have questions?{' '}
          <a href={`https://wa.me/91${FAQS[0] ? '9960586058' : ''}`} target="_blank" rel="noopener noreferrer" className="text-brandPrimary hover:underline">Ask us on WhatsApp →</a>
        </p>
      </div>
    </div>
  );
};

export default FAQ;
