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
    const message = `Hi, I am ready to proceed with ${serviceName}. I have the following documents ready:\n${checkedList || "None yet"}.`;
    window.open(generateWhatsAppLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-8">
      <h3 className="text-xl font-heading font-semibold mb-4 text-brandPrimary">Document Readiness Checker</h3>
      <p className="text-sm text-slate-700 mb-6">Check the documents you currently have ready for {serviceName}.</p>
      
      <div className="w-full bg-gray-700 rounded-full h-2.5 mb-6">
        <div className="bg-brandPrimary h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-sm mb-4 text-right">{progress}% Ready</p>

      <ul className="space-y-3 mb-8">
        {requiredDocuments.map((doc, idx) => (
          <li 
            key={idx} 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => toggleDoc(doc)}
          >
            {checkedDocs[doc] ? (
              <CheckCircle2 className="text-green-400 group-hover:scale-110 transition-transform" />
            ) : (
              <Circle className="text-gray-400 group-hover:text-white transition-colors" />
            )}
            <span className={`transition-colors ${checkedDocs[doc] ? 'text-white' : 'text-gray-400'}`}>{doc}</span>
          </li>
        ))}
      </ul>

      <button 
        onClick={handleWhatsAppSubmit}
        className="w-full bg-gradient-to-r from-brandPrimary to-brandSecondary text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
      >
        <span>Proceed via WhatsApp</span>
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default DocumentChecker;
