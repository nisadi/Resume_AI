export default function Hero() {
  return (
    <section className="text-center py-20 bg-white">
      <p className="text-green-600 font-semibold mb-2">New AI Feature Added</p>
      <h2 className="text-5xl font-bold mb-4">Land your dream job with resumes.</h2>
      <p className="text-gray-600 text-lg mb-8">
        Create, edit and download professional resumes with AI-powered assistance.
      </p>
      <div className="flex justify-center gap-4">
        <button className="border-2 border-green-500 text-green-600 px-6 py-3 rounded-full">
          Get started
        </button>
        <button className="border px-6 py-3 rounded-full flex items-center gap-2">
          <span>Try demo</span>
        </button>
      </div>
    </section>
  );
}
