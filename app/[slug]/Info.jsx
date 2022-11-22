import Container from '@/ui/Container';
import Link from 'next/link';

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export default function Info({ city }) {
  return (
    <section>
      <Container className="overflow-hidden py-16">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-base lg:max-w-none">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
              Fast, Reliable, and Affordable {city.fullName}
            </h2>
          </div>
          <div className="relative z-10 mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72">
            <p className="text-lg text-gray-500">
              <b>Phoenix Moving</b> team is covering end-to-end moving and
              storage services in <b>{`${city.shortName}, ${city.state}`}</b>{' '}
              and entire state of Massachusetts.
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
            <div className="relative z-10">
              <div className="prose prose-indigo mx-auto text-gray-500 lg:max-w-none">
                <p>
                  This is possible by hiring a reputable and trusted{' '}
                  <b>{`${city.shortName} Moving Company`}</b> that provides
                  residential and commercial moving services, small/large office
                  moves, packing services, storage solutions and more. We also
                  offer express interstate moving solutions:
                </p>
                <ul role="list">
                  <li>Quis elit egestas venenatis mattis dignissim.</li>
                  <li>
                    Cras cras lobortis vitae vivamus ultricies facilisis tempus.
                  </li>
                  <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                </ul>
                <p>
                  We provide and manage moving solutions for thousands of
                  customers every year - from the small move to the large
                  relocations. Moving to/from{' '}
                  <b>{`${city.shortName}, ${city.state}`}</b> must be easy and
                  stress free, convenient and safe!
                </p>
              </div>
              <div className="mx-auto mt-10 flex max-w-prose text-base lg:max-w-none">
                <div className="rounded-md shadow">
                  <Link
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                    title={`${city.fullName} Free Quote`}
                  >
                    Get a Quote
                  </Link>
                </div>
                <div className="ml-4 rounded-md shadow">
                  <Link
                    href="/pricing"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50"
                    title={`${city.fullName} Rates`}
                  >
                    View Rates
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative mx-auto mt-12 max-w-prose text-base lg:mt-0 lg:max-w-none">
              <img
                src={city.icon}
                alt={`${city.shortName} ${city.state} image`}
                className="h-[100%] m-auto"
                title={`Boston to ${city.fullName}`}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
