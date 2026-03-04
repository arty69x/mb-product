import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const stories = [
  {
    image: '/assets/mb/v1/ref/hero-product.svg',
    heading: 'Each necklace has its own unique story to tell.',
    paragraphs: [
      'In the world of fashion, true luxury is not defined by price alone, but by the story behind each piece.',
      'This necklace was designed to embody timeless elegance. The gold-tone chain is meticulously crafted, gleaming under the light like a treasure from a classic era that still feels modern today. Its round pendant, adorned with ornate engravings, frames the iconic brand emblem — a symbol admired across the globe.',
      'Whether worn on a special occasion or as a touch of charm in your everyday look, this necklace completes your style and tells a story of refined taste and individuality.'
    ]
  },
  {
    image: '/assets/mb/v1/ref/product-7.svg',
    heading: 'Every bag carries a legacy of craftsmanship.',
    paragraphs: [
      'From the ateliers of the world\'s most renowned fashion houses, each bag tells a story of artistry and dedication.',
      'Meticulously constructed from the finest materials, these bags represent decades of perfected techniques passed down through generations of master craftsmen.',
      'Whether it becomes your everyday companion or a treasured centerpiece of your collection, each piece connects you to a rich heritage of style.'
    ]
  },
  {
    image: '/assets/mb/v1/ref/product-9.svg',
    heading: 'Discover the art of timeless accessories.',
    paragraphs: [
      'Accessories are the finishing touch that transforms any outfit into a statement of personal style.',
      'Each piece in our collection has been carefully selected for its quality, design heritage, and ability to elevate your wardrobe effortlessly.',
      'From elegant scarves to statement jewelry, these accessories bridge the gap between classic luxury and contemporary expression.'
    ]
  }
];

export default function StorySection() {
  const [current, setCurrent] = useState(0);
  const total = stories.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  const story = stories[current];

  return (
    <section className="border-t border-borderLight bg-white py-12 lg:py-20" aria-label="Brand stories">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
          {/* Image */}
          <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden lg:w-5/12">
            <Image
              src={story.image}
              alt={story.heading}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 lg:w-7/12">
            <h2
              className="mb-6 text-2xl leading-relaxed text-primaryText md:text-3xl"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {story.heading}
            </h2>
            {story.paragraphs.map((p, idx) => (
              <p key={idx} className="mb-4 text-sm leading-relaxed text-secondaryText">
                {p}
              </p>
            ))}
            <Link
              href="/shop"
              className="mt-4 inline-block border border-primaryText px-6 py-2.5 text-xs uppercase tracking-widest text-primaryText transition-colors hover:bg-primaryText hover:text-white"
            >
              Find Your Style
            </Link>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Previous story"
            className="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 text-secondaryText transition-colors hover:text-primaryText lg:-translate-x-8"
          >
            <ChevronLeft size={28} strokeWidth={1} />
          </button>
          <button
            onClick={next}
            aria-label="Next story"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 text-secondaryText transition-colors hover:text-primaryText lg:translate-x-8"
          >
            <ChevronRight size={28} strokeWidth={1} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {stories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to story ${idx + 1}`}
              className={`h-2 w-2 rounded-full transition-colors ${idx === current ? 'bg-primaryText' : 'bg-borderLight'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
