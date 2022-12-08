import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';

export default function Advantages({ city }) {
  return (
    <Section>
      <SectionHeader
        title={`Advantages of Living in ${city.name}, ${city.state}`}
        start
      />
      <div className="prose prose-lg prose-indigo text-gray-700 lg:max-w-none">
        <p>{city.description}</p>
      </div>
    </Section>
  );
}
