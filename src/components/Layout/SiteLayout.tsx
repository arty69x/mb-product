import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container mx-auto px-4">{children}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
