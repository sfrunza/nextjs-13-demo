// import Link from 'next/link';
import { cities } from '@/lib/citiesData';
import Section from './Section';
import SectionHeader from '@/ui/SectionHeader';

export default async function CitiesSection() {
  return (
    <Section>
      <SectionHeader title="Phoenix Moving Massachusetts Serving Areas" />
      <div className="grid grid-cols-3 gap-1 md:grid-cols-6">
        {cities.map((city, i) => {
          return (
            <div
              key={i}
              className="col-span-1 flex justify-center bg-gray-50 py-1 px-1"
            >
              <a
                href={`/${city.slug}`}
                title={city.fullName}
                className="hover:underline text-xs font-light sm:text-sm text-gray-900"
              >
                {city.name}
              </a>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
