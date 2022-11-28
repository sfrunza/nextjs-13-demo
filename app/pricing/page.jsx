import Divider from '@/ui/Divider';
import Hero from '@/ui/Hero';
import CallToAction from '@/ui/CallToAction';
import InterstatePrices from './InterstatePrices';
import PricingTable from './PricingTable';

export default async function PricingPage() {
  return (
    <>
      <Hero image="/prices.jpg" title="Moving Prices & Rates" />
      <PricingTable />
      <Divider />
      <InterstatePrices />
      <CallToAction />
    </>
  );
}
