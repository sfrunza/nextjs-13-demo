export default function CallToAction() {
  return (
    <section className="bg-[#f2e7ff]">
      <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-12 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl text-center">
          <span className="block">Contact us Now</span>
          <span className="block text-palette-primary-500 text-lg md:text-xl font-medium">
            Talk to our team to book your move
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 justify-center">
          <div className="inline-flex">
            <a
              href="tel:+1(508) 315-9458"
              className="text-xl font-bold tracking-tight text-palette-primary-500 md:text-2xl hover:underline"
            >
              +1 (508) 315-9458
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}