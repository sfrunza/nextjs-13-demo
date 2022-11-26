import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import Container from '@/ui/Container';
import SectionHeader from '@/ui/SectionHeader';
import { states } from '@/lib/statesData';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Locations() {
  return (
    <section aria-label="long-distance-locations" className="py-20 sm:py-32">
      <Container className="overflow-hidden">
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
                  <a
                    href="#"
                    className="font-medium text-gray-900 hover:text-gray-600"
                  >
                    {state.name}
                  </a>
                  <a
                    href="#"
                    className="font-medium text-gray-500 hover:text-gray-600"
                  >
                    Moving From Boston to {state.capital}
                  </a>
                  {/* <p className="text-gray-500">{state.members} Members</p> */}
                </div>
                <div className="flex-shrink-0 pr-2">
                  <button
                    type="button"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">Open options</span>
                    <EllipsisVerticalIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
