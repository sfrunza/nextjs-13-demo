import { cities } from '@/lib/citiesData';
import { states } from '@/lib/statesData';

export async function getCity(slug) {
  return cities.find((city) => city.slug === slug);
}

export async function getCityState(slug) {
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

export default async function Head({ params }) {
  const { slug } = params;
  let city = {};

  if (slug.includes('boston-')) {
    city = await getCityState(slug);
  } else {
    city = await getCity(slug);
  }

  return (
    <>
      <meta charSet="UTF-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      {city && city.interstate ? (
        <title>{`Movers from Boston to ${city.name} | Boston to ${city.name} moving Company`}</title>
      ) : (
        <title>{`${city?.fullName} - Phoenix Moving Boston (Free Estimate)`}</title>
      )}
      <meta
        name="description"
        content="Fully Licensed and Insured Reliable Boston Moving Company. Phoenix Movers are professionals and ready to move across MA and other states."
      />
      <meta name="robots" content="index,follow" />
      <meta
        name="keywords"
        content="boston to ny moving company, from boston to new york moving, Boston movers, Boston moving company, Boston moving services, moving company in boston, boston moving storage company, Boston relocation company, Boston relocation service, Boston office relocation, ma relocation, massachusets relocation, massachusets relocation company, Massachusetts storage, boston storage company, massachusets moving, massachusets moving company, moving boston storage, moving companies in boston, commercial boston movers, moving packing supplies, student moving discounts, affordable moving company"
      />
      <link rel="icon" href="/favicon.ico" precedence="default" />
      <link
        rel="canonical"
        href={`https://nextjs-13-demo-psi.vercel.app/${city?.slug}`}
        precedence="default"
      />
      <link rel="manifest" href="/manifest.json" precedence="default" />
      <link rel="icon" href="/favicon.ico" precedence="default" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-touch-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon-180x180.png"
      />
      <link rel="manifest" href="/manifest.json" precedence="default" />
    </>
  );
}
