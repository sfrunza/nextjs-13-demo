import Container from '@/ui/Container';
import SectionHeader from '@/ui/SectionHeader';
import Link from 'next/link';

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
    <section aria-label="moving-services" className="py-20 sm:py-32">
      <Container>
        <SectionHeader
          title="Phoenix Moving Services"
          subtitle="Phoenix Moving Boston offers local, residential and commercial, moving
              services, corporate relocation for busy professionals, and
              companies as well."
        />
        {/* <div className="grid min-h-full grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-6">
          {services.map((service) => (
            <div className="relative flex rounded-xl" key={service.name}>
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center rounded-xl"
              />
              <div className="relative flex w-full flex-col items-start justify-end bg-black bg-opacity-40 p-16 sm:p-20 sm:pt-32 sm:pr-20 sm:pb-8 sm:pl-8 rounded-xl">
                <p className="mt-1 text-2xl font-medium text-white">
                  {service.name}
                </p>
                <p className="text-lg font-medium text-white text-opacity-75">
                  Self-Improvement
                </p>
                <a
                  href="#"
                  className="mt-4 rounded-md bg-white py-2.5 px-4 text-sm font-medium text-gray-900 hover:bg-gray-50"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div> */}
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-y-6 lg:max-w-none lg:grid-cols-3"
        >
          {services.map((service) => (
            <li key={service.name}>
              <Link
                href={service.href}
                className="rounded-2xl border border-gray-200 p-8 flex flex-col h-full hover:bg-palette-background hover:shadow-lg hover:shadow-gray-900/5"
                title={service.name}
              >
                <p className="font-semibold text-gray-900 text-lg">
                  {service.name}
                </p>
                <p className="mt-2 text-gray-700">{service.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
