import Image from 'next/image';
import Section from '@/ui/Section';
import Book from '@/ui/Book';

export async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_API}/rates`, {
    cache: 'no-store',
  });
  return res.json();
}

export default async function Hero({ image, title, children }) {
  const rates = await getData();
  return (
    <section className="relative">
      {/* <div className="mx-auto w-full"> */}
      <div className="relative sm:overflow-hidden min-h-[700px] flex">
        {/* <div className="absolute inset-0 min-h-[600px]"> */}
        <Image
          src={image}
          alt={title}
          className="object-cover"
          fill
          priority
          title={title}
        />
        <div className="absolute inset-0 bg-gray-900/40 mix-blend-multiply" />

        {/* <div className="flex gap-6 flex-col-reverse md:flex-row justify-between items-center mx-auto max-w-7xl sm:px-6 lg:px-8"> */}
        {/* <Section className="w-full"> */}
        <section className="pb-6 pt-20 sm:pb-10 sm:pt-32 relative overflow-hidden w-full flex">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-1 flex flex-col-reverse lg:flex-row items-center">
            <Book rates={rates} />
            {/* </div> */}
            {title && (
              <div className="flex-1 flex items-center justify-center flex-col">
                <h1 className="relative text-center text-white block text-2xl font-semibold sm:text-4xl">
                  {title}
                </h1>
                <p className="relative text-center text-gray-300 tracking-[0.3em] font-semibold mt-2">
                  Make Moving Chill
                </p>
              </div>
            )}
          </div>
        </section>
        {/* </Section> */}
        {/* </div> */}
      </div>
      {/* </div> */}
    </section>
  );
}
