import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';

export default function Advantages({ city }) {
  return (
    <Section label={city.fullName}>
      <SectionHeader
        title={`Advantages of Living in ${city.shortName}, ${city.state}`}
        start
      />
      <div className="prose prose-lg prose-indigo text-gray-500 lg:max-w-none">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </Section>
  );
}
