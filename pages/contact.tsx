import { Layout } from '@/components/Layout/Layout';

export default function ContactPage() {
  return (
    <Layout>
      <section className="py-10">
        <h1 className="mb-6 text-4xl">Contact</h1>
        <form className="grid max-w-2xl gap-4">
          <input placeholder="Name" className="border p-3" />
          <input placeholder="Email" className="border p-3" />
          <textarea placeholder="Message" className="border p-3" rows={5} />
          <button className="w-fit border px-6 py-3 hover:bg-black hover:text-white">Send</button>
        </form>
      </section>
    </Layout>
  );
}
