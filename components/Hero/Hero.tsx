export function Hero() {
  return (
    <section className="grid h-[600px] grid-cols-1 gap-4 py-6 md:grid-cols-2">
      <div className="grid grid-cols-2 gap-4">
        <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=900" alt="Luxury model 1" />
        <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1465406325903-9d93ee82f613?q=80&w=900" alt="Luxury model 2" />
      </div>
      <div className="relative">
        <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200" alt="Hero banner" />
        <div className="absolute inset-0 flex items-end bg-black/30 p-8 text-white">
          <h1 className="text-4xl font-semibold md:text-5xl">NO.1 Luxury Brandname</h1>
        </div>
      </div>
    </section>
  );
}
