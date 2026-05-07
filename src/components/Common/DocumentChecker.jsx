import { useState } from 'react';
import { generateWhatsAppLink } from '../../utils/helpers';
import { CheckCircle2, Circle, ArrowRight } from 'lucide-react';

const DocumentChecker = ({ serviceName, requiredDocuments }) => {
  const [checkedDocs, setCheckedDocs] = useState({});
  const progress = requiredDocuments.length === 0 ? 0 : Math.round((Object.values(checkedDocs).filter(Boolean).length / requiredDocuments.length) * 100);

  const toggleDoc = (doc) => {
    setCheckedDocs(prev => ({ ...prev, [doc]: !prev[doc] }));
  };

  const handleWhatsAppSubmit = () => {
    const checkedList = requiredDocuments.filter(doc => checkedDocs[doc]).join(", ");
    const uncheckedList = requiredDocuments.filter(doc => !checkedDocs[doc]).join(", ");
    
    const message = `Hi Swaraj Enterprises, I am interested in ${serviceName}. \n\n✅ READY:\n${checkedList || "None yet"}\n\n⏳ NEED ASSISTANCE WITH:\n${uncheckedList || "None"}`;
    
    window.open(generateWhatsAppLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white">
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary-text">
            Readiness Progress
          </h3>
          <span className="text-sm font-bold text-primary-accent">{progress}% Complete</span>
        </div>
        <div className="w-full bg-secondary-bg rounded-full h-3 border border-border-color p-0.5">
          <div 
            className="bg-primary-accent h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(230,0,18,0.3)]" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      <div className="space-y-4 mb-12">
        <p className="text-[10px] font-bold text-muted-text uppercase tracking-widest mb-6">Required Items Checklist</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {requiredDocuments.map((doc, idx) => (
            <div 
              key={idx} 
              className={`flex items-center p-4 rounded-lg border transition-all cursor-pointer group ${
                checkedDocs[doc] 
                  ? 'border-primary-accent bg-primary-accent/5' 
                  : 'border-border-color bg-white hover:border-primary-text'
              }`}
              onClick={() => toggleDoc(doc)}
            >
              <div className={`mr-4 transition-all ${checkedDocs[doc] ? 'scale-110' : ''}`}>
                {checkedDocs[doc] ? (
                  <CheckCircle2 size={20} className="text-primary-accent" />
                ) : (
                  <Circle size={20} className="text-border-color group-hover:text-muted-text" />
                )}
              </div>
              <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                checkedDocs[doc] ? 'text-primary-text' : 'text-secondary-text'
              }`}>
                {doc}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 bg-secondary-bg rounded-xl border border-border-color text-center">
        <h4 className="text-lg font-heading font-bold text-primary-text mb-2">Ready to initiate?</h4>
        <p className="text-xs text-secondary-text mb-8 max-w-sm mx-auto">
          Submit your readiness report to our experts. We will guide you through 
          the next steps of the verification process.
        </p>
        <button 
          onClick={handleWhatsAppSubmit}
          className="btn-primary w-full max-w-md mx-auto flex items-center justify-center gap-3 py-4 text-xs tracking-[0.2em]"
        >
          SUBMIT VIA WHATSAPP
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default DocumentChecker;
