import SectionHeader from '@/ui/SectionHeader';
import Container from '@/ui/Container';
import clsx from 'clsx';

export async function getData() {
  const res = await fetch(
    'https://phoenixmoving-app.herokuapp.com/api/v1/prices'
  );
  return res.json();
}

export default async function PricingTable() {
  const prices = await getData();

  const tiers = ['Discounted Rates', 'Regular Rates', 'Peak Season Rates'];
  const data = [
    {
      crew: '2 Movers & truck',
      //   prices: [123, 345, 567],
      prices: prices[0].two_men,
    },
    {
      crew: '3 Movers & truck',
      prices: prices[0].three_men,
    },
    {
      crew: '4 Movers & truck',
      prices: prices[0].four_men,
    },
    {
      crew: 'Additional mover',
      prices: prices[0].add_men,
    },
    {
      crew: 'Additional truck',
      prices: prices[0].add_truck,
    },
  ];

  return (
    <section
      aria-label="pricing-table"
      className="py-20 sm:py-32 bg-palette-background"
    >
      <Container>
        <SectionHeader
          title="Phoenix Moving Rates"
          subtitle={
            <>
              Our local moving and packing rates are hourly based with 15
              minutes increment and a <b>2 hours minimum</b> charge policy, in
              case your move takes less then 2 hours.
            </>
          }
        />
        {/* lg+ */}
        <div className="hidden lg:block">
          <table className="h-px w-full table-fixed">
            <caption className="sr-only">Pricing plan comparison</caption>
            <thead>
              <tr>
                <th
                  className="px-6 pb-4 text-left text-sm font-medium text-gray-900"
                  scope="col"
                >
                  <span className="sr-only">Prices</span>
                </th>
                {tiers.map((tier, i) => (
                  <th
                    key={tier}
                    className={clsx(
                      'w-1/4 px-6 pb-4 text-left text-lg font-medium leading-6 text-gray-900',
                      {
                        'text-palette-cyan': i === 0,
                        'text-palette-blue': i === 1,
                        'text-palette-pink': i === 2,
                      }
                    )}
                    scope="col"
                  >
                    {tier}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 border-t border-gray-200">
              {data.map((row) => {
                return (
                  <tr>
                    <th
                      className="py-8 px-6 text-left align-top text-md font-medium text-gray-900"
                      scope="row"
                    >
                      {row.crew}
                    </th>
                    {row.prices?.map((price, i) => (
                      <td key={i} className="h-full py-8 px-6 align-top">
                        <div className="relative table h-full">
                          <p>
                            <span className="text-2xl font-semibold tracking-tight text-gray-900">
                              ${price}
                            </span>
                          </p>
                        </div>
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
