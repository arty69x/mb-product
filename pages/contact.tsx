import SiteLayout from '@/src/components/Layout/SiteLayout';
import Input from '@/src/components/UI/Input';
import Button from '@/src/components/UI/Button';

export default function ContactPage() {
  return (
    <SiteLayout>
      <section className="py-8">
        <h1 className="mb-6 text-3xl font-semibold">Contact</h1>
        <div className="max-w-xl space-y-3">
          <Input aria-label="Name" placeholder="Name" />
          <Input aria-label="Email" placeholder="Email" type="email" />
          <Input aria-label="Message" placeholder="Message" />
          <Button aria-label="Send message">Send</Button>
        </div>
      </section>
    </SiteLayout>
  );
}
