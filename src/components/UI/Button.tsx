import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean };

export default function Button({ loading, disabled, className = '', children, ...props }: Props) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`rounded-md border border-borderLight bg-primaryText px-4 py-2 text-sm font-medium text-white transition hover:bg-accent active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}
