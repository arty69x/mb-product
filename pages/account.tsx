import SiteLayout from '@/src/components/Layout/SiteLayout';

const sections = ['Orders', 'Profile', 'Addresses', 'Wishlist'];

export default function AccountPage() {
  return (
    <SiteLayout>
      <section className="py-8">
        <h1 className="mb-6 text-3xl font-semibold">Account</h1>
        <div className="grid gap-4 md:grid-cols-2">
          {sections.map((section) => <div key={section} className="rounded-md border border-borderLight p-4">{section}</div>)}
        </div>
      </section>
    </SiteLayout>
  );
}
