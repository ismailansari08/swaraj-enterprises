import React from 'react';

const CategoryTabs = ({ categories, activeTab, onChange, stickyTopClassName = 'top-20' }) => {
  return (
    <section className={`sticky z-40 ${stickyTopClassName} bg-white/80 backdrop-blur-md border-b border-border-color py-6`}>
      <div className="max-w-7xl mx-auto px-5 overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-start md:justify-center gap-2 md:gap-4">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onChange(cat)}
                aria-pressed={isActive}
                className={
                  "group relative whitespace-nowrap px-6 md:px-8 py-3 md:py-3 rounded-xl transition-all border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent/60 " +
                  (isActive
                    ? "bg-primary-accent border-primary-accent text-white shadow-lg shadow-primary-accent/25"
                    : "bg-white border-border-color text-muted-text hover:border-primary-accent/30 hover:text-primary-text")
                }
              >
                {/* Active indicator */}
                <span
                  className={
                    "pointer-events-none absolute left-3 right-3 -bottom-2 h-[2px] rounded-full transition-all " +
                    (isActive ? 'bg-white/90 opacity-100 scale-x-100' : 'bg-primary-accent opacity-0 scale-x-50')
                  }
                />

                <span className={"relative z-10 text-[10px] md:text-[11px] font-extrabold uppercase tracking-widest transition-colors"}>
                  {cat}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryTabs;

