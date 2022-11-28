import clsx from 'clsx';
import Container from '@/ui/Container';

const Section = ({ label, className, children, ...props }) => {
  return (
    <section
      aria-labelledby={label}
      className={clsx('py-20 sm:py-32 relative overflow-hidden', className)}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
