// import SectionHeader from '@/ui/SectionHeader';
// export default function CTA() {
//   return (
//     <section className="bg-palette-primary-500">
//       <div className="mx-auto max-w-4xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
//         <SectionHeader
//           title="We're here to help"
//           subtitle="Phoenix Moving Company is fully insured, experienced and committed to
//             getting the job done on budget and to a high standard."
//           titleClassName="text-6xl text-gray-50"
//           subtitleClassName="text-gray-50"
//         />
//         <a
//           href="#"
//           className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-palette-primary-500 hover:bg-indigo-50 sm:w-auto"
//         >
//           Request Your Move Online
//         </a>
//       </div>
//     </section>
//   );
// }

// import { AppStoreLink } from '@/components/AppStoreLink';
import CircleBackground from '@/ui/CircleBackground';
import Container from '@/ui/Container';

export default function CTA() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-palette-primary-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground
          color="#fff"
          className="animate-spin-slower"
          width={400}
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Get a Moving Quote for your Local Move!
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Our Professional movers make sure that everything is placed right
            where you want it at your new place.
          </p>
          <div className="mt-8 flex justify-center">
            {/* <AppStoreLink color="white" /> */}
            <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
            >
              Request Your Move Online
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
