import { ReactNode } from 'react';

export default function Modal({ open, title, children }: { open: boolean; title: string; children: ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" role="dialog" aria-label={title}>
      <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-xl">{children}</div>
    </div>
  );
}
