import clsx from 'clsx';
import { Popover } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { AnimatePresence, motion } from 'framer-motion';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavButton({
  label,
  href,
  invert,
  index,
  hoveredIndex,
  setIndex,
}) {
  return (
    <Popover.Button
      className={clsx(
        'relative group inline-flex items-center -my-2 -mx-3 rounded-lg px-3 py-2 font-medium transition-colors duration-150 ease-in hover:delay-[0ms] focus:outline-none focus-visible:outline-none outline-none',
        {
          'text-gray-900': invert,
          'text-white': !invert,
        },
      )}
      onMouseEnter={() => setIndex(index)}
      onMouseLeave={() => setIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className={clsx('absolute inset-0 rounded-lg', {
              'bg-palette-background': invert,
              'bg-palette-background/20': !invert,
            })}
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{label}</span>
      <ChevronDownIcon
        className="ml-2 h-5 w-5 relative z-10"
        aria-hidden="true"
      />
    </Popover.Button>
  );
}
