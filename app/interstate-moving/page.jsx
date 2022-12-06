import Hero from '@/ui/Hero';
import Divider from '@/ui/Divider';
import Info from './Info';
import Locations from './Locations';
import CallToAction from '@/ui/CallToAction';
import Photos from '@/ui/Photos';
import Partners from '@/ui/Partners';

export default function InterstateMoving() {
  return (
    <>
      <Hero image="/prices.jpg" title="Long Disatnce Movers" />
      <Partners />
      <Info />
      {/* <Divider /> */}
      <Photos />
      <Locations />
      <CallToAction />
    </>
  );
}
