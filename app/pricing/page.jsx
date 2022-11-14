import Hero from '@/ui/Hero';
import { Suspense } from 'react';
import PricingTable from './PricingTable';

export default async function PricingPage() {
  return (
    <>
      <Hero image="/prices.jpg" title="Pricing" />
      <Suspense fallback="loading...">
        <PricingTable />
      </Suspense>
    </>
  );
}
