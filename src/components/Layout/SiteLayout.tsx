import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

type Props = { children: ReactNode };

export function SiteLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-[#efefef] text-[#111]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
