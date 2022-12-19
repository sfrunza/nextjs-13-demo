// import Link from 'next/link';
import clsx from 'clsx';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

export default function NavLink({
  label,
  href,
  invert,
  index,
  hoveredIndex,
  setIndex,
}) {
  return (
    <Link
      key={label}
      href={href}
      className={clsx(
        'relative -my-2 -mx-3 rounded-lg px-3 py-2 font-medium transition-colors duration-150 ease-in hover:delay-[0ms]',
        {
          'text-gray-900': invert,
          'text-white': !invert,
        }
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
    </Link>
  );
}
