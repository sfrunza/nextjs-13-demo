import { Suspense } from 'react';
import Divider from '@/ui/Divider';
import Hero from '@/ui/Hero';
import CallToAction from '@/ui/CallToAction';
import Reviews from '@/ui/Reviews';
import InterstatePrices from './InterstatePrices';
import PricingTable from './PricingTable';

export const runtime = 'experimental-edge';

export default async function PricingPage() {
  return (
    <>
      <Hero image="/prices.jpg" title="Moving Prices & Rates" />
      <PricingTable />
      <Divider />
      <InterstatePrices />
      <Suspense fallback="loading...">
        <Reviews />
      </Suspense>
      <CallToAction />
    </>
  );
}
