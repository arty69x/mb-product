import { reviews } from '@/data/products';

export function ReviewList({ productId }: { productId: string }) {
  const filtered = reviews.filter((item) => item.productId === productId);
  return (
    <div className="space-y-4">
      {filtered.map((review) => (
        <article key={review.id} className="border p-4">
          <div className="mb-2 flex items-center gap-3">
            <img src={review.avatar} alt={`${review.name} avatar`} className="h-10 w-10 rounded-full" />
            <div>
              <p className="font-medium">{review.name}</p>
              <p className="text-xs text-[#666666]">{review.date} · {'★'.repeat(review.rating)}</p>
            </div>
          </div>
          <p className="text-sm">{review.text}</p>
        </article>
      ))}
    </div>
  );
}
