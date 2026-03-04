import { useState } from 'react';
import { Eye } from 'lucide-react';

export default function AddToCart({ variant = 'overlay' }: { variant?: 'overlay' | 'full' }) {
  const [added, setAdded] = useState(false);

  if (variant === 'full') {
    return (
      <button
        aria-label="Add to cart"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setAdded(true);
          setTimeout(() => setAdded(false), 1500);
        }}
        className="w-full border border-primaryText bg-white px-4 py-2.5 text-xs uppercase tracking-widest text-primaryText transition-colors hover:bg-primaryText hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primaryText"
      >
        {added ? 'Added' : 'Add to Cart'}
      </button>
    );
  }

  return (
    <button
      aria-label="Quick view"
      title="Quick view"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition-colors hover:bg-primaryText hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primaryText"
    >
      <Eye size={14} strokeWidth={1.5} />
    </button>
  );
}
