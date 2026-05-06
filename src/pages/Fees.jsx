import { useEffect, useState } from 'react';
import { ALL_SERVICES } from '../utils/data';

const Fees = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredServices = ALL_SERVICES.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-5xl font-heading font-bold mb-6 text-center"><span className="text-gradient">Fee Structure</span></h1>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
          Transparent pricing for all our registration and compliance services. No hidden charges.
        </p>

        <div className="max-w-md mx-auto mb-12">
          <input 
            type="text" 
            placeholder="Search for a service..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/20 rounded-full px-6 py-4 text-white focus:outline-none focus:border-brandPrimary transition-colors"
          />
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/10 border-b border-white/10 text-brandPrimary">
                  <th className="p-5 font-semibold">Service Name</th>
                  <th className="p-5 font-semibold">Description</th>
                  <th className="p-5 font-semibold text-right">Price</th>
                </tr>
              </thead>
              <tbody>
                {filteredServices.map((service, idx) => (
                  <tr key={service.id} className={`border-b border-white/5 hover:bg-white/5 transition-colors ${idx % 2 === 0 ? 'bg-black/20' : ''}`}>
                    <td className="p-5 font-medium text-white">{service.name}</td>
                    <td className="p-5 text-slate-600 text-sm">{service.description}</td>
                    <td className="p-5 text-right font-bold text-white whitespace-nowrap">{service.price}</td>
                  </tr>
                ))}
                {filteredServices.length === 0 && (
                  <tr>
                    <td colSpan="3" className="p-8 text-center text-slate-600">No services found matching your search.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fees;
