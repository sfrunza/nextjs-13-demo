import { states } from '@/lib/statesData';
import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Locations() {
  return (
    <Section label="long-distance-locations">
      <SectionHeader title="All Long Distance Moving destinations from Boston" />
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
      >
        {states.map((state) => (
          <li
            key={state.name}
            className="col-span-1 flex rounded-2xl shadow-sm"
          >
            <div
              className={classNames(
                'bg-gray-600',
                'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-2xl'
              )}
            >
              {state.abbr}
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-2xl border-t border-r border-b border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm flex-col flex">
                {state.slug ? (
                  <a
                    href={state.slug}
                    className="font-medium text-gray-900 hover:text-gray-600"
                  >
                    {state.name}
                  </a>
                ) : (
                  <p className="font-medium text-gray-900">{state.name}</p>
                )}
                {state.cities?.map((city) => {
                  return (
                    <a
                      key={city.name}
                      href={city.slug}
                      className="font-small text-gray-500 hover:text-gray-600"
                      title={`Moving From Boston to ${city.name}`}
                    >
                      Moving From Boston to {city.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
