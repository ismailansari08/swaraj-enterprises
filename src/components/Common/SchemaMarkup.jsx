import { useEffect } from 'react';
import { CONTACT_INFO } from '../../utils/data';

const SchemaMarkup = ({ type = 'LocalBusiness', data = {} }) => {
  useEffect(() => {
    const existingScript = document.getElementById(`schema-${type.toLowerCase()}`);
    if (existingScript) {
      existingScript.remove();
    }

    const baseSchema = {
      "@context": "https://schema.org",
      "@type": type,
      "name": CONTACT_INFO.name,
      "alternateName": "Swaraj Enterprises & Legal Solutions",
      "url": "https://swarajenterprises.in", 
      "logo": "https://swarajenterprises.in/logo.png",
      "image": "https://swarajenterprises.in/og-image.jpg",
      "description": "Premium Government & Legal Service Consultancy in Bhiwandi. Expert Agent for PAN Card, Passport, GST Registration, Shop Act, ITR Filing, and Company Registration in Thane & Maharashtra.",
      "keywords": "PAN Card Agent Bhiwandi, Passport Consultant Bhiwandi, GST Services Thane, Online Form Filling Bhiwandi, Shop Act Registration Maharashtra",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": CONTACT_INFO.address.split(',')[0],
        "addressLocality": "Bhiwandi",
        "addressRegion": "Maharashtra",
        "postalCode": "421308",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "19.2994", // Bhiwandi Approx
        "longitude": "73.0614"
      },
      "telephone": `+91${CONTACT_INFO.primaryPhone}`,
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/swarajenterprises",
        "https://www.instagram.com/swarajenterprises"
      ],
      ...data
    };

    const script = document.createElement('script');
    script.id = `schema-${type.toLowerCase()}`;
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(baseSchema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(`schema-${type.toLowerCase()}`);
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, [type, data]);

  return null;
};

export default SchemaMarkup;
