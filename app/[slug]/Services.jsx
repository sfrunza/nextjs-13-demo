import { CheckIcon } from '@heroicons/react/24/outline';
import Container from '@/ui/Container';

const features = [
  {
    name: 'Online and On-Site Free Estimate',
  },
  {
    name: 'Fully Licensed and Insured',
  },
  {
    name: 'Floors Padding and Wrapping of Furniture',
  },
  {
    name: 'Protection of your Home from Damage',
  },
  {
    name: 'Professional Team',
  },
  {
    name: 'Disassembling/Assembling Furniture',
  },
];

export default function Services({ city }) {
  return (
    <section>
      <Container>
        <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:px-8 lg:py-40">
          <div>
            <h2 className="text-md md:text-lg font-semibold leading-8 tracking-tight text-indigo-600">
              Everything you need
            </h2>
            <p className="mt-2 text-2xl md:text-3xl font-medium tracking-tight text-gray-900">
              Moving Services
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Among all of {city.shortName}, {city.state} moving companies there
              is good reputable movers and shall we say. Phoenix Moving is fully
              Licensed and Insured moving company with great reputation and
              affordable rates. So if you are planning to move in{' '}
              {city.shortName} you can consider Phoenix Moving as your{' '}
              {city.shortName} Movers.
            </p>
          </div>
          <div className="mt-20 lg:col-span-2 lg:mt-0">
            <dl className="grid grid-cols-1 gap-12 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <CheckIcon
                      className="absolute mt-1 h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    <p className="ml-10 text-lg font-medium leading-8 text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  {/* <dd className="mt-2 ml-10 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd> */}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
