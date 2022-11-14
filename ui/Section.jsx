import clsx from 'clsx';

const Section = ({ className, children }) => {
  return (
    <section
      className={clsx(
        'bg-white mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
