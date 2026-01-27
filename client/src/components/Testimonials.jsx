export default function Testimonials() {
  return (
    <section className="text-center py-16 bg-gray-50">
      <h3 className="text-4xl font-bold mb-6">Don’t just take our word</h3>
      <p className="text-gray-600 mb-10">Hear what our users say about us.</p>

      <div className="grid md:grid-cols-2 gap-8 px-6 max-w-4xl mx-auto">

        {/* Testimonial Card */}
        <div
          className="
            group
            p-6 rounded-xl bg-white
            shadow-sm
            transform transition-all duration-300 ease-in-out
            hover:scale-105 hover:bg-green-500 hover:shadow-green-200/60 hover:shadow-xl
          "
        >
          <p
            className="
              text-gray-600 mb-4
              transition-colors duration-300
              group-hover:text-white
            "
          >
            “Radiant made undercutting all our competitors an absolute breeze.”
          </p>
          <h5
            className="
              font-bold
              transition-colors duration-300
              group-hover:text-white
            "
          >
            Avery Johnson
          </h5>
          <p
            className="
              text-sm text-gray-500
              transition-colors duration-300
              group-hover:text-green-100
            "
          >
            @averywrites
          </p>
        </div>

        {/* Testimonial Card */}
        <div
          className="
            group
            p-6 rounded-xl bg-white
            shadow-sm
            transform transition-all duration-300 ease-in-out
            hover:scale-105 hover:bg-green-500 hover:shadow-green-200/60 hover:shadow-xl
          "
        >
          <p
            className="
              text-gray-600 mb-4
              transition-colors duration-300
              group-hover:text-white
            "
          >
            “Resume building was an absolute breeze.”
          </p>
          <h5
            className="
              font-bold
              transition-colors duration-300
              group-hover:text-white
            "
          >
            Jordan Lee
          </h5>
          <p
            className="
              text-sm text-gray-500
              transition-colors duration-300
              group-hover:text-green-100
            "
          >
            @jordantalks
          </p>
        </div>

      </div>
    </section>
  );
}
