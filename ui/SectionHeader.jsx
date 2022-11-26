function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const SectionHeader = ({
  titleClassName,
  subtitleClassName,
  title,
  subtitle,
}) => {
  return (
    <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
      <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-900">
        {title}
      </h2>
      <p className="mt-2 text-md sm:text-lg text-gray-700">{subtitle}</p>
    </div>
    // <div className="max-w-2xl m-auto text-center mb-12 sm:mb-16">
    //   <h2
    //     className={classNames(
    //       'text-2xl sm:text-3xl font-medium tracking-tight text-gray-900 sm:text-center',
    //       titleClassName
    //     )}
    //   >
    //     {title}
    //   </h2>
    //   <p
    //     className={classNames(
    //       'mt-2.5 text-lg text-gray-500',
    //       subtitleClassName
    //     )}
    //   >
    //     {subtitle}
    //   </p>
    // </div>
  );
};

export default SectionHeader;
