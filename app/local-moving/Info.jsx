import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';

export default function Info() {
  return (
    <Section label="boston-local-moving-information">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Boston Local Moving" start />
        <div className="relative z-10 mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72">
          <p className="text-md text-gray-500">
            <b>We are a local moving company in Boston, Massachusetts</b>. If
            you're looking for local movers in Boston MA, see if we operate in
            your area, and then contact us for a quote.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
          <div className="relative z-10">
            <div className="prose prose-indigo mx-auto text-gray-500 lg:max-w-none">
              <p>
                We service all the biggest and most popular locations in the
                area, including Boston, Newton, Natick, Brookline, Wellesley,
                Needham, Cambridge and other. We also perform local services in
                the entire Greater Boston area and throughout New England. If
                you're located somewhere along Interstate 95 in Massachusetts,
                your relocation needs are within our scope of service.
              </p>

              <ul role="list">
                <li>
                  <b>High-quality local moving services.</b>
                </li>
                <li>
                  <b>Furniture disassembling and assembling.</b>
                </li>
                <li>
                  <b>Attentiveness and respect for the client.</b>
                </li>
              </ul>
              <p>
                Since moving is a big part of their everyday lives, our Phoenix
                Movers are experienced in everything that comes along with the
                word relocation. Accurate quotes, on-time arrival,{' '}
                <b>professional packing techniques</b>, and qualified handling
                of moving equipment and materials — our workers are trained and
                equipped in the best possible way.
              </p>
              <h3>We're here to help</h3>
              <p>
                The cost of hiring a Boston local moving company is a loss only
                if you hire the wrong one. The quality and range of services
                provided must be considered when evaluating the
                cost-effectiveness of the investment. There's an entire laundry
                list of unexpected expenses that self-movers tend to forget when
                making their decisions not to seek professional help. Gas
                prices, tolls, rent and insurance pitfalls, accidents, injuries,
                delays — the list goes on. Choosing the wrong wrapping materials
                and covers can also lead to unforeseen damages and expenses.
                Without professional guidance, additional costs accrue almost
                every step of the way.
              </p>
            </div>
          </div>
          <div className="relative mx-auto mt-12 max-w-prose text-base lg:mt-0 lg:max-w-none mb-7 lg:mb-0">
            <img
              src="/local.jpeg"
              alt="Movers and customer in front of the house"
              className="relative rounded-2xl bg-white shadow-lg rotate-2"
              title="Boston Local Moving Company"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
