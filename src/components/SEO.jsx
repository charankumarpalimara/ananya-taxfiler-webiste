"use client";

import { useEffect } from 'react';

/**
 * SEO Component to dynamically set document title, meta description, 
 * meta keywords, canonical link, and OpenGraph/Twitter tags.
 */
export default function SEO({ title, description, keywords, image, url }) {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // Helper to update or create meta element
    const setMetaTag = (selector, attributeName, attributeValue, content) => {
      if (!content) return;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to update or create link element
    const setLinkTag = (rel, href) => {
      if (!href) return;
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    const currentUrl = url || window.location.href;
    const defaultImage = image || 'https://ananyataxco.com/new-logo.jpeg';

    // 2. Standard Meta Tags
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);

    // 3. Open Graph Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', defaultImage);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');

    // 4. Twitter Card Tags
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', defaultImage);

    // 5. Canonical URL
    setLinkTag('canonical', currentUrl);

  }, [title, description, keywords, image, url]);

  return null;
}
