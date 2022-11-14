import Container from '@/ui/Container';
import SectionHeader from '@/ui/SectionHeader';
import Link from 'next/link';

const features = [
  {
    name: 'Local Moving',
    description:
      'Phoenix Moving is a perfect soultion for your Boston and surrounding area move',
  },
  {
    name: 'Interstate Moving',
    description:
      'Moving across United States with Fuly Licensed and Insured Moving Company',
  },
  {
    name: 'Packing Services',
    description:
      'Moving Packing Solutions. Phoenix Moving Company provides all kind of boxes and carefully pack your stuff',
  },
  {
    name: 'Storage Solutions',
    description:
      'All types of storages for your move with Phoenix Moving Company. Short and Long terms available',
  },
];

export default function Services() {
  return (
    <section aria-label="moving-services" className="py-20 sm:py-32">
      <Container>
        <SectionHeader
          title="Phoenix Moving Services"
          subtitle="Phoenix Movers offers local, residential and commercial, moving
              services, corporate relocation for busy professionals, and
              companies as well."
        />
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li key={feature.name}>
              <Link
                href="#"
                className="rounded-2xl border border-gray-200 p-8 flex flex-col h-full hover:bg-palette-background hover:shadow-lg hover:shadow-gray-900/5"
                title={feature.name}
              >
                <p className="font-semibold text-gray-900 text-lg">
                  {feature.name}
                </p>
                <p className="mt-2 text-gray-700">{feature.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
