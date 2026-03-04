import { useState } from 'react';
import { Heart } from 'lucide-react';

export default function WishlistButton({ className = '' }: { className?: string }) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <button
      aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
      title={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setWishlisted(!wishlisted);
      }}
      className={`flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primaryText ${className}`}
    >
      <Heart
        size={18}
        strokeWidth={1.5}
        className={wishlisted ? 'fill-accent text-accent' : 'text-secondaryText hover:text-primaryText'}
      />
    </button>
  );
}
