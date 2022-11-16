import Divider from '@/ui/Divider';
import Hero from '@/ui/Hero';
import { Suspense } from 'react';
import InterstatePrices from './InterstatePrices';
import PricingTable from './PricingTable';

export default async function PricingPage() {
  return (
    <>
      <Hero image="/prices.jpg" title="Pricing" />
      <Suspense fallback="loading...">
        <PricingTable />
      </Suspense>
      <Divider />
      <InterstatePrices />
    </>
  );
}
