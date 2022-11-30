import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';
// import Link from 'next/link';

const services = [
  {
    name: 'Local Moving',
    href: 'local-moving',
    description:
      'Phoenix Moving is a perfect soultion for your Boston and surrounding area move',
  },
  {
    name: 'Interstate Moving',
    href: 'interstate-moving',
    description:
      'Moving across United States with Fuly Licensed and Insured Moving Company',
  },
  {
    name: 'Packing Services',
    href: 'packing-services',
    description:
      'Moving Packing Solutions. Phoenix Moving Company provides all kind of boxes and carefully pack your stuff',
  },
  {
    name: 'Storage Solutions',
    href: 'storage-solutions',
    description:
      'All types of storages for your move with Phoenix Moving Company. Short and Long terms available',
  },
];

export default function Services() {
  return (
    <Section label="phoenix-moving-services">
      <SectionHeader
        title="Phoenix Moving Services"
        subtitle="Phoenix Moving Boston offers local, residential and commercial, moving
              services, corporate relocation for busy professionals, and
              companies as well."
      />
      <ul
        role="list"
        className="mx-auto grid max-w-2xl grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-y-6 lg:max-w-none lg:grid-cols-3"
      >
        {services.map((service) => (
          <li key={service.name}>
            <a
              href={service.href}
              className="rounded-2xl border border-gray-200 p-8 flex flex-col h-full hover:bg-palette-background hover:shadow-lg hover:shadow-gray-900/5 transition-all duration-150 ease-in"
              title={service.name}
            >
              <p className="font-semibold text-gray-900 text-lg">
                {service.name}
              </p>
              <p className="mt-2 text-gray-700">{service.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
