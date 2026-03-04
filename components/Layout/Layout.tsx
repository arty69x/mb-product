import { ReactNode, useEffect, useState } from 'react';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { CookieBar } from '@/components/Cookie/CookieBar';
import { CookieModal } from '@/components/Cookie/CookieModal';
import { PromoModal } from '@/components/Modal/PromoModal';
import { MobileMenu } from '@/components/Modal/MobileMenu';

export function Layout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showCookieBar, setShowCookieBar] = useState(true);
  const [showCookieModal, setShowCookieModal] = useState(false);
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPromo(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <Header onOpenMobileMenu={() => setMobileOpen(true)} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <main className="container mx-auto px-4">{children}</main>
      <Footer />
      {showCookieBar && (
        <CookieBar
          onPersonalize={() => setShowCookieModal(true)}
          onAcceptAll={() => {
            setShowCookieBar(false);
            setShowCookieModal(false);
          }}
        />
      )}
      {showCookieModal && <CookieModal onClose={() => setShowCookieModal(false)} onAcceptAll={() => setShowCookieBar(false)} />}
      {showPromo && <PromoModal onClose={() => setShowPromo(false)} />}
    </div>
  );
}
