import Link from 'next/link';
import Container from '@/ui/Container';
import Map from './Map';

const stats = [
  { label: 'Reliable', value: '100%' },
  { label: 'Satisfaction', value: '24/7' },
  { label: 'Guaranteed Price', value: '100%' },
  { label: 'Legit', value: '100%' },
];

export default function Info() {
  return (
    <section
      aria-label="interstate-moving-information"
      className="py-20 sm:py-32"
    >
      <Container className="overflow-hidden">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative py-0">
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0">
              <div className="relative overflow-hidden rounded-2xl lg:pt-24">
                <Map />
              </div>
              <div className="pb-10 text-sm text-gray-500">
                <p className="flex items-center">
                  <span className="h-[10px] w-[10px] bg-[#00d866] mr-2" />
                  same/next day delivery
                </p>
                <p className="flex items-center">
                  <span className="h-[10px] w-[10px] bg-[#cddc39] mr-2" />
                  1-2 days delivery
                </p>
                <p className="flex items-center">
                  <span className="h-[10px] w-[10px] bg-[#ffc107] mr-2" />
                  2+ days delivery
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-900">
              Long Distance Interstate Moving
            </h2>
            <div className="mt-6 space-y-6 text-md text-gray-500">
              <p>
                Moving across the state? Across the country? We'll get you
                there! Phoenix Moving here to help with a variety of
                long-distance services that can take the stress out of your next
                move. With our long-distance moves, you can expect a quick
                delivery time to your new home, often times with the same movers
                who moved the belongings out of your home.
              </p>
              <p>
                Unlike other long-distance carriers who cannot guarantee arrival
                times, we provide you with an exact date for arrival at your new
                location which means you can settle into your new home sooner,
                rather than later.
              </p>
            </div>

            {/* Stats section */}
            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-t-2 border-gray-100 pt-6"
                  >
                    <dt className="text-base font-medium text-gray-500">
                      {stat.label}
                    </dt>
                    <dd className="text-3xl font-bold tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <Link
                  href="/pricing"
                  className="text-base font-medium text-indigo-600"
                >
                  View Pricing Plans
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
