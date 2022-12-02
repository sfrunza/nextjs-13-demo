'use client';
import { cities } from '@/lib/citiesData';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function PopularCities() {
  return (
    <Disclosure as="div" className="pt-6 border-b border-gray-700 w-full">
      {({ open }) => (
        <>
          <Disclosure.Button className="w-full pb-4">
            <p className="text-white text-xs font-semibold flex items-center justify-between w-full">
              Popular Cities
              <ChevronDownIcon
                className={classNames(
                  open ? '-rotate-180' : 'rotate-0',
                  'h-4 w-4 transform'
                )}
                aria-hidden="true"
              />
            </p>
          </Disclosure.Button>
          <Disclosure.Panel as="dd" className="mb-6">
            <div className="grid grid-cols-3 gap-1 md:grid-cols-6">
              {cities.map((city, i) => {
                return (
                  <div key={i} className="col-span-1 flex justify-start">
                    <a
                      href={`/${city.slug}`}
                      title={`${city.fullName} near me`}
                      className="hover:underline text-xs text-gray-400"
                    >
                      {city.fullName} near me
                    </a>
                  </div>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
