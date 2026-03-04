import { useState } from 'react';

type Tab = { label: string; content: string };

export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const safeTabs = Array.isArray(tabs) ? tabs : [];
  const [active, setActive] = useState(0);
  if (safeTabs.length === 0) return <p className="text-sm text-secondaryText">No tab content available.</p>;
  return (
    <div>
      <div className="mb-4 flex gap-4" role="tablist" aria-label="Product tabs">
        {safeTabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActive(index)}
            className={`border-b-2 pb-2 text-sm ${active === index ? 'border-accent text-primaryText' : 'border-transparent text-secondaryText'}`}
            role="tab"
            aria-selected={active === index}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="rounded-md border border-borderLight p-4 text-sm text-secondaryText">{safeTabs[active]?.content}</div>
    </div>
  );
}
