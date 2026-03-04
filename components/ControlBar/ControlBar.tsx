export function ControlBar() {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-y border-[#e5e5e5] py-4 text-sm">
      <p>DEFAULT SORTING</p>
      <div className="flex items-center gap-4">
        <p>VIEW 2 3 4</p>
        <button className="border px-4 py-2 transition-all duration-200 ease-out hover:bg-black hover:text-white">FILTER</button>
      </div>
    </div>
  );
}
