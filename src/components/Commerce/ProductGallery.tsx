import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function ProductGallery({ images, title }: { images: string[]; title: string }) {
  const safeImages = Array.isArray(images) ? images : [];
  const [active, setActive] = useState(0);

  if (safeImages.length === 0) {
    return <p className="text-sm text-secondaryText">No images available.</p>;
  }

  const prev = () => setActive((p) => (p - 1 + safeImages.length) % safeImages.length);
  const next = () => setActive((p) => (p + 1) % safeImages.length);

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      {/* Thumbnails - Left column on desktop */}
      <div className="order-2 flex gap-2 md:order-1 md:flex-col md:gap-3">
        {safeImages.map((img, idx) => (
          <button
            key={img}
            onClick={() => setActive(idx)}
            aria-label={`Select image ${idx + 1}`}
            className={`relative h-16 w-16 flex-shrink-0 overflow-hidden border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primaryText md:h-20 md:w-20 ${
              active === idx ? 'border-primaryText' : 'border-borderLight hover:border-secondaryText'
            }`}
          >
            <Image src={img} alt={`${title} thumbnail ${idx + 1}`} fill className="object-cover" sizes="80px" />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="order-1 flex-1 md:order-2">
        <div className="relative aspect-square overflow-hidden bg-surfaceLight">
          <Image
            src={safeImages[active] ?? ''}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primaryText shadow-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primaryText"
          >
            <ChevronLeft size={16} strokeWidth={1.5} />
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primaryText shadow-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primaryText"
          >
            <ChevronRight size={16} strokeWidth={1.5} />
          </button>

          {/* Zoom Icon */}
          <button
            aria-label="Zoom image"
            className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-primaryText shadow-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primaryText"
          >
            <Maximize2 size={14} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
