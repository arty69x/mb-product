type CookieModalProps = { onClose: () => void; onAcceptAll: () => void };

export function CookieModal({ onClose, onAcceptAll }: CookieModalProps) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4">
      <div className="w-full max-w-lg bg-white p-6">
        <h3 className="mb-4 text-xl">Cookie Settings</h3>
        {['Strict Necessary', 'Performance', 'Advertising'].map((section) => (
          <div key={section} className="mb-3 flex items-center justify-between border-b py-2">
            <p>{section}</p><input type="checkbox" aria-label={section} defaultChecked={section === 'Strict Necessary'} />
          </div>
        ))}
        <div className="mt-5 flex gap-3">
          <button onClick={onClose} className="border px-4 py-2">Close</button>
          <button onClick={onAcceptAll} className="border px-4 py-2 hover:bg-black hover:text-white">Accept All</button>
        </div>
      </div>
    </div>
  );
}
