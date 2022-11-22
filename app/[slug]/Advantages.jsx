import Container from '@/ui/Container';

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export default function Advantages({ city }) {
  return (
    <section aria-label={city.fullName} className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-max lg:max-w-7xl">
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="max-w-prose text-base lg:max-w-none">
              <h2 className="mt-2 text-2xl md:text-3xl font-medium tracking-tight text-gray-900">
                Advantages of Living in {`${city.shortName}, ${city.state}`}
              </h2>
            </div>
          </div>
          <div className="relative">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden md:block md:[overflow-anchor:none]"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
              />
            </svg>
            <svg
              className="absolute bottom-0 left-0 -mb-20 -ml-20 hidden md:block md:[overflow-anchor:none]"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
              />
            </svg>
            <div className="relative md:bg-white md:p-6">
              <div className="prose prose-lg prose-indigo text-gray-500 lg:max-w-none">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                {/* <p>
                  Erat pellentesque dictumst ligula porttitor risus eget et
                  eget. Ultricies tellus felis id dignissim eget. Est augue{' '}
                  <a href="#">maecenas</a> risus nulla ultrices congue nunc
                  tortor. Eu leo risus porta integer suspendisse sed sit ligula
                  elit.
                </p>
                <ol role="list">
                  <li>
                    Integer varius imperdiet sed interdum felis cras in nec
                    nunc.
                  </li>
                  <li>
                    Quam malesuada odio ut sit egestas. Elementum at porta
                    vitae.
                  </li>
                </ol>
                <p>
                  Amet, eu nulla id molestie quis tortor. Auctor erat justo, sed
                  pellentesque scelerisque interdum blandit lectus. Nec viverra
                  amet ac facilisis vestibulum. Vestibulum purus nibh ac
                  ultricies congue.
                </p> */}
              </div>
              <div className="mt-8 inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Contact sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
