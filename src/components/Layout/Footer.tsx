import { FOOTER_COLUMNS } from '@/src/lib/data/site';

export function Footer() {
  return (
    <footer className="bg-black py-12 text-white">
      <section>
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-5">
            <div>
              <p className="text-4xl">m3</p>
              <p className="mt-4 text-xs text-neutral-300">1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
            </div>
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="mb-3 text-xs tracking-[0.09em]">{col.title}</h3>
                <ul className="space-y-2 text-xs text-neutral-300">
                  {col.links.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="mb-3 text-xs tracking-[0.09em]">OPENING TIME</h3>
              <p className="text-xs text-neutral-300">Mon - Fri: 8AM - 9PM</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
