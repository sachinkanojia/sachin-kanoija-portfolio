import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

const DEFAULT_IMAGE = 'https://sachinkanojia.vercel.app/og-image.jpg';
const DEFAULT_URL = 'https://sachinkanojia.vercel.app';

export const useSEO = ({ title, description, image = DEFAULT_IMAGE, url = DEFAULT_URL, type = 'website' }: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const updateMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector) as HTMLMetaElement;
      if (!el) {
        el = document.createElement('meta');
        property ? el.setAttribute('property', name) : el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const updateLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    updateMeta('description', description);
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', image, true);
    updateMeta('og:url', url, true);
    updateMeta('og:type', type, true);
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);
    updateLink('canonical', url);
  }, [title, description, image, url, type]);
};