import clsx from 'clsx';

const Section = ({ className, ...props }) => {
  return <section className={clsx('py-20 sm:py-32', className)} {...props} />;
};

export default Section;
