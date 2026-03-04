export function ReviewForm() {
  return (
    <form className="mt-6 grid gap-4 border p-4">
      <h4 className="text-lg">Leave a Review</h4>
      <label className="grid gap-2 text-sm">Rating<select className="border p-2"><option>5</option><option>4</option><option>3</option></select></label>
      <label className="grid gap-2 text-sm">Review Text<textarea className="border p-2" rows={4} /></label>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm">Name<input className="border p-2" /></label>
        <label className="grid gap-2 text-sm">Email<input type="email" className="border p-2" /></label>
      </div>
      <button className="w-fit border px-6 py-3 transition-all duration-200 ease-out hover:bg-black hover:text-white">Submit</button>
    </form>
  );
}
