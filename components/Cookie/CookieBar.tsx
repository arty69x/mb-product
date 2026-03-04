type CookieBarProps = { onAcceptAll: () => void; onPersonalize: () => void };

export function CookieBar({ onAcceptAll, onPersonalize }: CookieBarProps) {
  return (
    <div className="fixed bottom-0 left-0 z-40 w-full border-t bg-white p-4">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 md:flex-row">
        <p className="text-sm">We use cookies to personalize your shopping experience.</p>
        <div className="flex gap-3">
          <button onClick={onPersonalize} className="border px-4 py-2">Personalize</button>
          <button onClick={onAcceptAll} className="border px-4 py-2 hover:bg-black hover:text-white">Accept All</button>
        </div>
      </div>
    </div>
  );
}
