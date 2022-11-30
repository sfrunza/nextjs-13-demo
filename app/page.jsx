import { Suspense } from 'react';
import Hero from '@/ui/Hero';
import Pricing from './Pricing';
import CTA from '@/ui/CTA';
import Services from './Services';
// import Test from './Test';
import Divider from '@/ui/Divider';
import Faqs from '@/ui/Faqs';
// import Features from '@/ui/Features';
import Reviews from '@/ui/Reviews';
import CallToAction from '@/ui/CallToAction';
import Contact from '@/ui/Contact';
import Script from 'next/script';
import CitiesSection from '@/ui/CitiesSection';
import Incentive from '@/ui/Incentive';

const schema1 = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  '@id': 'https://www.gophoenixmoving.com',
  name: 'Phoenix Moving | Boston - Chicago from $2950&lrm;. Boston to Chicago Movers',
  url: 'https://www.gophoenixmoving.com/',
  logo: 'https://www.gophoenixmoving.com/_next/image?url=%2Flogos%2Flogo.png&w=384&q=75',
  image: [
    'https://www.gophoenixmoving.com/_next/image?url=%2Fhome.png&w=2048&q=75',
  ],
  telephone: '(617) 319-5700',
  openingHours: 'Mo, Tu, We, Th, Fr, Sa 8am-8pm',
  description:
    'Fully Licensed and Insured Reliable Boston Moving Company. Phoenix Movers are professionals and ready to move across MA and other states.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Natick',
    addressRegion: 'MA',
    postalCode: '01760',
    streetAddress: '18 Lakeview Gardens',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '42.28343',
    longitude: '-71.3495',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-508-315-9458',
    contactType: 'customer service',
  },
  review: {
    '@type': 'Review',
    reviewBody:
      'Excellent crew. Den and Alex were amazing. Very efficient work , professional approach to workflow. Highly recommend it, I will tell all my friends about this company. Thank you Phoenix Moving.',
    reviewRating: { '@type': 'Rating', ratingValue: 5 },
    author: { '@type': 'Person', name: 'A. Jacob' },
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Boston',
      '@id': 'https://en.wikipedia.org/wiki/Boston',
    },
    {
      '@type': 'City',
      name: 'Natick',
      '@id': 'https://en.wikipedia.org/wiki/Natick,_Massachusetts',
    },
    {
      '@type': 'County',
      name: 'Essex County',
      '@id': 'https://en.wikipedia.org/wiki/Essex_County,_Massachusetts',
    },
    {
      '@type': 'County',
      name: 'Norfolk County',
      '@id': 'https://en.wikipedia.org/wiki/Norfolk_County,_Massachusetts',
    },
    {
      '@type': 'County',
      name: 'Suffolk County',
      '@id': 'https://en.wikipedia.org/wiki/Suffolk_County,_Massachusetts',
    },
    {
      '@type': 'State',
      name: 'Massachusetts',
      '@id': 'https://en.wikipedia.org/wiki/Massachusetts',
    },
  ],
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.gophoenixmoving.com/#webpage',
      url: 'https://www.gophoenixmoving.com/',
      name: 'Phoenix Moving | Boston - Chicago from $2950&lrm;. Boston to Chicago Movers',
      isPartOf: { '@id': 'https://www.gophoenixmoving.com/#website' },
      datePublished: '2022-11-26T10:23:12+00:00',
      dateModified: '2022-11-26T12:13:32+00:00',
      description:
        'Fully Licensed and Insured Reliable Boston Moving Company. Phoenix Movers are professionals and ready to move across MA and other states.',
      inLanguage: 'en-US',
      potentialAction: [
        {
          '@type': 'ReadAction',
          target: ['https://www.gophoenixmoving.com/'],
        },
      ],
    },
  ],
};

const schema2 = {
  '@context': 'http://schema.org',
  '@type': 'BreadcrumbList',
  name: 'Phonix Moving Boston',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Landing Page',
      item: 'https://www.gophoenixmoving.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Moving & Packing Services',
      item: 'https://www.gophoenixmoving.com/',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Phoenix Moving Boston - 🚚 Make Moving Chill (Free Estimate)',
      item: 'https://www.gophoenixmoving.com/#',
    },
  ],
};

const schema3 = {
  '@context': 'http://schema.org',
  '@type': 'Product',
  name: 'Boston to Chicago IL Movers',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.98',
    ratingCount: '143',
  },
};

export default function Home() {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema3) }}
      />
      <Hero image={'/home.png'} title="Boston Moving Company" />
      <Incentive />
      <Pricing />
      {/* <Divider /> */}
      {/* <Test /> */}
      <Services />
      {/* <Features /> */}
      <CTA />
      <Suspense fallback="loading...">
        <Reviews />
      </Suspense>
      <Faqs />
      <Divider />
      <CitiesSection />
      {/* <CallToAction /> */}
      <Contact />
    </>
  );
}
