export default function AboutSection() {
  return (
    <section className="bg-muted py-12 lg:py-20" aria-label="About us">
      <div className="container mx-auto px-4 text-center">
        <h2
          className="mb-6 text-xl uppercase tracking-[0.15em] text-primaryText"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          About Us
        </h2>
        <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.1em] text-primaryText md:text-base">
          100% Authentic Branded Items From Japan
        </h3>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs uppercase leading-relaxed tracking-wider text-secondaryText md:text-sm">
            Carefully selected and imported directly from Japan.
          </p>
          <p className="mt-2 text-xs uppercase leading-relaxed tracking-wider text-secondaryText md:text-sm">
            With over 10 years of experience in authentic secondhand branded goods,
          </p>
          <p className="text-xs uppercase leading-relaxed tracking-wider text-secondaryText md:text-sm">
            we guarantee genuine quality. Each item is thoroughly inspected before delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
