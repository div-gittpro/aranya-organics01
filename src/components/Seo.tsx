import { useEffect } from 'react';
import { PRODUCTS } from '../data';
import { COMPANY_INFO } from '../companyInfo';
import { Product } from '../types';

const SITE_URL = (import.meta.env.VITE_SITE_URL || import.meta.env.APP_URL || 'https://aranyaorganic.com').replace(/\/$/, '');
const SITE_NAME = 'Aranya Organic';
const SOCIAL_IMAGE = `${SITE_URL}/og-image.jpeg`;
const DEFAULT_TITLE = 'Aranya Organic | Organic Skincare, Haircare & Personal Care in Mumbai';
const DEFAULT_DESCRIPTION =
  'Shop handcrafted organic skincare, haircare, bath, body, makeup and personal care products from Aranya Organic in Mumbai. Natural botanical formulations with WhatsApp ordering and personalized consultation.';

const META_BY_TAB: Record<string, { title: string; description: string }> = {
  home: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  products: {
    title: 'Organic Skincare, Haircare & Personal Care Products | Aranya Organic',
    description:
      'Explore Aranya Organic products including face wash, serums, creams, hair oils, shampoos, soaps, bath salts, facial kits and organic makeup.',
  },
  about: {
    title: 'About Aranya Organic | Handcrafted Botanical Beauty',
    description:
      'Learn about Aranya Organic, a Mumbai-based skincare, haircare and personal care brand focused on natural ingredients, quality and conscious beauty.',
  },
  consultation: {
    title: 'Personalized Skin & Hair Consultation | Aranya Organic',
    description:
      'Get personalized Aranya Organic skincare and haircare product recommendations based on your concerns, routine and wellness needs.',
  },
  terms: {
    title: 'Terms & Conditions | Aranya Organic',
    description: 'Read the terms and conditions for using the Aranya Organic website, product ordering and consultation services.',
  },
  returns: {
    title: 'Refund & Cancellation Policy | Aranya Organic',
    description: 'Review Aranya Organic return, refund, replacement and cancellation policies for product orders.',
  },
  shipping: {
    title: 'Shipping & Delivery Policy | Aranya Organic',
    description: 'Read Aranya Organic shipping timelines, delivery terms and order dispatch information for India.',
  },
  privacy: {
    title: 'Privacy Policy | Aranya Organic',
    description: 'Learn how Aranya Organic handles customer information, order details, consultations and privacy requests.',
  },
  'consultation-disclaimer': {
    title: 'Consultation Disclaimer | Aranya Organic',
    description: 'Important information about Aranya Organic skincare and haircare consultation recommendations.',
  },
};

function upsertMeta(selector: string, create: () => HTMLMetaElement | HTMLLinkElement, valueKey: 'content' | 'href', value: string) {
  const existing = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
  const element = existing || create();
  element.setAttribute(valueKey, value);
  if (!existing) document.head.appendChild(element);
}

function absoluteUrl(pathOrUrl?: string) {
  if (!pathOrUrl) return SITE_URL;
  try {
    return new URL(pathOrUrl, SITE_URL).href;
  } catch {
    return SITE_URL;
  }
}

function productJsonLd(product: Product) {
  return {
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images?.length ? product.images.map(absoluteUrl) : [absoluteUrl(product.image)],
    sku: product.id,
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
    },
    category: [product.category, product.subCategory].filter(Boolean).join(' > '),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: 14,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: product.price,
      availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      url: SITE_URL,
    },
  };
}

export default function Seo({ currentTab, selectedProduct }: { currentTab: string; selectedProduct?: Product | null }) {
  useEffect(() => {
    const pageMeta =
      selectedProduct && currentTab === 'product-detail'
        ? {
            title: `${selectedProduct.name} | Aranya Organic`,
            description: selectedProduct.description,
          }
        : META_BY_TAB[currentTab] || META_BY_TAB.home;

    document.title = pageMeta.title;

    upsertMeta('meta[name="description"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      return meta;
    }, 'content', pageMeta.description);

    upsertMeta('meta[property="og:title"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      return meta;
    }, 'content', pageMeta.title);

    upsertMeta('meta[property="og:description"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      return meta;
    }, 'content', pageMeta.description);

    upsertMeta('meta[property="og:image"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:image');
      return meta;
    }, 'content', SOCIAL_IMAGE);

    upsertMeta('meta[name="twitter:title"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'twitter:title');
      return meta;
    }, 'content', pageMeta.title);

    upsertMeta('meta[name="twitter:description"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'twitter:description');
      return meta;
    }, 'content', pageMeta.description);

    upsertMeta('meta[name="twitter:image"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'twitter:image');
      return meta;
    }, 'content', SOCIAL_IMAGE);

    upsertMeta('link[rel="canonical"]', () => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      return link;
    }, 'href', SITE_URL);
  }, [currentTab, selectedProduct]);

  const featuredProducts = selectedProduct ? [selectedProduct] : PRODUCTS.slice(0, 24);
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        email: COMPANY_INFO.email,
        telephone: COMPANY_INFO.phoneDisplay,
        sameAs: [COMPANY_INFO.instagram],
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#localbusiness`,
        name: SITE_NAME,
        url: SITE_URL,
        email: COMPANY_INFO.email,
        telephone: COMPANY_INFO.phoneDisplay,
        address: {
          '@type': 'PostalAddress',
          streetAddress: COMPANY_INFO.address,
          addressLocality: 'Mumbai',
          addressRegion: 'Maharashtra',
          postalCode: '400091',
          addressCountry: 'IN',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_URL}/?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'ItemList',
        '@id': `${SITE_URL}/#products`,
        name: 'Aranya Organic product catalog',
        itemListElement: featuredProducts.map((product, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: productJsonLd(product),
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
      }}
    />
  );
}
