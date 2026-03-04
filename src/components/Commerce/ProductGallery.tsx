import { useState } from 'react';
import Image from 'next/image';

export default function ProductGallery({ images, title }: { images: string[]; title: string }) {
  const safeImages = Array.isArray(images) ? images : [];
  const [active, setActive] = useState(0);
  if (safeImages.length === 0) return <p className="text-secondaryText">No images available.</p>;
  return (
    <div>
      <div className="relative mb-4 aspect-square overflow-hidden rounded-md">
        <Image src={safeImages[active] ?? ''} alt={title} fill className="object-cover" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {safeImages.map((img, idx) => (
          <button key={img} onClick={() => setActive(idx)} aria-label={`Select image ${idx + 1}`} className="relative aspect-square overflow-hidden rounded border border-borderLight focus-visible:ring-2 focus-visible:ring-accent">
            <Image src={img} alt={`${title} thumbnail ${idx + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
