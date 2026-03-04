const items = ['Premium Materials', 'Free Shipping', 'Gift Packaging', 'Secure Checkout'];

export default function FeatureIcons() {
  return (
    <section className="py-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item} className="rounded-md border border-borderLight p-4 text-sm text-primaryText">{item}</div>
        ))}
      </div>
    </section>
  );
}
