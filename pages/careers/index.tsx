import Link from 'next/link';
import { SiteLayout } from '@/src/components/Layout/SiteLayout';
import { FormPage } from '@/src/components/UI/Templates';

const roles = [
  { slug: 'client-advisor', title: 'Client Advisor' },
  { slug: 'content-editor', title: 'Content Editor' }
];

export default function CareersIndexPage() {
  return (
    <SiteLayout>
      <main>
        <FormPage title="Careers">
          <ul className="mb-6 space-y-3">
            {roles.map((role) => (
              <li key={role.slug}><Link href={`/careers/${role.slug}`} className="border-b">{role.title}</Link></li>
            ))}
          </ul>
          <form className="space-y-4"><input className="w-full border p-3" placeholder="Full name" /><input className="w-full border p-3" placeholder="Email" /><button className="bg-black px-6 py-3 text-white">Submit Application</button></form>
        </FormPage>
      </main>
    </SiteLayout>
  );
}
