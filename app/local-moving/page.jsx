import { Suspense } from 'react';
import Hero from '@/ui/Hero';
import Info from './Info';
import Included from './Included';
import CallToAction from '@/ui/CallToAction';
import Reviews from '@/ui/Reviews';
import CTA from '@/ui/CTA';
import CitiesSection from '@/ui/CitiesSection';
import Divider  from '@/ui/Divider';

export default function LocalMoving() {
  return (
    <>
      <Hero image="/prices.jpg" title="Local Moving" />
      <Included />
      <Info />
      <Divider />
      <CitiesSection />
      <CTA />
      <Suspense fallback="loading...">
        <Reviews />
      </Suspense>
      <CallToAction />
    </>
  );
}
