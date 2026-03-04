import { Layout } from '@/components/Layout/Layout';

export default function CheckoutPage() {
  return (
    <Layout>
      <section className="py-10">
        <h1 className="mb-6 text-4xl">Checkout</h1>
        <form className="grid gap-4 md:grid-cols-2">
          {['First Name', 'Last Name', 'Email', 'Phone', 'Address', 'City', 'Zip Code', 'Country'].map((field) => (
            <label key={field} className="grid gap-2 text-sm">{field}<input className="border p-2" /></label>
          ))}
          <button className="md:col-span-2 w-fit border px-6 py-3 hover:bg-black hover:text-white">Place Order</button>
        </form>
      </section>
    </Layout>
  );
}
