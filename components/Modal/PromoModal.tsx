type PromoModalProps = { onClose: () => void };

export function PromoModal({ onClose }: PromoModalProps) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
      <div className="grid w-full max-w-3xl bg-white md:grid-cols-2">
        <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000" alt="Promo" className="h-full w-full object-cover" />
        <div className="space-y-4 p-8">
          <h3 className="text-2xl">Get 10% off your first order</h3>
          <p className="text-sm text-[#666666]">Join our newsletter and claim your exclusive offer.</p>
          <button className="w-full border px-4 py-3 hover:bg-black hover:text-white">Claim Offer</button>
          <button onClick={onClose} className="text-sm underline">No thanks</button>
        </div>
      </div>
    </div>
  );
}
