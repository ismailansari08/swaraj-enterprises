import { useState } from 'react';
import { BLOG_ARTICLES, CONTACT_INFO } from '../utils/data';
import { Calendar, Clock, ArrowRight, X, MessageCircle, Share2, Globe, BookOpen } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import SchemaMarkup from '../components/Common/SchemaMarkup';
import useScrollReveal from '../hooks/useScrollReveal';

const ArticleCard = ({ article, onClick, idx }) => {
  return (
    <div 
      className="premium-card group reveal-up cursor-pointer flex flex-col h-full overflow-hidden !p-0"
      onClick={() => onClick(article)}
      style={{ transitionDelay: `${idx * 100}ms` }}
    >
        <div className="relative aspect-[16/10] overflow-hidden bg-secondary-bg/50 border-b border-border-color">
        <div className="absolute inset-0 bg-texture opacity-[0.06]" />
        <div className="absolute top-6 left-6 px-4 py-2 bg-primary-accent text-white text-[10px] font-extrabold uppercase tracking-widest rounded-lg shadow-lg">
           {article.category || 'LEGAL UPDATES'}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-6 mb-6">
           <div className="flex items-center gap-2 text-[10px] font-extrabold text-muted-text uppercase tracking-widest">
              <Calendar size={14} className="text-primary-accent" /> {article.date}
           </div>
           <div className="flex items-center gap-2 text-[10px] font-extrabold text-muted-text uppercase tracking-widest">
              <Clock size={14} className="text-primary-accent" /> 5 MIN READ
           </div>
        </div>

        <h3 className="text-xl md:text-2xl font-heading font-extrabold text-primary-text mb-4 leading-tight group-hover:text-primary-accent transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-secondary-text text-sm mb-10 line-clamp-3 leading-relaxed flex-grow">
          {article.excerpt}
        </p>

        <div className="pt-8 border-t border-border-color flex items-center justify-between">
           <span className="text-[10px] font-extrabold text-primary-text uppercase tracking-widest group-hover:text-primary-accent transition-all flex items-center gap-2">
              READ ARTICLE <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
           </span>
           <div className="w-10 h-10 bg-secondary-bg rounded-xl flex items-center justify-center text-muted-text group-hover:bg-primary-accent group-hover:text-white transition-all shadow-sm">
              <Share2 size={16} />
           </div>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  useScrollReveal();
  useSEO({
    title: 'Legal Insights & Corporate Updates | Swaraj Enterprises Blog',
    description: 'Stay updated with the latest news on GST, PAN, Business Compliance, and Legal strategies in Maharashtra. Expert insights from Swaraj Enterprises.',
    keywords: 'Legal Blog Bhiwandi, GST Updates 2024, Business Compliance Guide, Swaraj Enterprises Articles',
  });

  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32">
      <SchemaMarkup type="Blog" data={{ "name": "Legal & Business Insights" }} />

      {/* Header */}
      <section className="bg-secondary-bg/50 border-b border-border-color py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture opacity-[0.03]" />
        <div className="section-container relative z-10 text-center">
          <div className="inline-flex items-center gap-3 mb-8 reveal-up">
            <div className="w-10 h-[2px] bg-primary-accent" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-primary-accent">KNOWLEDGE HUB</span>
            <div className="w-10 h-[2px] bg-primary-accent" />
          </div>
          <h1 className="mb-10 reveal-up" style={{ transitionDelay: '100ms' }}>
            Corporate <span className="text-primary-accent">Insights.</span>
          </h1>
          <p className="text-secondary-text text-base md:text-xl max-w-2xl mx-auto leading-relaxed reveal-up" style={{ transitionDelay: '200ms' }}>
            Curated articles and whitepapers from our legal experts to help you 
            navigate the complexities of modern business compliance.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {BLOG_ARTICLES.map((article, idx) => (
            <ArticleCard key={article.id} article={article} idx={idx} onClick={setSelectedArticle} />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-container pt-0">
         <div className="bg-primary-text rounded-[3rem] p-12 md:p-24 relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-96 h-96 bg-primary-accent/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
               <div className="max-w-xl text-center lg:text-left">
                  <h2 className="text-white mb-6">Stay ahead of the <span className="text-primary-accent">curve.</span></h2>
                  <p className="text-white/60 text-lg md:text-xl leading-relaxed">
                    Join 2,500+ professionals who receive our weekly digest on 
                    Indian compliance and corporate strategy.
                  </p>
               </div>
               <div className="w-full lg:w-auto">
                  <form className="relative group/form" onSubmit={(e) => e.preventDefault()}>
                    <input 
                      type="email" 
                      placeholder="ENTER CORPORATE EMAIL" 
                      className="w-full lg:w-[450px] bg-white/5 border-2 border-white/10 rounded-2xl py-6 md:py-8 pl-8 pr-48 text-white text-[11px] font-bold tracking-widest focus:outline-none focus:border-primary-accent transition-all"
                    />
                    <button className="absolute right-3 top-3 bottom-3 px-10 bg-primary-accent text-white rounded-xl text-[10px] font-extrabold uppercase tracking-widest hover:bg-hover-red transition-all shadow-lg shadow-primary-accent/20">
                       SUBSCRIBE
                    </button>
                  </form>
               </div>
            </div>
         </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-5 md:p-10">
          <div className="absolute inset-0 bg-primary-text/90 backdrop-blur-xl animate-fade-in" onClick={() => setSelectedArticle(null)} />
          
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col animate-scale-up">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="absolute top-8 right-8 z-50 w-12 h-12 bg-white border border-border-color rounded-2xl flex items-center justify-center text-primary-text hover:bg-primary-accent hover:text-white transition-all shadow-xl active:scale-90"
            >
              <X size={24} />
            </button>

            <div className="overflow-y-auto custom-scrollbar">
               <div className="relative h-[250px] md:h-[450px] overflow-hidden bg-secondary-bg/50 border-b border-border-color">
                  <div className="absolute inset-0 bg-texture opacity-[0.06]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 right-6 md:right-12">
                     <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-4 md:mb-6">
                        <span className="px-4 py-2 md:px-5 md:py-2 bg-primary-accent text-white text-[9px] md:text-[10px] font-extrabold uppercase tracking-widest rounded-lg">
                           {selectedArticle.category || 'LEGAL UPDATES'}
                        </span>
                        <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-extrabold text-white md:text-white/80 uppercase tracking-widest drop-shadow-sm">
                           <Calendar size={14} className="text-primary-accent" /> {selectedArticle.date}
                        </div>
                     </div>
                     <h2 className="text-2xl md:text-5xl font-heading font-extrabold tracking-tight leading-tight max-w-4xl">
                        {selectedArticle.title}
                     </h2>
                  </div>
               </div>

               <div className="p-6 md:p-20 pt-10">
                  <div className="grid lg:grid-cols-12 gap-10 md:gap-16">
                     <div className="lg:col-span-8">
                        <div 
                          className="prose prose-lg max-w-none text-secondary-text leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                        />
                        
                        <div className="mt-16 pt-12 border-t border-border-color flex flex-wrap items-center justify-between gap-10">
                           <div className="flex items-center gap-5">
                              <span className="text-[11px] font-extrabold text-primary-text uppercase tracking-widest">SHARE THIS ARTICLE</span>
                              <div className="flex items-center gap-3">
                                 {[Globe, MessageCircle, Share2].map((Icon, i) => (
                                   <button key={i} className="w-10 h-10 border border-border-color rounded-xl flex items-center justify-center text-muted-text hover:bg-primary-accent hover:border-primary-accent hover:text-white transition-all">
                                      <Icon size={16} />
                                   </button>
                                 ))}
                              </div>
                           </div>
                           <button className="flex items-center gap-4 text-primary-accent font-extrabold text-[11px] uppercase tracking-widest group">
                              NEXT ARTICLE <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                           </button>
                        </div>
                     </div>

                     <div className="lg:col-span-4">
                        <div className="sticky top-0 space-y-10">
                           <div className="p-8 bg-secondary-bg/50 border border-border-color rounded-3xl">
                              <h4 className="text-xl font-heading font-extrabold mb-8 flex items-center gap-3">
                                 <BookOpen className="text-primary-accent" size={24} /> Table of Contents
                              </h4>
                              <ul className="space-y-4">
                                 {['Introduction', 'Core Regulation', 'Documentation Process', 'Expert Advice', 'Conclusion'].map((item, i) => (
                                   <li key={i} className="flex items-center gap-3 text-sm font-bold text-secondary-text hover:text-primary-accent cursor-pointer transition-colors">
                                      <div className="w-1.5 h-1.5 bg-border-color rounded-full" />
                                      {item}
                                   </li>
                                 ))}
                              </ul>
                           </div>
                           
                           <div className="p-8 bg-primary-accent rounded-3xl text-white">
                              <h4 className="text-xl font-heading font-extrabold mb-6">Need expert help?</h4>
                              <p className="text-white/80 text-sm mb-8 leading-relaxed">Our legal team can handle all the complexities mentioned in this article.</p>
                              <button className="w-full py-4 bg-white text-primary-accent rounded-xl font-extrabold text-[10px] uppercase tracking-widest hover:bg-secondary-bg transition-all">
                                 SCHEDULE CONSULTATION
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
