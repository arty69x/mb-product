import SiteLayout from '@/src/components/Layout/SiteLayout';
import Input from '@/src/components/UI/Input';
import Button from '@/src/components/UI/Button';

export default function CheckoutPage() {
  return (
    <SiteLayout>
      <section className="py-8">
        <h1 className="mb-6 text-3xl font-semibold">Checkout</h1>
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-7">
            <h2 className="text-xl font-semibold">Shipping form</h2>
            <Input aria-label="Full name" placeholder="Full name" />
            <Input aria-label="Address" placeholder="Address" />
            <Input aria-label="City" placeholder="City" />
            <h2 className="pt-4 text-xl font-semibold">Payment section</h2>
            <Input aria-label="Card number" placeholder="Card number" />
            <Button aria-label="Place order">Place order</Button>
          </div>
          <div className="rounded-md border border-borderLight p-4 lg:col-span-5">Order summary</div>
        </div>
      </section>
    </SiteLayout>
  );
}
