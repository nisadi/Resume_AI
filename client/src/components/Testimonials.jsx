export default function Testimonials() {
  return (
    <section className="text-center py-16 bg-gray-50">
      <h3 className="text-4xl font-bold mb-6">Don’t just take our word</h3>
      <p className="text-gray-600 mb-10">Hear what our users say about us.</p>

      <div className="grid md:grid-cols-2 gap-8 px-6 max-w-4xl mx-auto">
        <div className="p-6 bg-white rounded-xl shadow-sm">
          <p className="text-gray-600 mb-4">“Radiant made undercutting all our competitors an absolute breeze.”</p>
          <h5 className="font-bold">Avery Johnson</h5>
          <p className="text-sm text-gray-500">@averywrites</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-sm">
          <p className="text-gray-600 mb-4">“Resume building was an absolute breeze.”</p>
          <h5 className="font-bold">Jordan Lee</h5>
          <p className="text-sm text-gray-500">@jordantalks</p>
        </div>
      </div>
    </section>
  );
}
