import Link from 'next/link';
import clsx from 'clsx';

export default function NavLink({ label, href, invert }) {
  return (
    <Link
      href={href}
      className={clsx(
        'text-base font-medium hover:text-palette-secondary-500 transition-all duration-150 ease-in',
        {
          'text-gray-900': invert,
          'text-white': !invert,
        }
      )}
      title={label}
    >
      {label}
    </Link>
  );
}
