import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <div>
      <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-white">
        Subscribe
      </h3>
      <p className="mb-4 text-xs text-white/60">
        Be the first to get the latest news about trends, promotions, and much more!
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setEmail('');
        }}
        className="flex"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          aria-label="Email address"
          className="flex-1 border border-white/20 bg-transparent px-3 py-2 text-xs text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
        />
        <button
          type="submit"
          className="border border-white/20 border-l-0 px-4 py-2 text-xs uppercase tracking-widest text-white transition-colors hover:bg-white/10"
        >
          Join
        </button>
      </form>
      <div className="mt-6">
        <p className="mb-2 text-xs font-semibold text-white">Secure payments</p>
        <div className="flex items-center gap-2">
          {['Discover', 'MasterCard', 'PayPal', 'Skrill', 'VISA'].map((name) => (
            <span
              key={name}
              className="rounded bg-white/10 px-2 py-1 text-[10px] text-white/60"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
