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
import Button from '@/ui/Button';

export default function CTA() {
  return (
    <section aria-label="boston-moving-call-to-action">
      <div className="relative py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 rounded-2xl">
          <div className="relative overflow-hidden bg-palette-primary-900 rounded-2xl px-6 py-10 sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            >
              <svg
                className="absolute inset-0 h-full w-full rounded-2xl"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-palette-primary-500 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-palette-primary-500 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
                  Get a Moving Quote for your Local Move!
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-white">
                No credit card required
                </p>
              </div>
              <div className="mt-8 flex justify-center">
                <Button
                  href="#"
                  size="large"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Request Your Move Online
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section
    //   id="get-free-shares-today"
    //   className="relative overflow-hidden bg-palette-primary-900 py-20 sm:py-28"
    // >
    //   <div className="absolute top-1/2 left-0 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
    //     <CircleBackground
    //       color="#fff"
    //       className="animate-spin-slower"
    //       width={400}
    //     />
    //   </div>
    //   <Container className="relative">
    //     <div className="mx-auto max-w-md text-center">
    //       <h2 className="text-xl font-medium tracking-tight text-white sm:text-2xl uppercase">
    //         Get a Moving Quote for your Local Move!
    //       </h2>
    //       <p className="mt-4 text-lg text-gray-300 uppercase">
    //         Get a Moving Quote for your Local Move!
    //       </p>
    //       <div className="mt-8 flex justify-center">
    //         {/* <AppStoreLink color="white" /> */}
    //         <a
    //           href="#"
    //           className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
    //         >
    //           Request Your Move Online
    //         </a>
    //       </div>
    //     </div>
    //   </Container>
    // </section>
  );
}
