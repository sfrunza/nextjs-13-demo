import Hero from '@/ui/Hero';
import Divider from '@/ui/Divider';
import Info from './Info';
import Locations from './Locations';
import CallToAction from '@/ui/CallToAction';

export default function InterstateMoving() {
  return (
    <>
      <Hero image="/prices.jpg" title="Long Disatnce Moving" />
      <Info />
      <Divider />
      <Locations />
      <CallToAction />
    </>
  );
}
