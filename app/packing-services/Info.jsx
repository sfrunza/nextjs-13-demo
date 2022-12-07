import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';
import Image from 'next/image';

export default function Info() {
  return (
    <Section>
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Packing and Unpacking Services" start />
        <div className="relative z-10 mx-auto max-w-prose lg:mx-0 lg:max-w-5xl lg:pr-72">
          <p className="text-gray-500">
            Packing and unpacking can be the most tiresome part of moving. We
            offer top-notch packing services to reduce the stress of moving. Our
            packing services are based on the same hourly rates as moving plus
            cost of packing supplies. If you'd like us to do all, or part of
            your packing and/or unpacking, please let us know well in advance,
            since there is a high demand for our packing crews.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
          <div className="relative z-10">
            <div className="prose prose-indigo mx-auto text-gray-500 lg:max-w-none">
              <h3>Full Packing Service</h3>
              <p>
                Should you hire a full service crew? This is a decision you need
                to make based on time versus cost. A packing service could add a
                couple thousand dollars to your moving budget. However, if you
                need to take two weeks off of work in order to get the house
                packed and organized, it may be worth the price. Most of the
                time, we can pack your home in one day. This saves not only
                time, but the hassle of living with -and out of- boxes.
              </p>
              <h3>Packing Specialty Items</h3>
              <p>
                If you are on a budget or you want to lower the cost of your
                move, we offer packing of specialty items, particularly fragile
                only: kitchen, artwork, mirrors or other breakables or
                valuables. You can also inquire about our crating services for
                extra valuable items.
              </p>
              <h3>Self Packing</h3>
              <p>
                If you choose to pack yourself, we offer boxes delivery starting
                at $35.00 in the Greater Boston area when you move with Phoenix
                Moving, one week notice required. You pay only for the boxes you
                use, and we will collect any unused boxes on the day of your
                move. Dont't know how many boxes you need for your move size?
                Check our PACKAGES.
              </p>
            </div>
          </div>
          <div className="relative mx-auto mt-12 max-w-prose lg:mt-0 mb-7 lg:mb-0 w-full lg:w-[80%] h-[25rem] lg:h-[70%]">
            <Image
              src="/two-movers-packing-kitchen.jpeg"
              alt="Two movers packing dishes"
              className="rounded-2xl bg-white shadow-lg rotate-2 object-cover"
              title="Full Packing Services"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
