import Button from '@/ui/Button';
import Container from '@/ui/Container';

export default function CallToAction() {
  return (
    <section
      aria-label="boston-moving-call-to-action"
      className="py-10 sm:py-16 bg-palette-background"
    >
      <Container className="justify-center">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl text-center">
          <span className="block">Have a moving need?</span>
          <span className="block text-palette-primary-500">
            Contact us for a free consultation
          </span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <Button
              href="tel:(508) 315-9458"
              size="large"
              variant="solid"
              color="primary"
              className="w-full sm:w-auto"
            >
              +1 (508) 315-9458
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
