import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GlassCard from '../components/Common/GlassCard';
import DocumentChecker from '../components/Common/DocumentChecker';
import { ALL_SERVICES } from '../utils/data';

const Documents = () => {
  const location = useLocation();
  const passedServiceId = location.state?.selectedServiceId;
  const initialService = passedServiceId ? ALL_SERVICES.find(s => s.id === passedServiceId) || ALL_SERVICES[0] : ALL_SERVICES[0];
  
  const [selectedService, setSelectedService] = useState(initialService);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-5xl font-heading font-bold mb-6 text-center text-white"><span className="text-gradient">Required Documents</span></h1>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-16">
          Check what documents you need to keep ready for your selected service. Use our checklist to ensure you have everything before starting the process.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-2 max-h-[60vh] overflow-y-auto pr-4 scrollbar-hide">
            {ALL_SERVICES.map(service => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`w-full text-left p-4 rounded-xl transition-all ${selectedService.id === service.id ? 'bg-brandPrimary text-white shadow-lg ring-2 ring-brandPrimary/50' : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:border-white/20'}`}
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Checklist Area */}
          <div className="lg:col-span-2">
            <GlassCard className="sticky top-32">
              <h2 className="text-2xl font-bold mb-2">Documents for {selectedService.name}</h2>
              <p className="text-brandPrimary font-semibold mb-6">Processing Fee: {selectedService.price}</p>
              
              <DocumentChecker 
                serviceName={selectedService.name} 
                requiredDocuments={selectedService.documents || []} 
              />
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
