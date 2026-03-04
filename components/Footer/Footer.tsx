export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div><h4 className="mb-3 text-lg">MB Luxury</h4><p className="text-sm text-white/70">No.1 Luxury Brandname</p></div>
          <FooterCol title="Company" items={["About", "Careers", "Contact"]} />
          <FooterCol title="Shop" items={["New Arrivals", "Bags", "Accessories"]} />
          <FooterCol title="Help" items={["Shipping", "Returns", "FAQ"]} />
          <FooterCol title="Opening Time" items={["Mon-Fri 10:00-19:00", "Sat-Sun 10:00-17:00"]} />
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/70 md:flex-row md:justify-between">
          <p>© 2026 MB Luxury. All rights reserved.</p>
          <p>Language: EN | Currency: USD</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h5 className="mb-3 font-medium">{title}</h5>
      <ul className="space-y-2 text-sm text-white/70">{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}
