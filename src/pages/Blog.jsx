import { useEffect, useState } from 'react';
import GlassCard from '../components/Common/GlassCard';
import { ArrowRight, Clock, X } from 'lucide-react';
import { BLOG_ARTICLES } from '../utils/data';
import { NEW_ARTICLES } from '../utils/new-articles.js';
import { sanitizeHtml } from '../utils/helpers';

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allArticles = [...BLOG_ARTICLES, ...NEW_ARTICLES];

  return (
    <div className="pt-32 pb-20 min-h-screen text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brandPrimary/20 text-slate-200 text-sm font-semibold mb-4 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-brandPrimary animate-pulse" /> Expert Guide Hub
          </p>
          <h1 className="text-5xl font-heading font-bold mb-6 text-white">Legal <span className="text-gradient">Insights</span></h1>
          <p className="mx-auto text-slate-400 max-w-2xl text-lg">
            Read expert guides, compliance updates, and smart document tips that help you complete legal work faster and without mistakes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allArticles.map((post) => (
            <GlassCard
              key={post.id}
              className="p-0 overflow-hidden group flex flex-col h-full hover:border-brandPrimary/40 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="h-52 bg-slate-900/30 flex items-center justify-center relative flex-shrink-0 rounded-t-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-brandPrimary/40 to-brandAccent/40 opacity-50" />
                <span className="text-3xl font-heading font-bold text-white drop-shadow-2xl z-10">
                  {post.tag.replace(/^[^\w\s]+/, '').slice(0,20)}
                </span>
              </div>
              <div className="p-7 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <span className="font-medium text-slate-200">{post.readTime} read</span>
                  <span className="text-brandPrimary font-semibold">#{post.tag.replace(/^[^\w\s]+/, '')}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-100 group-hover:text-gradient transition-all">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3 flex-grow">{post.desc}</p>
                <button
                  onClick={() => setExpandedPost(post)}
                  className="btn-premium text-sm w-full py-2.5 inline-flex items-center justify-center gap-2 font-semibold"
                >
                  Read Article <ArrowRight size={16} />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Expanded Article Modal */}
        {expandedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <GlassCard className="w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
              <button 
                onClick={() => setExpandedPost(null)}
                className="absolute top-6 right-6 text-slate-300 hover:text-white transition-colors bg-black/50 p-3 rounded-2xl shadow-2xl"
              >
                <X size={24} />
              </button>
              
              <div className="h-64 bg-gradient-to-r from-brandPrimary/60 to-brandAccent/60 flex items-center justify-center rounded-3xl mb-8 relative">
                <span className="text-4xl font-heading font-bold text-white drop-shadow-2xl z-10">
                  {expandedPost.tag.replace(/^[^\w\s]+/, '').slice(0,15)}
                </span>
              </div>
              <div className="px-8 pb-12">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-6">
                  <span className="flex items-center gap-1"><Clock size={16} /> {expandedPost.readTime} read</span>
                </div>
                <h2 className="text-4xl font-heading font-bold mb-8 text-white">{expandedPost.title}</h2>
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-white prose-headings:font-heading prose-headings:text-2xl prose-a:text-brandPrimary prose-strong:text-white max-w-none text-slate-300"
                  dangerouslySetInnerHTML={{ __html: sanitizeHtml(expandedPost.content) }}
                />
              </div>
            </GlassCard>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;

