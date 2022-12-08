import Image from 'next/image';

export default function Hero({ image, title, children }) {
  return (
    <section className="relative">
      {/* <div className="mx-auto w-full"> */}
      <div className="relative sm:overflow-hidden min-h-[600px] flex justify-center items-center">
        {/* <div className="absolute inset-0 min-h-[600px]"> */}
        <Image
          src={image}
          alt={title}
          className="object-cover"
          fill
          priority
          title={title}
        />
        <div className="absolute inset-0 bg-gray-900/30 mix-blend-multiply" />
        {/* </div> */}
        {title && (
          // <div className="relative">
          <h1 className="relative text-center text-white block text-2xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h1>
          // </div>
        )}
        {children}
      </div>
      {/* </div> */}
    </section>
  );
}
