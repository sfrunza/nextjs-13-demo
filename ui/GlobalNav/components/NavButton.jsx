import clsx from 'clsx';
import { Popover } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavButton({ label, href, invert }) {
  return (
    <Popover.Button
      className={clsx(
        'group inline-flex items-center rounded-md  font-medium hover:text-palette-secondary-500 transition-all duration-150 ease-in',
        {
          'text-gray-900  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2':
            invert,
          'text-white  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2':
            !invert,
        }
      )}
    >
      <span>{label}</span>
      <ChevronDownIcon
        className={classNames(
          invert ? 'text-gray-900' : 'text-white',
          'ml-2 h-5 w-5 group-hover:text-palette-secondary-500 transition-all duration-150 ease-in'
        )}
        aria-hidden="true"
      />
    </Popover.Button>
  );
}
