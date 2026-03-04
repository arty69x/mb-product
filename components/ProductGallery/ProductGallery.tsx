import { useState } from 'react';

export function ProductGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState(images[0]);
  return (
    <div>
      <img src={active} alt="Product image" className="mb-4 aspect-square w-full object-cover" />
      <div className="grid grid-cols-4 gap-3">
        {images.map((img) => (
          <button key={img} onClick={() => setActive(img)} className="overflow-hidden border">
            <img src={img} alt="Product thumbnail" className="aspect-square w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
