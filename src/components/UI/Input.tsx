import { InputHTMLAttributes } from 'react';

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-md border border-borderLight px-4 py-2 text-sm text-primaryText outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent"
    />
  );
}
