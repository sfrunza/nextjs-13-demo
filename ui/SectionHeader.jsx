import clsx from 'clsx';

const SectionHeader = ({
  titleClassName,
  subtitleClassName,
  title,
  subtitle,
  start,
}) => {
  return (
    <div
      className={
        start ? 'mb-8' : 'mx-auto max-w-3xl text-center mb-16 sm:mb-20'
      }
    >
      <h2
        className={clsx(
          'text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900',
          titleClassName
        )}
      >
        {title}
      </h2>
      <p
        className={clsx(
          'mt-2 text-md sm:text-lg text-gray-700',
          subtitleClassName
        )}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
