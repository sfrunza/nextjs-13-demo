import { cities } from '@/lib/citiesData';
import Link from 'next/link';
import Container from './Container';
import SectionHeader from '@/ui/SectionHeader';

export default async function CitiesSection() {
  return (
    <section aria-label="massachusetts-serving-area" className="py-20 sm:py-32">
      <Container>
        <SectionHeader title="Phoenix Moving Massachusetts Serving Areas" />
        <div className="grid grid-cols-3 gap-0.5 md:grid-cols-6">
          {cities.map((city, i) => {
            return (
              <div
                key={i}
                className="col-span-1 flex justify-center bg-gray-50 py-2 px-2"
              >
                <Link
                  href={`/${city.slug}`}
                  className="hover:underline text-xs sm:text-sm text-gray-700"
                >
                  {city.shortName}
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
      {/* <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-900">
          Phoenix Moving Massachusetts Serving Areas
        </h2>
        <div className="mt-6 grid grid-cols-4 gap-0.5 md:grid-cols-6 lg:mt-8">
          {cities.map((city, i) => {
            return (
              <div
                key={i}
                className="col-span-1 flex justify-center bg-gray-50 py-2 px-2"
              >
                <Link href={`/${city.slug}`} className="hover:underline">
                  {city.shortName}
                </Link>
              </div>
            );
          })}
        </div>
      </div> */}
    </section>
  );
}
