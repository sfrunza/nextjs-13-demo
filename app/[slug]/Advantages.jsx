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
        <p>{city.description}</p>
      </div>
    </Section>
  );
}
