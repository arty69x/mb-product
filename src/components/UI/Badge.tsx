export default function Badge({ text }: { text: string }) {
  return <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs text-secondaryText">{text}</span>;
}
