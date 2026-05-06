import { CONTACT_INFO } from './data';

export const generateWhatsAppLink = (message) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/91${CONTACT_INFO.primaryPhone}?text=${encodedMessage}`;
};

export const sanitizeHtml = (html) => {
  if (typeof window === 'undefined' || !html) {
    return '';
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const blockedTags = ['script', 'style', 'iframe', 'object', 'embed', 'link', 'meta'];

  blockedTags.forEach((tag) => {
    doc.querySelectorAll(tag).forEach((node) => node.remove());
  });

  const sanitizeNode = (node) => {
    if (node.nodeType !== Node.ELEMENT_NODE) return;

    [...node.attributes].forEach((attr) => {
      const name = attr.name.toLowerCase();
      const value = attr.value.trim().toLowerCase();

      if (name.startsWith('on') || name === 'style' || (name === 'href' && value.startsWith('javascript:'))) {
        node.removeAttribute(attr.name);
      }
    });

    node.childNodes.forEach(sanitizeNode);
  };

  sanitizeNode(doc.body);
  return doc.body.innerHTML;
};
