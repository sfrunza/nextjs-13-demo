import { CheckIcon } from '@heroicons/react/24/outline';
import SectionHeader from '@/ui/SectionHeader';
import Container from '@/ui/Container';

const cities = [
  {
    name: 'New York, NY',
    price: 950,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Charlotte, NC',
    price: 2200,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Philadelphia, PA',
    price: 1300,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Miami, FL',
    price: 4000,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Washington, DC.',
    price: 1500,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Austin, TX',
    price: 3600,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Chicago, IL',
    price: 3200,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Los Angeles, CA',
    price: 8900,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const features = [
  {
    name: 'Fuel',
    description: 'Mileage and tolls',
  },
  {
    name: 'Transportation',
    description: 'loading/unloading',
  },
  {
    name: 'Insurance',
    description: 'moving insurance of up to $20.000',
  },
  {
    name: 'Moving certificates',
    description: 'of insurance for the building',
  },
  {
    name: 'Furniture disassembly',
    description: 'and reassembly',
  },
  {
    name: 'Furniture',
    description: 'blanket wrapping',
  },
];

export default function InterstatePrices() {
  return (
    <section aria-label="moving-rates" className="py-20 sm:py-32">
      <Container>
        <SectionHeader
          title="Our Rates for Common Destinations"
          subtitle="Is based upon the mileage from the origin to the destination, and the cubic footage of your belongings."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {cities.map((city, i) => (
            <div
              key={i}
              className="relative flex items-center space-x-3 rounded-2xl border border-gray-300 bg-white shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
            >
              {/* <div className="flex-shrink-0"> */}
              {/* <img
                  className="h-full w-20 rounded-l-[7px]"
                  src={city.imageUrl}
                  alt={city.name}
                /> */}
              {/* <Image
                  src={city.imageUrl}
                  alt={`${city.name} image`}
                  width={50}
                  height={50}
                /> */}
              {/* </div> */}
              <div className="min-w-0 flex-1">
                <a
                  href="#"
                  className="focus:outline-none flex justify-between items-center px-6 py-6"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">
                    {city.name}
                  </p>
                  <p className="truncate text-md text-gray-500">
                    <span className="text-sm text-gray-400 mr-2">
                      Starting at
                    </span>
                    ${city.price}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-gray-900 mt-16">
          What is included in standard long distance move?
        </h3>
        <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8 p-8 bg-palette-background rounded-2xl">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon
                  className="absolute h-6 w-6 text-green-500"
                  aria-hidden="true"
                />
                <p className="ml-9 text-lg font-medium leading-6 text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
