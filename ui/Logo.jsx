import Link from 'next/link';
import Image from 'next/image';

const Logo = ({ invert = true, width = 150, height = 150 }) => {
  return (
    <Link href="/" title="Phoenix Moving">
      <span className="sr-only">Phoenix Moving Boston</span>
      <Image
        src={invert ? '/logos/logo.png' : '/logos/logo-white.png'}
        alt="Phoenix Moving Logo"
        width={width}
        height={height}
        priority
        className="h-8 w-auto sm:h-10"
        title="Phoenix Moving Boston"
      />
    </Link>
  );
};

export default Logo;
