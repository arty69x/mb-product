import { useState, ReactNode } from 'react';

type Tab = { label: string; content: ReactNode };

export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const safeTabs = Array.isArray(tabs) ? tabs : [];
  const [active, setActive] = useState(0);

  if (safeTabs.length === 0) {
    return <p className="text-sm text-secondaryText">No tab content available.</p>;
  }

  return (
    <div>
      <div className="flex justify-center gap-8 border-b border-borderLight" role="tablist" aria-label="Product information tabs">
        {safeTabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActive(index)}
            className={`pb-3 text-xs uppercase tracking-widest transition-colors ${
              active === index
                ? 'border-b-2 border-primaryText text-primaryText'
                : 'text-secondaryText hover:text-primaryText'
            }`}
            role="tab"
            aria-selected={active === index}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="pt-8" role="tabpanel">
        {safeTabs[active]?.content}
      </div>
    </div>
  );
}
