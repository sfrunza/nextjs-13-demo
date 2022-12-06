import CallToAction from '@/ui/CallToAction';
import CTA from '@/ui/CTA';
import Faqs from '@/ui/Faqs';
import Hero from '@/ui/Hero';
import PackingItems from '@/ui/PackingItems';
import Info from './Info';
import Packages from './Packages';

export default function PackingServices() {
  return (
    <>
      <Hero image="/prices.jpg" title="Packing Services & Supplies" />
      <Info />
      <PackingItems />
      <Packages />
      <CTA />
      <Faqs />
      <CallToAction />
    </>
  );
}
