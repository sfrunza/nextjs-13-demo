import Image from 'next/image';

export default function Hero({ image, title, children }) {
  return (
    <section className="relative">
      {/* <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" /> */}
      <div className="mx-auto w-full">
        <div className="relative sm:overflow-hidden min-h-[600px] flex justify-center items-center">
          <div className="absolute inset-0 min-h-[600px]">
            {/* <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                alt="People working on laptops"
              /> */}
            <Image
              src={image}
              alt="Bostom Moving Company"
              className="object-cover"
              fill
              priority
              title="Bostom Moving Company"
            />
            <div className="absolute inset-0 bg-gray-900/30 mix-blend-multiply" />
          </div>
          {title && (
            <div className="relative">
              <h1 className="text-center text-2xl font-bold tracking-tight sm:text-4xl">
                <span className="block text-white">{title}</span>
              </h1>
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
