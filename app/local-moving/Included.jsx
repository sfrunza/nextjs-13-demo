import { CheckIcon } from '@heroicons/react/24/outline';
import Container from '@/ui/Container';

const localMoving = [
  {
    name: 'Residential',
  },
  {
    name: 'Commercial',
  },

  {
    name: 'Storage',
  },
  {
    name: 'Loading',
  },

  {
    name: 'Unloading',
  },
  {
    name: 'Inside help',
  },
  {
    name: 'Assembly furniture',
  },
  {
    name: 'Disassembly furniture',
  },
];

export default function Included() {
  return (
    <div className="bg-palette-background">
      <Container>
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 py-10 px-6 lg:px-8">
          {localMoving.map((feature) => (
            <div
              key={feature.name}
              className="relative flex items-center justify-start"
            >
              <dt>
                <CheckIcon
                  className="absolute h-6 w-6 text-green-500"
                  aria-hidden="true"
                />
                <p className="ml-9 text-md font-semibold leading-6 text-gray-900">
                  {feature.name}
                </p>
              </dt>
              {/* <dd className="mt-2 ml-9 text-base text-gray-500">
                  {feature.description}
                </dd> */}
            </div>
          ))}
        </dl>
      </Container>
    </div>
  );
}
