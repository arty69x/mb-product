import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | MB brandname</title>
        <meta
          name="description"
          content="100% Authentic Branded Items from Japan. Carefully selected and imported directly from Japan."
        />
      </Head>

      {/* Hero Banner */}
      <section className="relative flex h-64 items-center justify-center overflow-hidden bg-black sm:h-80">
        <Image
          src="/assets/mb/v1/ref/product-1.svg"
          alt="About MB brandname"
          fill
          className="object-cover opacity-40"
        />
        <h1
          className="relative z-10 text-center text-3xl uppercase tracking-[0.3em] text-white sm:text-4xl lg:text-5xl"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          About Us
        </h1>
      </section>

      {/* Mission Statement */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="mb-6 text-xl font-bold uppercase tracking-[0.2em] sm:text-2xl"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            100% Authentic Branded Items from Japan
          </h2>
          <p className="mx-auto max-w-2xl text-xs uppercase leading-relaxed tracking-widest text-secondaryText">
            Carefully selected and imported directly from Japan. With over 10 years of experience in
            authentic secondhand branded goods, we guarantee genuine quality. Each item is thoroughly
            inspected before delivery.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="border-t border-borderLight py-16 lg:py-24">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/assets/mb/v1/ref/product-2.svg"
              alt="Our curated collection"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3
              className="mb-6 text-2xl sm:text-3xl"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Our Story
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-secondaryText">
              Founded with a passion for authentic luxury, MB brandname bridges the gap between
              Japanese craftsmanship in pre-owned luxury goods and discerning customers worldwide.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-secondaryText">
              Every piece in our collection has been hand-selected by our team of experts who
              travel across Japan, visiting trusted dealers and auction houses to find the most
              exceptional items. From iconic Chanel bags to rare vintage accessories, each product
              tells its own story.
            </p>
            <p className="text-sm leading-relaxed text-secondaryText">
              Our rigorous authentication process ensures that every item we offer is 100%
              genuine. We believe that true luxury should be accessible, sustainable, and backed
              by trust.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sectionBg py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h3
            className="mb-12 text-center text-2xl uppercase tracking-[0.15em] sm:text-3xl"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Why Choose Us
          </h3>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-widest">
                Authenticity Guaranteed
              </h4>
              <p className="text-xs leading-relaxed text-secondaryText">
                Every item is verified by our team of authentication experts using industry-leading
                standards.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-widest">
                Direct from Japan
              </h4>
              <p className="text-xs leading-relaxed text-secondaryText">
                Sourced directly from trusted Japanese dealers and auction houses, shipped worldwide
                with care.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-widest">
                Sustainable Luxury
              </h4>
              <p className="text-xs leading-relaxed text-secondaryText">
                Give pre-loved luxury a second life. Our commitment to sustainability means
                beautiful pieces that are kinder to the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h3
            className="mb-4 text-2xl sm:text-3xl"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Discover Our Collection
          </h3>
          <p className="mx-auto mb-8 max-w-md text-sm text-secondaryText">
            Browse our carefully curated selection of authentic branded items, imported directly
            from Japan.
          </p>
          <Link
            href="/new-arrivals"
            className="inline-block border border-primaryText bg-primaryText px-8 py-3 text-xs uppercase tracking-widest text-white transition-colors hover:bg-transparent hover:text-primaryText"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </>
  );
}
