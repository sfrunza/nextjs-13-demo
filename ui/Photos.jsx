import clsx from 'clsx';
import Image from 'next/image';

export default function Photos() {
  let rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
  ];

  const getTitle = (str) => {
    str = str.slice(1, str.indexOf('.')).split('-').join(' ');
    return str;
  };

  return (
    <section aria-labelledby="phoenix-moving-in-action-images">
      <div className="-mb-10 relative z-[1] flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[
          '/mover-pushing-dolly.png',
          '/two-movers-and-tv.jpeg',
          '/two-movers-and-dresses.jpeg',
          '/two-movers-packing-kitchen.jpeg',
          '/movers-and-elliptical.jpeg',
        ].map((image, imageIndex) => (
          <div
            key={image}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-56 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              fill
              src={image}
              alt={getTitle(image)}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
              title={getTitle(image)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
