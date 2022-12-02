import Container from '@/ui/Container';
import Button from '@/ui/Button';

export default function Info({ city }) {
  return (
    <section aria-labelledby={`${city.fullName} Info`}>
      <Container className="overflow-hidden py-16">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-base lg:max-w-none">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 text-center">
              Fast, Reliable, and Affordable {city.fullName}
            </h2>
          </div>
          <div className="relative z-10 mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72">
            <p className="text-gray-500">
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
              <div className="mx-auto mt-10 flex max-w-prose text-base lg:max-w-none justify-between sm:justify-start">
                <Button href="#" size="large" color="primary">
                  Get a Quote
                </Button>
                <Button
                  href="/pricing"
                  size="large"
                  variant="soft"
                  className="ml-4"
                >
                  View Rates
                </Button>
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
