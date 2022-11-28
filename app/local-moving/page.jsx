import Hero from '@/ui/Hero';
import Info from './Info';
import Included from './Included';
import CallToAction from '@/ui/CallToAction';
import CTA from '@/ui/CTA';
import CitiesSection from '@/ui/CitiesSection';
import Divider from '@/ui/Divider';

export default function LocalMoving() {
  return (
    <>
      <Hero image="/prices.jpg" title="Local Moving" />
      <Included />
      <Info />
      {/* <Divider /> */}
      <CTA />
      {/* <Divider /> */}
      <CitiesSection />
      <CallToAction />
    </>
  );
}
