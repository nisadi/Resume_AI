export default function Hero() {
  return (
    <section
      className="relative text-center py-28 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900/30"></div>

      {/* Content */}
      <div className="relative z-10 bg-white/80 backdrop-blur-sm max-w-4xl mx-auto py-16 px-6 rounded-2xl">
        <p className="text-green-600 font-semibold mb-2">
          New AI Feature Added
        </p>

        <h2 className="text-5xl font-bold mb-4">
          Land your dream job with resumes.
        </h2>

        <p className="text-gray-600 text-lg mb-8">
          Create, edit and download professional resumes with AI-powered assistance.
        </p>

        <div className="flex justify-center gap-4">
          <button className="border-2 border-green-500 text-green-600 px-6 py-3 rounded-full
               transition-all duration-300 ease-out
               hover:bg-green-500 hover:text-white hover:-translate-y-1 hover:shadow-lg">
            Get started
          </button>

          <button className="border px-6 py-3 rounded-full flex items-center gap-2
               transition-all duration-300 ease-out
               hover:border-green-500 hover:text-green-600 hover:-translate-y-1 hover:shadow-md">
            Try demo
          </button>
        </div>
      </div>
    </section>
  );
}
