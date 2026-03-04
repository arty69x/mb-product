import { Truck, Headphones, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Fast And Free Delivery',
    description: 'Free delivery for all orders over $140'
  },
  {
    icon: Headphones,
    title: '24/7 Customer Support',
    description: 'Friendly 24/7 customer support'
  },
  {
    icon: ShieldCheck,
    title: 'Money Back Guarantee',
    description: 'We return money within 30 days'
  }
];

export default function FeatureIcons() {
  return (
    <section className="border-t border-borderLight py-12 lg:py-16" aria-label="Store features">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex flex-col items-center text-center">
                <Icon size={36} strokeWidth={1} className="mb-3 text-primaryText" />
                <h3 className="mb-1 text-sm font-semibold text-primaryText">{feature.title}</h3>
                <p className="text-xs text-secondaryText">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
