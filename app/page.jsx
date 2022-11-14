import { Suspense } from 'react';
import Hero from '@/ui/Hero';
import Pricing from './Pricing';
import CTA from '@/ui/CTA';
import Services from './Services';
import Test from './Test';
import Divider from '@/ui/Divider';
import Faqs from '@/ui/Faqs';
import Features from '@/ui/Features';
// import Reviews from '@/ui/Reviews';
import dynamic from 'next/dynamic';

const DynamicReviews = dynamic(() => import('@/ui/Reviews'), {
  suspense: true,
});

export default function Home() {
  return (
    <>
      <Hero image={'/home.png'} title="Boston Moving Company" />
      <Pricing />
      {/* <Divider /> */}
      {/* <Test /> */}
      <Divider />
      <Services />
      {/* <Features /> */}
      <Suspense fallback="loading...">
        <DynamicReviews />
      </Suspense>
      <CTA />
      <Faqs />
    </>
  );
}
