export default function Pagination() {
  return (
    <nav aria-label="Pagination" className="mt-8 flex gap-2">
      <button className="rounded border border-borderLight px-3 py-1 text-sm hover:border-accent focus-visible:ring-2 focus-visible:ring-accent">1</button>
      <button className="rounded border border-borderLight px-3 py-1 text-sm hover:border-accent focus-visible:ring-2 focus-visible:ring-accent">2</button>
    </nav>
  );
}
