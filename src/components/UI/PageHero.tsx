import Image from 'next/image';

type Props = { title: string; image: string; heightClass?: string };

export function PageHero({ title, image, heightClass = 'h-[220px] md:h-[390px]' }: Props) {
  return (
    <section className="relative">
      <div className="container mx-auto px-4">
        <div className={`relative overflow-hidden ${heightClass}`}>
          <Image src={image} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/35" />
          <h1 className="absolute inset-0 grid place-items-center text-center text-4xl font-light uppercase tracking-[0.08em] text-white md:text-6xl">{title}</h1>
        </div>
      </div>
    </section>
  );
}
