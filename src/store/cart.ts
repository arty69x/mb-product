export type CartItem = { id: string; quantity: number };

export function safeParseCart(raw: string | null): CartItem[] {
  if (!raw) return [];
  try {
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data.filter((item) => item && typeof item.id === 'string' && typeof item.quantity === 'number') : [];
  } catch {
    return [];
  }
}
