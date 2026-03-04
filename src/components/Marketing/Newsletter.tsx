import Input from '@/src/components/UI/Input';
import Button from '@/src/components/UI/Button';

export default function Newsletter() {
  return (
    <section className="py-8">
      <div className="rounded-lg border border-borderLight p-6">
        <h3 className="mb-2 text-xl font-semibold">Newsletter</h3>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Input aria-label="Email address" placeholder="Enter email" />
          <Button aria-label="Subscribe">Subscribe</Button>
        </div>
      </div>
    </section>
  );
}
