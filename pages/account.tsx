import { Layout } from '@/components/Layout/Layout';

export default function AccountPage() {
  return (
    <Layout>
      <section className="py-10">
        <h1 className="mb-6 text-4xl">Account</h1>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border p-6"><h2 className="mb-2 text-2xl">Profile</h2><p className="text-sm text-[#666666]">Manage your personal details and addresses.</p></div>
          <div className="border p-6"><h2 className="mb-2 text-2xl">Orders</h2><p className="text-sm text-[#666666]">Track your latest purchases and returns.</p></div>
        </div>
      </section>
    </Layout>
  );
}
