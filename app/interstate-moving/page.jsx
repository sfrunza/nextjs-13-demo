import Hero from '@/ui/Hero';
import Divider from '@/ui/Divider';
import Info from './Info';
import Locations from './Locations';
import CallToAction from '@/ui/CallToAction';
import Photos from '@/ui/Photos';
import Partners from '@/ui/Partners';
import InterstatePrices from '../pricing/InterstatePrices';

export default function InterstateMoving() {
  return (
    <>
      <Hero image="/interstate.jpeg" title="Long Distance Movers" />
      <Partners />
      <Info />
      {/* <Divider /> */}
      <Photos />
      <Locations />
      <Divider />
      <InterstatePrices />
      <CallToAction />
    </>
  );
}
