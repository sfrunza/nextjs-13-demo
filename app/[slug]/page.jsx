import { notFound } from 'next/navigation';
import Hero from '@/ui/Hero';
import { cities } from '@/lib/citiesData';
import Info from './Info';
import Faqs from '@/ui/Faqs';
import Stats from './Stats';
import Services from './Services';
import CTA from '@/ui/CTA';
import Advantages from './Advantages';
import Divider from '@/ui/Divider';
import Incentives from './Incentives';

export const dynamicParams = true;

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

async function getCity(slug) {
  return cities.find((c) => c.slug === slug);
}

export default async function CityPage({ params }) {
  const { slug } = params;
  const city = await getCity(slug);

  if (!city) {
    notFound();
  }

  return (
    <>
      <Hero image={'/home.png'} title={city.fullName} />
      <Info city={city} />
      <Stats />
      {/* <Incentives /> */}
      <Services city={city} />
      <Divider />
      <Advantages city={city} />
      <Faqs />
      <CTA />
    </>
  );
}
