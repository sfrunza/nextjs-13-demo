export default function CallToAction() {
  return (
    <section aria-label="boston-moving-call-to-action">
      <div className="relative py-10 sm:py-16 bg-palette-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 rounded-2xl">
          <div className="relative overflow-hidden bg-palette-primary-900 rounded-2xl px-6 py-10 sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            >
              <svg
                className="absolute inset-0 h-full w-full"
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
                  Have a moving need?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-white">
                  Contact us for a free consultation
                </p>
              </div>
              <div className="mt-8 flex justify-center">
                <a
                  href="tel:(508) 315-9458"
                  className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  +1 (508) 315-9458
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
