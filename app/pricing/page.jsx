import { Suspense } from 'react';
import Divider from '@/ui/Divider';
import Hero from '@/ui/Hero';
import CallToAction from '@/ui/CallToAction';
import Reviews from '@/ui/Reviews';
import InterstatePrices from './InterstatePrices';
import PricingTable from './PricingTable';

export const revalidate = 60;

export default async function PricingPage() {
  return (
    <>
      <Hero image="/prices.jpg" title="Moving Prices & Rates" />
      <Suspense fallback="loading...">
        <PricingTable />
      </Suspense>
      <Divider />
      <InterstatePrices />
      <Suspense fallback="loading...">
        <Reviews />
      </Suspense>
      <CallToAction />
    </>
  );
}
