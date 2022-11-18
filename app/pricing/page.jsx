import dynamic from 'next/dynamic';
import Divider from '@/ui/Divider';
import Hero from '@/ui/Hero';
import { Suspense } from 'react';
import InterstatePrices from './InterstatePrices';
import PricingTable from './PricingTable';
import CallToAction from '@/ui/CallToAction';
import PackingSwiper from '@/ui/PackingSwiper';

const DynamicReviews = dynamic(() => import('@/ui/Reviews'), {
  suspense: true,
});

export const revalidate = 60;

export default async function PricingPage() {
  return (
    <>
      <Hero image="/prices.jpg" title="Moving Prices & Rates" />
      <PackingSwiper />
      <Suspense fallback="loading...">
        <PricingTable />
      </Suspense>
      <Divider />
      <InterstatePrices />
      <Suspense fallback="loading...">
        <DynamicReviews />
      </Suspense>
      <CallToAction />
    </>
  );
}
