import { Suspense } from 'react';
import Hero from '@/ui/Hero';
import Info from './Info';
import Included from './Included';
import CallToAction from '@/ui/CallToAction';
import CTA from '@/ui/CTA';
import CitiesSection from '@/ui/CitiesSection';
import Divider from '@/ui/Divider';
import InstagramFeeds from '@/ui/InstagramFeed';

export default function LocalMoving() {
  return (
    <>
      <Hero image="/two-movers-and-dresses.jpeg" title="Local Moving" />
      <Included />
      <Info />
      {/* <Divider /> */}
      <CTA />
      {/* <Divider /> */}
      <CitiesSection />
      <Divider />
      <Suspense fallback="loading...">
        <InstagramFeeds />
      </Suspense>
      <CallToAction />
    </>
  );
}
