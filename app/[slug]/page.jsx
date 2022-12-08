import { notFound } from 'next/navigation';
import Hero from '@/ui/Hero';
import { cities } from '@/lib/citiesData';
import { states } from '@/lib/statesData';
import Info from './Info';
import Faqs from '@/ui/Faqs';
import Stats from './Stats';
import Services from './Services';
import CTA from '@/ui/CTA';
import Advantages from './Advantages';
import Divider from '@/ui/Divider';
import Partners from '@/ui/Partners';
import Photos from '@/ui/Photos';

export const dynamicParams = true;

export async function generateStaticParams() {
  let localCities = cities.map((city) => ({
    slug: city.slug,
  }));

  const filterdStates = states.filter((s) => s.cities);

  let arr = [];

  filterdStates.map((s) => {
    s.cities.map((c) => {
      let gg = { slug: c.slug };
      arr.push(gg);
    });
  });

  const allSlugs = localCities.concat(arr);
  return allSlugs;
}

async function getCity(slug) {
  return cities.find((c) => c.slug === slug);
}

async function getCityState(slug) {
  const filterdStates = states.filter((s) => s.cities && s.cities.length > 0);
  let interstateCity = null;
  filterdStates.map((s) => {
    s.cities.find((c) => {
      if (c.slug === slug) {
        interstateCity = c;
      }
    });
  });
  return interstateCity;
}

export default async function CityPage({ params }) {
  const { slug } = params;
  let city = {};

  if (slug.includes('boston-')) {
    city = await getCityState(slug);
  } else {
    city = await getCity(slug);
  }

  if (!city) {
    notFound();
  }

  return (
    <>
      {city?.interstate ? (
        <>
          <Hero
            image={'/mover-pushing-dolly.jpg'}
            title={`Movers from Boston to ${city.name}`}
          />
          {/* <Info city={city} /> */}
          <Stats />
          {/* <Services city={city} /> */}
          {/* <Divider /> */}
          {/* <Advantages city={city} /> */}
          <Faqs />
          <CTA />
        </>
      ) : (
        <>
          <Hero image={'/mover-pushing-dolly.jpg'} title={city.fullName} />
          <Partners />
          <Info city={city} />
          <Stats />
          <Advantages city={city} />
          <Photos />
          <Services city={city} />
          <Faqs />
          <CTA />
        </>
      )}
    </>
  );
}
