import { useEffect } from 'react';

const useSEO = ({ title, description, keywords, canonical, ogImage, ogType = 'website' }) => {
  useEffect(() => {
    // 1. Title
    const baseTitle = 'Swaraj Enterprises & Legal Solutions';
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;

    // 2. Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description || 'Swaraj Enterprises & Legal Solutions - Premium Government & Legal Service Consultancy in Bhiwandi. PAN, GST, Passport, Shop Act & more.');

    // 3. Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords || 'PAN Card Bhiwandi, GST Registration Bhiwandi, Passport Seva Bhiwandi, Legal Consultancy Thane, Maharashtra Government Services');

    // 4. Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical || window.location.href);

    // 5. Open Graph Tags
    const updateOgTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOgTag('og:title', document.title);
    updateOgTag('og:description', metaDescription.getAttribute('content'));
    updateOgTag('og:type', ogType);
    updateOgTag('og:url', window.location.href);
    updateOgTag('og:image', ogImage || '/og-image.jpg');

    // 6. Twitter Tags
    const updateTwitterTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:title', document.title);
    updateTwitterTag('twitter:description', metaDescription.getAttribute('content'));
    updateTwitterTag('twitter:image', ogImage || '/og-image.jpg');

  }, [title, description, keywords, canonical, ogImage, ogType]);
};

export default useSEO;
